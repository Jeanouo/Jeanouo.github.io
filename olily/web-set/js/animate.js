// 畫面剛出現時顯示的內容順序,但尚未滑動
// header
$('.type-header').addClass('topToDown').css('animation-delay','3s');
// set5-1
$('.set5-1').addClass('fadeIn').css('animation-duration', '1.5s');
$('.main-texts-5 h1').addClass('leftToRight').css('animation-delay', '1.5s');
$('.main-texts-5 p').addClass('leftToRight').css('animation-delay', '2s');

// 畫面滑動時出現的內容順序
$(window).scroll(function(){ 
    if($(this).scrollTop() >= 300) {
        // set5-2 about
        $('.about-img-5 img').addClass('leftToRight').css('animation-delay', '0.5s');
        $('.about-text-5').addClass('fadeIn').css('animation-delay', '1s');
        $('.about-text-5 h2').addClass('downToTop').css('animation-delay', '1.5s');
        $('.about-text-5 p').addClass('downToTop').css('animation-delay', '2s');
        setTimeout(function(){
            $('.about-img-5 img').removeClass('opt').css('animation-delay', '0');
        }, 3000);
    };

    
    if($(this).scrollTop() >= 1200) {
        // set5-2 video
        $('.set5-3 h2').addClass('downToTop').css('animation-delay', '0.5s');      
        $('.set5-3 video').addClass('downToTop').css('animation-delay', '1s');      
        $('.play-btn').addClass('fadeIn').css('animation-delay', '1.5s');      
    };

    if($(this).scrollTop() > 1900) {
        // set5-2 services
        $('.set5-4').addClass('downToTop').css('animation-delay', '0.5s');      
        $('.set5-4 h2').addClass('leftToRight').css('animation-delay', '1s');      
        $('.set5-4 h2~p').addClass('leftToRight').css('animation-delay', '1.5s');      
        $('.wrapper-3e:nth-of-type(1)').addClass('fadeIn').css('animation-delay', '2s');      
        $('.wrapper-3e:nth-of-type(2)').addClass('fadeIn').css('animation-delay', '2.4s');      
        $('.wrapper-3e:nth-of-type(3)').addClass('fadeIn').css('animation-delay', '2.8s');      
        $('.wrapper-3e:nth-of-type(4)').addClass('fadeIn').css('animation-delay', '3.2s');      
        $('.wrapper-3e:nth-of-type(5)').addClass('fadeIn').css('animation-delay', '3.6s');      
        $('.wrapper-3e:nth-of-type(6)').addClass('fadeIn').css('animation-delay', '4s');      
    };

    if($(this).scrollTop() >= 2600) { 
        // set5-2 content
        $('.set5-5').addClass('fadeIn').css('animation-duration', '1.5s');        
        $('.set5-5 h2').addClass('downToTop').css('animation-delay', '2s');           
        $('.top').addClass('fadeIn').css('animation-delay', '2.5s');     
        $('.set5-5 p').addClass('downToTop').css('animation-delay', '2.5s');        
        $('.formbox input:nth-of-type(1)').addClass('fadeIn').css('animation-delay', '3s');      
        $('.formbox input:nth-of-type(2)').addClass('fadeIn').css('animation-delay', '3.5s');      
        $('.formbox div').addClass('fadeIn').css('animation-delay', '4s');      
        $('textarea').addClass('fadeIn').css('animation-delay', '4.5s');      
        $('.submit_btn').addClass('fadeIn').css('animation-delay', '5s');    
        $('.type5-footer').addClass('downToTop').css('animation-delay', '6s');     
        $('.top').addClass('fadeIn').css('animation-delay', '6.5s');     
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



resizemenu();
window.addEventListener('resize', resizemenu);

function resizemenu(){
    var windowsize = $(window).width();
    // var screensize = $(document ).width();
    if( windowsize <= 720){
        $('.menu').css('display','block');
        $('ul').css({'display':'none','height':'0'});        
        $('.about-img-5 img').css('animation', 'unset');   
        
        
        $('.menu').click(function(){
            $('ul').css('display','flex').animate({height: '100%'}, 500);
            $(this).css('display','none');
            $('.close').css('display','block');
        });

        $('.close, .menu-btn').click(function(){
            $('ul').animate({height: '0'}, 500);
            $('.close').css('display','none');
            $('.menu').css('display','block');
        });
    } else {
        $('.close, .menu').css('display','none');
        $('ul').css({'display':'flex','height':'auto'});    
    } 
}
