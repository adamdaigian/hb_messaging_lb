$(document).ready(function() {

  //mixpanel track
  $('[track]').click(function () {
    mixpanel.track($(this).attr("track"))  
  });

  //signup
  $('#home-sign-up').click(function () { 
    $('#home-sign-up').hide()
    // $('#google-signup').hide()
    // $('#email-signup').hide()
    // $('.divider').hide()
    $('#lp-registration').show()
  }); 

  jQuery(function() {
    var menu = jQuery(".navbar.navbar-default.navbar-fixed-top");
    jQuery(window).scroll(function() {    
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 15) {
         console.log('hello')
         menu.addClass("navbar-fill");
    } else {
        menu.removeClass("navbar-fill");
      }
    });
  });

});