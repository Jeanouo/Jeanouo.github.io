$(function(){
    $("#smainP").find("a").click(function(){
        $(".mainPic").find("img").attr("src",$(this).find("img").attr("src"));
    });
})