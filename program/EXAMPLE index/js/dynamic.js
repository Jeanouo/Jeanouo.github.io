var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topBar").style.top = "0";
  } else {
    document.getElementById("topBar").style.top = "-40px";
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });

    $('.top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $('.winning button').click(function(){
      $('.winning').toggleClass('winning-close');
      setTimeout(function(){
        $('.winning button').toggleClass('winning-button-close');
      }, 500);
    });

    $('.contact button').click(function(){
      $('.contact').toggleClass('contact-close');
      setTimeout(function(){
        $('.contact button').toggleClass('contact-button-close');
      }, 500);
    });
    
    //$(function() {
      //  $('.flexslider').flexslider({
        //    slideshowSpeed: 5000,
          //  animationSpeed: 500,
    //        touch: true
    //    });
    //});

});
