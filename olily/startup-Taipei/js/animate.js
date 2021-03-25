// $('.top').hide();
$(window).scroll(function(){

    // if($(this).scrollTop() > 400) {
    //     $('.top').fadeIn();
    // } else if($(this).scrollTop() < 100) {
    // } else {
    //     $('.top').fadeOut();
    // }

    // clearTimeout($.data(this, 'scrollTimer'));
    // $.data(this, 'scrollTimer', setTimeout(function() {        
    //     $('.top').fadeOut();
    // }, 1500));

    if($(this).scrollTop() > 100) {
        $('.about-1').css('animation', 'downToTop 0.5s linear forwards');
        $('.about-1 h2').css('animation', 'downToTop 1s linear 0.5s forwards');
        $('.about-content').css('animation', 'downToTop 0.5s linear 1.5s forwards');
        $('.about-text-wrapper p').css('animation', 'fadeIn 1s linear 2s forwards');
    };

    if($(this).scrollTop() > 800) {
        $('video').css('animation', 'downToTop 0.5s linear forwards');
    };

    if($(this).scrollTop() > 1500) {
        $('.product-1').css('animation', 'downToTop 0.5s linear forwards');
        $('.product-1 h2').css('animation', 'downToTop 1s linear 0.5s forwards');
        $('.product-1 .fixed-width > p').css('animation', 'downToTop 0.5s linear 1.5s forwards');
        $('.product-imgNtext-wrapper:nth-of-type(1)').css('animation', 'downToTop 0.5s linear 2s forwards');
        $('.product-imgNtext-wrapper:nth-of-type(2)').css('animation', 'downToTop 0.5s linear 2.3s forwards');
        $('.product-imgNtext-wrapper:nth-of-type(3)').css('animation', 'downToTop 0.5s linear 2.6s forwards');
    };

    if($(this).scrollTop() > 2100) {
        $('.contact-1').css('animation', 'downToTop 0.5s linear forwards');
        $('.contact-1 h2').css('animation', 'downToTop 1s linear 0.5s forwards');
        $('.contact-1 .fixed-width > p').css('animation', 'downToTop 0.5s linear 1.2s forwards');
        $('.content-text p:nth-of-type(1)').css('animation', 'rightToLeft 0.5s linear 1.7s forwards');
        $('.content-text p:nth-of-type(2)').css('animation', 'rightToLeft 0.5s linear 2s forwards');
        $('.content-text p:nth-of-type(3)').css('animation', 'rightToLeft 0.5s linear 2.3s forwards');
        $('input:nth-of-type(1)').css('animation', 'fadeIn 1s linear 2.8s forwards');
        $('input:nth-of-type(2)').css('animation', 'fadeIn 1s linear 3.1s forwards');
        $('input:nth-of-type(3)').css('animation', 'fadeIn 1s linear 3.4s forwards');
        $('footer .fixed-width').css('animation', 'DownTotopFooter 0.5s linear 3.8s forwards');        
    };
    
});

$('.top-scroll').click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 300);
    return false;
});



var player = document.querySelector('.video-wrapper');
var video = player.querySelector('.video');
var playBTN = player.querySelector('.play-btn');
playBTN.addEventListener('click',togglePlay);

function togglePlay() {
    video.paused ? video.play() : video.pause();
}
$('.play-btn').click(function(){
    $(this).fadeOut();
});
$(video).click(function(){
    $('.play-btn').fadeOut();
});