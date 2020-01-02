$(function(){
    //changePIC
    $("#smainP").find("a").click(function(){
        $(".mainPic").find("img").attr("src",$(this).find("img").attr("src"));
    });
    
    //clickBTN
    $("")
    $(".explain ul li label").click(function(){         
        $(this).addClass("active").parent().siblings().children().removeClass('active');
        
    });
})



