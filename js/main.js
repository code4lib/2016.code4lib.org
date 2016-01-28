jQuery(document).ready(function($){
    var timelineBlocks = $('.cd-timeline-block'),
        offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
        (!window.requestAnimationFrame)
            ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
            : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
    });

    function hideBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
    }

    function showBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    }

    // Javascript to enable link to tab
    /*var hash = document.location.hash;
    var prefix = "tab_";
    if (hash) {
        $('.nav-tabs a[href='+hash.replace(prefix,"")+']').tab('show');
    }

    // Change hash for page-reload
    $('.nav-tabs a').on('shown', function (e) {
        window.location.hash = e.target.hash.replace("#", "#" + prefix);
    });*/

    $('.sort-workshop-time').click(function(){
        var time = $(this).attr('id');
        var place = $('.sort-workshop-locale').val();
        $('.sort-workshop-time').removeClass('active');
        $(this).addClass('active');
        sortWorkshops(time,place);
    });

    $('.sort-workshop-locale').change(function(){
        var time = $('.sort-workshop-time.active').attr('id');
        var place = $(this).val();
        sortWorkshops(time,place);
    }).trigger('change');

    function sortWorkshops(time,place){
        if(time == 'all' && place == 'all'){
            $('.workshop-well').removeClass('hidden');
        }
        if(time == 'all' && place != 'all'){
            $('.workshop-well[data-location="'+place+'"]').removeClass('hidden');
            $('.workshop-well:not([data-location="'+place+'"])').addClass('hidden');
        }
        if(time != 'all' && place == 'all'){
            $('.workshop-well[data-length="'+time+'"]').removeClass('hidden');
            $('.workshop-well:not([data-length="'+time+'"])').addClass('hidden');
        }
        if(time != 'all' && place != 'all'){
            $('.workshop-well[data-length="'+time+'"][data-location="'+place+'"]').removeClass('hidden');
            $('.workshop-well:not([data-length="'+time+'"][data-location="'+place+'"])').addClass('hidden');
        }
    }

});
