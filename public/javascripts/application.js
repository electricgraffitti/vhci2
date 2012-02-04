/*jslint white: false, onevar: false, browser: true, devel: true, undef: true, nomen: true, laxbreak: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, strict: false, newcap: true, immed: true, laxbreak: true */
/*global jQuery, $, Raphael */

var Forms = {
  
  validateContactForm: function () {
    contactForm = $("#contact_form");
    contactForm.ketchup();
  }

};

var Banners = {
  
  initHomeBanner: function() {
    Banners.fadeHomeBanners();  
  },

  fadeHomeBanners: function() {
    var banners = $(".banner_wrap");
    
    banners.animate({
      opacity: 1
      }, 1000)
      .delay(2000)
      .animate({
        "left": "-960px"
      }, 1000);
     
  }

}

var App = {
  
  setCurrentLink: function() {  
    var url = location.pathname;
    var current_link = $('#main_nav ul li a[href$="' + url + '"]');
    if (url == "/") {
       current_link.parent().removeClass('active');
       $('#home').parent().addClass('active');
     } else {
     current_link.parent().addClass('active');
     }
  }
  
};

$(document).ready(function() {
  App.setCurrentLink();
});




