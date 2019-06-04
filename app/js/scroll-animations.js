$(document).ready(function() {

  $(window).on('scroll', function() {

    var window_height = $(window).height();
    var bottom_limit  = window_height * .9;
    var $element = $('#change-bg');

    $element.each(function() {

      var element_distance_from_top = $(this).offset().top;
      var scroll_from_top           = $(window).scrollTop();
      var element_top = element_distance_from_top - scroll_from_top;

      if ((element_top + $(this).height()) < bottom_limit) {
        // $(this).css('background-color', 'black');
        $(this).addClass('overlay-bg');
        console.log('está');
      } else {
        $(this).removeClass('overlay-bg');
        console.log('NO');
      }
    });

  });

  // $(window).trigger('scroll');

});
