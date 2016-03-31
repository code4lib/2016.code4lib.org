jQuery(function() {
  var $search_results_container = $(".search_results");

  // Hide searchbox
  $( ".search_results i" ).on( "click", function() {
    $search_results_container.slideUp( "fast" );
  });

  // Initalize lunr with the fields it will be searching on. I've given title
  // a boost of 10 to indicate matches on this field are more important.
  window.idx = lunr(function () {
    this.field('id');
    this.field('title', { boost: 10 });
    this.field('speakers');
    this.field('type');
  });

  // Download the data from the JSON file we generated
  window.data = $.getJSON('/search_data.json');

  // Wait for the data to load and add it to lunr
  window.data.then(function(loaded_data){
    $.each(loaded_data, function(index, value){
      window.idx.add(
        $.extend({ "id": index }, value)
      );
    });
  });

  // Event when the form is submitted
  $("#site_search").submit(function(event){
      event.preventDefault();
      var query = $("#search_box").val(); // Get the value for the text field
      var results = window.idx.search(query); // Get lunr to perform a search
      display_search_results(results); // Hand the results off to be displayed
  });

  var decodeEntities = (function() {
    // this prevents any overhead from creating the object each time
    var element = document.createElement('div');

    function decodeHTMLEntities (str) {
      if(str && typeof str === 'string') {
        // strip script/html tags
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
      }

      return str;
    }

    return decodeHTMLEntities;
  })();

  function display_search_results(results) {
    var $search_results = $("#search_results");

    // Wait for data to load
    window.data.then(function(loaded_data) {

      $(".search_results h2").remove();
      var s = '';

      // Are there any results?
      if (results.length) {
        $search_results.empty(); // Clear any old results

        if (results.length > 1) { s = 's'; }

        var prependString = '<h2>Yuuss! You got ' + results.length + ' search result' + s + '!</h2>';
        $search_results_container.prepend(prependString);

        // Iterate over the results
        results.forEach(function(result) {
          var item = loaded_data[result.ref];

          // Build a snippet of HTML for this result
          var appendString = '<li><a href="' + item.url + '">' + decodeEntities(item.title) + '</a><br/><span><strong>Speakers: </strong>' + item.speakers + '</span><br/><span class="label label-default">' + item.type + '</span></li>';

          // Add it to the results
          $search_results.append(appendString);

        });
      } else {
        var prependString = '<h2>Sorry!</h2>';
        $search_results_container.prepend(prependString);
        $search_results.html('<li>No results found</li>');
      }

      $search_results_container.slideDown( "fast" );

    });
  }
});
