$('.loading').delay(2000).fadeOut(400);
// $('.welcome').hide();
// $('.welcome').delay(5000).fadeIn(100);

$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.slick-dots').addClass('slick-dots-scroll');
    } else {        
        $('.slick-dots').removeClass('slick-dots-scroll');
    }
});


$(window).click(function(){
    $('.contact-text').css('display','none');
    $('.effect').animate({opacity:'0'});
    $('.more').animate({opacity:'0'});
});
$('.loepard').click(function(e){
    e.stopPropagation();
    $('.welcome').fadeOut(400);
    $('.contact-text').css('display','none');
    $('.more').animate({opacity:'0'});
    $('.effect').animate({opacity:'1'});
});
$('.girl').click(function(e){
    e.stopPropagation();
    $('.contact-text').css('display','block');
    $('.welcome').fadeOut(400);
    $('.effect').animate({opacity:'0'});
    $('.more').animate({opacity:'0'});
});
$('.rabbit').click(function(e){
    e.stopPropagation();
    $('.welcome').fadeOut(400);
    $('.contact-text').css('display','none');
    $('.effect').animate({opacity:'0'});
    $('.more').animate({opacity:'1'});
});
$('.bear').click(function(){
    $('.welcome').fadeOut(400);
    $('.learn-page-bgwrapper').fadeIn(400);
    $('.learn-page').fadeIn(400).animate({right:'0'});
});

$('.learn-close').click(function(){
    $('.learn-page').animate({right:'-450px'});
    $('.learn-page-bgwrapper').delay(600).fadeOut(400);
    $('.learn-content-wrapper').delay(800).slideUp();
    $('.learn-menu-sec').delay(800).animate({left:'100%'});
    $('.learn-page').removeClass('learn-page-beBig');
    $('.learn-besmail').css('display','none');
    
    if(window.innerWidth > 414) {        
        $('.learn-beBig').css('display','flex');
    } else {        
        $('.learn-beBig').css('display','none');
    }
});
$('.learn-page-bgwrapper').click(function(){
    $('.learn-page').animate({right:'-450px'});
    $('.learn-page-bgwrapper').delay(600).fadeOut(400);
    $('.learn-content-wrapper').delay(800).slideUp();
    $('.learn-menu-sec').delay(800).animate({left:'100%'});
});
$('.learn-page').click(function(noClose){
    noClose.stopPropagation();
});
$('.learn-beBig').click(function(){
    $('.learn-page').addClass('learn-page-beBig');
    setTimeout(function(){
        $('.learn-beBig').css('display','none');
        $('.learn-besmail').css('display','flex');
    }, 500);
});
$('.learn-besmail').click(function(){
    $('.learn-page').removeClass('learn-page-beBig');
    setTimeout(function(){
        $('.learn-besmail').css('display','none');
        $('.learn-beBig').css('display','flex');
    }, 500);
});

setTimeout(function(){
    var writer = new TypeWriter({
        container: document.querySelector('#writer'),
        // strs: ['Welcome to JCDS Webside.','Click US.'],
        strs: ['歡迎來到JCDS!   ','請點擊我們↙↓↘'],
        delay: 200,
    });
}, 6000);
// $('.work-btn-all').click(function(){
//     $('.web').css('display','block');
//     $('.banner').css('display','block');
// });
// $('.work-btn-web').click(function(){
//     $('.web').css('display','block');
//     $('.banner').css('display','none');
// });
// $('.work-btn-banner').click(function(){
//     $('.banner').css('display','block');
//     $('.web').css('display','none');
// });

$('.learn-main-title').click(function(){
    $(this).next('.learn-menu-sec').animate({left:'0'});
});
$('.sec-back-btn').click(function(){
    $('.learn-menu-sec').animate({left:'100%'});
});
$('.sec-title').click(function(){
    $(this).parent().siblings().children('.learn-content-wrapper').slideUp();
    $(this).next('.learn-content-wrapper').slideToggle();
});
$('.liearn-webNside-1').click(function(){
    $('.learn-content-wrapper').slideUp();
    $('#liearn-webNside-1 ~ .learn-content-wrapper').slideDown();
});
$('.liearn-SEOrelatedTools-1').click(function(){
    $('.learn-content-wrapper').slideUp();
    $('#liearn-SEOrelatedTools-1 ~ .learn-content-wrapper').slideDown();
});


$('.case-detail-wrapper-bg').click(function(){
    $('.work-casies-wrapper').css('display','none');
});
$('.case-detail-wrapper').click(function(noClose){
    noClose.stopPropagation();
});

$('.ew1').click(function(){
    $('.wc1').css('display','block');
});
$('.ew2').click(function(){
    $('.wc2').css('display','block');
});
$('.ew3').click(function(){
    $('.wc3').css('display','block');
});
$('.ew4').click(function(){
    $('.wc4').css('display','block');
});
$('.ew5').click(function(){
    $('.wc5').css('display','block');
});
$('.ew6').click(function(){
    $('.wc6').css('display','block');
});
$('.ew7').click(function(){
    $('.wc7').css('display','block');
});
$('.ew8').click(function(){
    $('.wc8').css('display','block');
});
$('.ew9').click(function(){
    $('.wc9').css('display','block');
});
$('.ew10').click(function(){
    $('.wc10').css('display','block');
});
$('.ew11').click(function(){
    $('.wc11').css('display','block');
});
$('.ew12').click(function(){
    $('.wc12').css('display','block');
});
$('.ew13').click(function(){
    $('.wc13').css('display','block');
});
$('.ew14').click(function(){
    $('.wc14').css('display','block');
});
$('.ew15').click(function(){
    $('.wc15').css('display','block');
});
$('.ew16').click(function(){
    $('.wc16').css('display','block');
});
$('.ew17').click(function(){
    $('.wc17').css('display','block');
});
$('.ew18').click(function(){
    $('.wc18').css('display','block');
});
$('.ew19').click(function(){
    $('.wc19').css('display','block');
});
$('.ew20').click(function(){
    $('.wc20').css('display','block');
});
$('.ew21').click(function(){
    $('.wc21').css('display','block');
});
$('.ew22').click(function(){
    $('.wc22').css('display','block');
});