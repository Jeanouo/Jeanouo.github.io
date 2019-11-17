$('.welcomeBTN').mouseover(function(){
    $('.welcome-absolute').css('align-items','center');
    $('.welcome-absolute p').hide('slow');
    $('.welcome-absolute h4').text('Enter').css({'font-size':'200%','padding-bottom':'5px','border-bottom':'2px solid #fff'});
});

$('.welcomeBTN').mouseout(function(){
    $('.welcome-absolute').css('align-items','flex-end');
    $('.welcome-absolute p').show('slow');
    $('.welcome-absolute h4').text('JCDS').css({'font-size':'24px','padding-bottom':'none','border-bottom':'none'});
});

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