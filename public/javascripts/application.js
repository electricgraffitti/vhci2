/*jslint white: false, onevar: false, browser: true, devel: true, undef: true, nomen: true, laxbreak: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, strict: false, newcap: true, immed: true, laxbreak: true */
/*global jQuery, $, Raphael */

var Forms = {
  
  validateContactForm: function () {
    contactForm = $("#contact_form");
    contactForm.ketchup();
  }

};

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




