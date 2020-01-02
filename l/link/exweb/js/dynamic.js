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
        var wleft = $('.winning').css('left');
        if(wleft === '0px'){
            $('.winning').addClass('winningLeft');
            $('.winning button').addClass('btn180');
            $('.overhid:nth-of-type(2)').addClass('box60');
        }else{
            $('.winning').removeClass('winningLeft');
            $('.winning button').removeClass('btn180');
            $('.overhid:nth-of-type(2)').removeClass('box60');
        }
    });
    
    $('.contact button').click(function(){
        var cright = $('.contact').css('right');
        if(cright === '0px'){
            $('.contact').addClass('contactRight');
            $('.contact button').addClass('btn180');
            $('.overhid:nth-of-type(3)').addClass('box60');
        }else{
            $('.contact').removeClass('contactRight');
            $('.contact button').removeClass('btn180');
            $('.overhid:nth-of-type(3)').removeClass('box60');
        }
    });
        
    $('#menu').click(function(){
        console.log('.menu');
        $('.menu').animate({left:'0px'},400);
    });
    
    $('.menu button').click(function(){
        $('.menu').animate({left:'-320px'},400);
    });
});