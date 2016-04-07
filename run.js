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
    console.log('transitionOut');
  }
  
  // Plugin example
  // $('.menu-icon').fancyMenu({
  //   linkClass: '.animated_link_start'
  // });
  
});


// javascript:alert("hello world");

// $(".dropdown").hover(function () {
//    $(this).find('.button').fadeIn(100);
//    $(".dropdown-menu").show();
// },


// function () {
//    $(this).find('.box-hover').fadeOut(100);
//    $(".box-tresc").hide();
// });
