// 畫面剛出現時顯示的內容順序,但尚未滑動
// header
$('.type-header').addClass('topToDown').css('animation-delay','3s');
// set2-1 主要畫面
$('.set2-1').addClass('fadeIn').css('animation-duration', '1.5s');
$('.set2-1 h1').addClass('leftToRight').css('animation-delay', '1.5s');
$('.set2-1 p').addClass('leftToRight').css('animation-delay', '2s');

// 畫面滑動時出現的內容順序
$(window).scroll(function(){ 
    if($(this).scrollTop() >= 300) {
        // set5-2 製作緣起
        $('.about-img-5').addClass('fadeIn').css('animation-delay', '0.5s');
        $('.about-text-5').addClass('rightToLeft').css('animation-delay', '1s');
        $('.about-text-5 h2').addClass('downToTop').css('animation-delay', '1.5s');
        $('.about-text-5 p').addClass('downToTop').css('animation-delay', '2s');
        setTimeout(function(){
            $('.about-img-5 img').removeClass('opt').css('animation-delay', '0');
        }, 3000);
    };

    
    if($(this).scrollTop() >= 1200) {
        // set2-4 立即觀看
        $('.set2-4').addClass('fadeIn').css('animation-delay', '0.5s');
        $('.set2-4 h2').addClass('downToTop').css('animation-delay', '0.5s');      
        $('.set2-4 p').addClass('downToTop').css('animation-delay', '1s');      
        $('.set2-4 .wrapper-3e:nth-of-type(1)').addClass('downToTop').css('animation-delay', '1.5s');      
        $('.set2-4 .wrapper-3e:nth-of-type(2)').addClass('downToTop').css('animation-delay', '2s');      
        $('.set2-4 .wrapper-3e:nth-of-type(3)').addClass('downToTop').css('animation-delay', '2.5s');      
    };

    if($(this).scrollTop() > 1900) {
        // set9-4 特色亮點
        $('.set9-4').addClass('downToTop').css('animation-delay', '0.5s');
        $('.set9-4 h2').addClass('downToTop').css('animation-delay', '1s');
        $('.set9-4 .wrapper-3e:nth-of-type(1)').addClass('downToTop').css('animation-delay', '1.4s');
        $('.set9-4 .wrapper-3e:nth-of-type(2)').addClass('downToTop').css('animation-delay', '1.8s');
        $('.set9-4 .wrapper-3e:nth-of-type(3)').addClass('downToTop').css('animation-delay', '2.2s');
    };

    if($(this).scrollTop() >= 2600) { 
        // set5-5 聯絡我們
        $('.set5-5').addClass('fadeIn').css('animation-duration', '0.5s');        
        $('.set5-5 h2').addClass('downToTop').css('animation-delay', '1s');            
        $('.formbox input:nth-of-type(1)').addClass('downToTop').css('animation-delay', '1.5s');      
        $('.formbox input:nth-of-type(2)').addClass('downToTop').css('animation-delay', '1.9s');      
        $('.formbox input:nth-of-type(3)').addClass('downToTop').css('animation-delay', '2.3s');      
        $('.formbox input:nth-of-type(4)').addClass('downToTop').css('animation-delay', '2.7s');      
        $('.submit_btn').addClass('fadeIn').css('animation-delay', '3.5s');       
        $('.type5-footer').addClass('downToTop').css('animation-delay', '4s');     
        $('.top').addClass('fadeIn').css('animation-delay', '4.5s');     
    };
    
});

$('.top-scroll').click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 300);
    return false;
});



// var player = document.querySelector('.video-wrapper');
// var video = player.querySelector('.video');
// var playBTN = player.querySelector('.play-btn');
// playBTN.addEventListener('click',togglePlay);

// function togglePlay() {
//     video.paused ? video.play() : video.pause();
// }
// $('.play-btn').click(function(){
//     $(this).fadeOut();
// });
// $(video).click(function(){
//     $('.play-btn').fadeOut();
// });



// resizemenu();
// window.addEventListener('resize', resizemenu);

// function resizemenu(){
//     var windowsize = $(window).width();
//     // var screensize = $(document).width();
//     if( windowsize <= 720){
//         $('.menu').show();
//         // $('ul').css({'display':'none','height':'0'});        
//         $('ul').slideUp('slow');
//         $('.about-img-5 img').css('animation', 'unset');        
//     } else {
//         $('.close, .menu').hide();
//         // $('ul').css({'display':'flex','height':'auto'});  
//         // $('ul').fadeIn();        

//     } 
// }
resizemenu();
window.addEventListener('resize', resizemenu);

function resizemenu(){
    var windowsize = $(window || document).width();
    if( windowsize <= 720){
        $('.type-header .menu').show();   
        $('.type-header .close').hide();      
        $('.type-header ul').hide();
        $('.about-img-5 img').css('animation', 'unset');   

        // $('.menu-btn').click(function(){
        //     $('ul').slideUp('slow');
        //     $('.close').hide();
        //     $('.menu').show();
        // });     
    } 
    if( windowsize > 720) {
        $('.type-header .close, .type-header .menu').hide();
        $('.type-header ul').show();
        
        // $('.menu-btn').click(function(){
        //     console.log('點擊');
        //     $('ul').show();
        //     $('.close').hide();
        //     // $('.close, .menu').hide();
        //     $('.menu').show();
        // });     
    }
} 


$('.type-header .menu').click(function(){
    $('.type-header ul').slideDown('slow');
    $(this).hide();
    $('.type-header .close').show();
});

$('.type-header .close').click(function(){
    $('.type-header ul').slideUp('slow');
    $('.type-header .close').hide();
    $('.type-header .menu').show();
});

$('.set2-4 .wrapper-3e').click(function(){
    $(this).next().css('display','flex').addClass('fadeIn');
    $('.type-header').css('z-index','0');
    $('.about-img-5').css('z-index','0');
    $('.set9-4, .set5-5, .type5-footer').css({'z-index':'-1','position':'relative'});
});

$('.set2-4 .product-video-wrapper .close').click(function(){
    $(this).parent().css('display','none').addClass('opt');
    $('.type-header').css('z-index','2');
    $('.about-img-5').css('z-index','1');
    $('.set9-4, .set5-5, .type5-footer').css({'z-index':'0','position':'unset'});
});

