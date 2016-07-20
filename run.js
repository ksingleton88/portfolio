$(document).ready(function() {

  // - Add an event listener for clicking hamburger menu icon
  $('.menu-icon').on('click', function() {
    
    var $icon = $(this);
    
    // If the menu is shown, transitionOut
    if ($icon.hasClass('menu-open')) {
          
       transitionOut(function(){
        $icon.removeClass('menu-open');
       });
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
  
  function transitionOut(callback) {
    var time = 0;
    var delay = 200;

    $('.animated_link_end').each(function () {

      var $link = $(this);
      time += delay;

      setTimeout(function() {
        $link.removeClass('animated_link_end');
        setTimeout(callback, 1000);
      }, time);

    })

  };

  $(function($) {
    var options = {
      $menu: false,
      menuSelector: 'a',
      panelSelector: '.slide1, .slide2, .slide3, .slide4',
      namespace: '.panelSnap',
      onSnapStart: function(){},
      onSnapFinish: function(){},
      onActivate: function(){},
      directionThreshold: 50,
      slideSpeed: 200,
      easing: 'linear',
      offset: 0,
      navigation: {
        keys: {
          nextKey: false,
          prevKey: false,
        },
        buttons: {
          $nextButton: false,
          $prevButton: false,
        },
        wrapAround: false
      }
    };

    $('body').panelSnap(options);
  });
  // $(function() {
  //   // Stick the #nav to the top of the window
  //   var nav = $('.menu-icon');
  //   var navHomeY = nav.offset().top;
  //   var isFixed = false;
  //   var $w = $(window);
  //   $w.scroll(function() {
  //       var scrollTop = $w.scrollTop();
  //       var shouldBeFixed = scrollTop > navHomeY;
  //       if (shouldBeFixed && !isFixed) {
  //           nav.css({
  //               position: 'fixed',
  //               top: 0,
  //               left: nav.offset().left,
  //               width: nav.width()
  //           });
  //           isFixed = true;
  //       }
  //       else if (!shouldBeFixed && isFixed)
  //       {
  //           nav.css({
  //               position: 'static'
  //           });
  //           isFixed = false;
  //       }
  //   });
// });

});




