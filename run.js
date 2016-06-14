$(document).ready(function() {

  // - Add an event listener for clicking hamburger menu icon
  $('.menu-icon').on('click', function() {
    
    var $icon = $(this);
    
    // If the menu is shown, transitionOut
    if ($icon.hasClass('menu-open')) {
          $icon.removeClass('menu-open');
       transitionOut();
    }
    // Else, transitionIn
    else {
      $icon.addClass('menu-open');
      transitionIn();
    }
    
  });
  
  function transitionIn() {
    var time = 0;
    var delay = 200; // 1000 = 1s

    // Add class to the links
    $('.animated_link_start').each(function () {

      var $link = $(this);
      time += delay;

      setTimeout(function() {
        $link.addClass('animated_link_end');
      }, time);

    });
  }
  
  function transitionOut() {
    var time = 0;
    var delay = 200;

    $('.animated_link_end').each(function () {

      var $link = $(this);
      time += delay;

      setTimeout(function() {
        $link.removeClass('animated_link_end');
      }, time);

    })

  };
  
  $(function() {
    // Stick the #nav to the top of the window
    var nav = $('.menu-icon');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});

});




