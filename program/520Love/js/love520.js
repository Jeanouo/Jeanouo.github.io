const todown = $(".btn");
const totop = $(".to-top")

// 往下查看心仪主播-按鈕
$(".btn").click(function() {
    $('html,body').animate({
        scrollTop: $(".line3").offset().top
    }, 'slow');
    todown.hide(500);
});

// to top-按鈕
totop.hide(500);
$(".to-top").click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 'slow');
});

$(document).scroll(function() {
    if ($(document).scrollTop() <= 0) {
        todown.show(500);
        totop.hide(500);
    }
    if ($(document).scrollTop() > 300) {
        todown.hide(500);
        totop.show(500);
    }
});