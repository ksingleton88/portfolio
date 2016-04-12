$(document).ready(function() {

  // - Add an event listener for clicking hamburger menu icon
  $('.menu-icon').on('click', function() {
    //this.parent (for styling dropdown once expanded. Modifying below code)
    
    var $dropdown = $(this).parent();
   
    // If the menu is shown, transitionOut
    if ($dropdown.hasClass('menu-open')) {
      $dropdown.removeClass('menu-open');
      transitionOut();
    }
    // Else, transitionIn
    else {
      $dropdown.addClass('menu-open');
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



// add class .drop-down stating whether or not you are expanded. 
  
  
  // Plugin example
  // $('.menu-icon').fancyMenu({
  //   linkClass: '.animated_link_start'
  // });
  



