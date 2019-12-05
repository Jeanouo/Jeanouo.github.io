// for 歡迎頁面-滑入按鈕時的狀態
$('.welcomeBTN').mouseover(function(){
    $('.welcome-absolute').css('align-items','center');
    $('.welcome-absolute p').hide('slow');
    $('.welcome-absolute h4').text('Enter').css({'font-size':'200%','padding-bottom':'5px','border-bottom':'2px solid #fff'});
});

// for 歡迎頁面-滑出按鈕時的狀態
$('.welcomeBTN').mouseout(function(){
    $('.welcome-absolute').css('align-items','flex-end');
    $('.welcome-absolute p').show('slow');
    $('.welcome-absolute h4').text('JCDS').css({'font-size':'24px','padding-bottom':'none','border-bottom':'none'});
});

// for 歡迎頁面-點擊按鈕,進入畫面
function enterJCDS() {
    $('.welcomeBg-pink').addClass('pink-cover');
    setTimeout(function(){
        $('.welcomeBg').css('opacity','0');
    }, 500);
    setTimeout(function(){
        $('.welcomeBg').css('display','none');
        $('.jc-content').css('max-height','unset');
    }, 1000);
}

// for 歡迎頁面-過5s後跑時間軸,進入畫面
// setTimeout(function(){
//     $('.timeline-running').css('width','100%');
//     setTimeout(function(){
//         $('.welcomeBg').css('opacity','0');
//     }, 2000);
//     setTimeout(function(){
//         $('.welcomeBg').css('display','none');
//         $('.jc-content').css('max-height','unset');
//     }, 3000);
// }, 5000);

// for 主要選單-滑入選單樣式
$('.menu-icon').on('click',function(){
    var open = $('.menu-open');
    if(open.length > 0){
        $('.menu-icon').addClass('menu-close');
        $('.menu-icon').removeClass('menu-open');
        $('.jc-menu').addClass('jc-menu-open');
        $('.jc-menu-triangle').addClass('jc-menu-open');
        $('.menu-content').addClass('menu-content-open');
        $('.menu-eachlink').addClass('show-out');
    } else {
        $('.menu-icon').addClass('menu-open');
        $('.menu-icon').removeClass('menu-close');
        $('.menu-eachlink').removeClass('show-out');
        setTimeout(function(){
            $('.jc-menu').removeClass('jc-menu-open');
            $('.jc-menu-triangle').removeClass('jc-menu-open');
            $('.menu-content').removeClass('menu-content-open');
        },1200);
    }
});














