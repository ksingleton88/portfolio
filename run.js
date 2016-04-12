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
    // - Remove class `animated_link_end` from each link

       // - Remove class `animated_link_end` from each link

    //below code does not work
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

});

//The below code removes the links. However, not the same as how they come in. Do I need animated_link_end to be a class along w/ animated_start? If so, why does it break the jquery and not work at all? Everything re-appears. 


  //   $( ".menu-icon" ).on('click', function() {
  //   $( ".dropdown-menu" ).finish().fadeOut( 
  //       800,
  //       function(){
  //         $(this).hide();
  //       }
  //     );
  //   });
  // }
  
  
  // Plugin example
  // $('.menu-icon').fancyMenu({
  //   linkClass: '.animated_link_start'
  // });
  



