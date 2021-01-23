// 下滑看活動-按鈕
$(".vj-go-next").click(function() {
    $('html,body').animate({
        scrollTop: $(".vj-third-content").offset().top
    }, 'slow');
});


$(document).scroll(function() {
    // 卷軸下滑-加動畫效果
    if ($(document).scrollTop() > 0) {
        $('.vj-third-content, .vj-fourth-content, .vj-foooter').css('opacity', '1');
        $('.vj-third-content').addClass('vj-third-animation');
        $('.vj-fourth-content').addClass('vj-fourth-animation');
        $('.vj-btn').addClass('vj-btn-animation');
    }
    // 卷軸滑到最上方-移除動畫效果
    if ($(document).scrollTop() <= 0) {
        $('.vj-third-content, .vj-fourth-content, .vj-foooter').css('opacity', '0');
        $('.vj-third-content').removeClass('vj-third-animation');
        $('.vj-fourth-content').removeClass('vj-fourth-animation');
        $('.vj-btn').removeClass('vj-btn-animation');
    }
});

// 點擊"下滑看活動"按鈕後-加動畫效果
$('.vj-go-next').click(function() {
    $('.vj-third-content, .vj-fourth-content, .vj-foooter').css('opacity', '1');
    $('.vj-third-content').addClass('vj-third-animation');
    $('.vj-fourth-content').addClass('vj-fourth-animation');
    $('.vj-btn').addClass('vj-btn-animation');
});