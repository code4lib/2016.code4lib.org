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
    
    var lhash = location.hash;
    if($(lhash+'-id').length){
        setTimeout(function() {
            toggleSpeaker(lhash);
        }, 300);
    }
    
    function toggleSpeaker(target){
        if($('.speaker-info.show').length){
            var shownHeight = $('.speaker-info.show').height();
        } else {
            var shownHeight = 0;
        }
        
        $('html, body').animate({
            scrollTop: $(target+'-id').offset().top - shownHeight
        }, 500);
        if(!$(target+'-id').hasClass('show')){
                $('.speaker-info').removeClass('show');
                $('.speaker-box').removeClass('selected');
                $(target+'-info').addClass('show');
                $(target+'-id').addClass('selected');
            } else {    
                $(target+'-info').removeClass('show');
                $(target+'-id').removeClass('selected');
            }
    }
    
    $('.speaker-info-toggle').click(function(e){
        e.preventDefault();
        var target = $(this).data('target');
        toggleSpeaker(target);
    });
    
    resetOrders = function(){
        var windowWidth = window.innerWidth,
            infoOrder = 1,
            i = 1,
            ik = 1;

        $('.speaker-sequence .speaker-box').each(function(){
            var infoTarget = $(this).data('speaker-info');
            if(windowWidth >= 935){
                $(this).css('order',i);
                infoOrder = i + 3;
                $(infoTarget).css('order',infoOrder);
                if((i%3) == 0){
                    i = i+4;
                } else {
                    i++;
                }
            } else if (windowWidth >= 635){
                $(this).css('order',i);
                infoOrder = i + 2;
                $(infoTarget).css('order',infoOrder);
                if((i%2) == 0){
                    i = i+3;
                } else {
                    i++;
                }
            } else {
                $(this).css('order',i);
                infoOrder = i + 1;
                $(infoTarget).css('order',infoOrder);
                i = i+2;
            }
        });
        $('.keynote-sequence .speaker-box').each(function(){
            var infoTarget = $(this).data('speaker-info');
            if(windowWidth >= 635){
                $(this).css('order',ik);
                infoOrder = i + 2;
                $(infoTarget).css('order',infoOrder);
                ik++;
            } else {
                $(this).css('order',ik);
                infoOrder = i + 1;
                $(infoTarget).css('order',infoOrder);
                ik = ik+2;
            }
        });
    }
    
    resetOrders();
    
    var window_frame = $(window);
    var response_change = {};

    response_change.waitForIdle = function(fn, delay) {
      var timer = null;
      return function () {
        var context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      };
    };
    
    window_frame.on('resize', response_change.waitForIdle(function() {

      if ( $('.speaker-box' ).length) {
        resetOrders();
      }
    }, 100));
    
    

});
