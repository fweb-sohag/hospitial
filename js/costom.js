var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

$(function(){
  "use strict";
  var backToTop = $('.backToTop');
  var html_body = $('html,body');
  
  
      $(window).scroll(function () { 
          var scrolling = $(this).scrollTop();
          if(scrolling > 200){
              backToTop.fadeIn();
          }else{
              backToTop.fadeOut();
          }
          if(scrolling >200){
               $('.navbar').addClass('fixd-nav');
           }else{
               $('.navbar').removeClass('fixd-nav');
           }
      });
  
  
      backToTop.on('click',function(){
          html_body.animate({
              scrollTop:0,
          },1500);
      });
  
      $('.navbar .navbar-nav .nav-item a').on('click', function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  html_body.animate({
                      scrollTop: target.offset().top - 0
                  }, 1500,);
                  return false;
              }
          }
      });  

  });
   //Add Active Class//
   $('.navbar .navbar-nav .nav-link').click(function () {
    // $('.navbar a').removeClass('active');
    // $(this).addClass('active');//
    $(this).addClass('active').parent().siblings().find('.nav-link').removeClass('active');
  });
     //    menu icon toggler

     $(".navbar .navbar-toggler").on("click", function () {

      $(".navbar .navbar-toggler span").toggleClass("fas fa-times");

  });
    // preloder
    $(window).load(function(){
        $('.loader').delay(500).fadeOut();
    });