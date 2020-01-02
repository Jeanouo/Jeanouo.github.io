var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if(prevScrollpos > currentScrollPos){
        document.getElementById('topBar').style.top = "0px";
    }else{
        document.getElementById('topBar').style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}

$(document).ready(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 400){
            $('.top').fadeIn();
        }else{
            $('.top').fadeOut();
        }
    });
    $('.top').click(function(){
        $("html,body").animate({
            scrollTop: 0
        },600);
        return false;
    });
    
    $('#menu').click(function(){
        $('.overhid').css("display","block");
        $('.menu').animate({left:'0px'},400);
    });
    
//menu button
    $('.menu li button').click(function(){        
        $(this).children('span').toggleClass('deg90');
        $(this).siblings('ul').toggle(600);
    });
    
    function non(){
        $('.overhid').css("display","none");
    }
    
    $('.menu>button').click(function(){
        $('.menu').animate({left:'-100%'},400);
        setTimeout(non, 500);
    });
    
    $('#pCart').click(function(){
        $('.overhid').css("display","block");
        $('.pCart').animate({right:'0px'},400);
    });
    
    $('.pCartTop button').click(function(){
        $('.pCart').animate({right:'-100%'},400);
        setTimeout(non, 500);
    });
    
    $('#carryon').click(function(){
        $('.pCart').animate({right:'-100%'},400);
        setTimeout(non, 500);
    });
    
//    公告
    $('.announcement button').click(function(){
        $('.announcement').animate({opacity:'0'},400);
        setTimeout("$('.announcement').css('display','none')",500);
    }); 
    
//    搜尋
    $('.searchtIcon i').click(function(){
//        $('.frPhLogin ul').animate({opacity:'0'},1000);
//        $('.searchtIcon div').animate({opacity:'1'},400).css("display","block");
        $('.searchtIcon div').toggle(600);
    }); 
    
    
//    註冊/登入
    $('.frPhLogin i').click(function(){
        $('.frPhLogin ul').toggleClass('heighttog');
    }); 
    
//    註冊
    $('#rgted, #rgted2').click(function(){
        $('.blackBg').css("display","block");
        $('.registered').css('display','block');
        $('.registered').animate({opacity:'1'},500);
    });   
    
//    註冊成功
    $('#checksent').click(function(){
        $('.registered').animate({opacity:'0'},400);
        setTimeout("$('.registered').css('display','none')",1000);
        setTimeout("$('.blackBg').css('display','none')",1000);
        setTimeout("$('.blackBg').css('display','block')",2000);
        setTimeout("$('.alert').css('display','block')",2000);
        setTimeout("$('.alert').animate({opacity:'1'},500)",2000); setTimeout("$('.alert').animate({opacity:'0'},500)",3500);
        setTimeout("$('.blackBg').css('display','none')",3500);
    });
    
//    登入
    $('#log, #log2').click(function(){
        console.log('.login');
        $('.blackBg').css("display","block");
        $('.login').css('display','block');
        $('.login').animate({opacity:'1'},500);
    });
        
    $('.blackBg').click(function(){
//    註冊
        $('.registered').animate({opacity:'0'},400);
        setTimeout("$('.registered').css('display','none')",1000);
//    登入
        $('.login').animate({opacity:'0'},400);
        setTimeout("$('.login').css('display','none')",1000);
        
        
        setTimeout("$('.blackBg').css('display','none')",1000);
    });
    
//    購物車-垃圾桶
    $('.trashtoclose').click(function(){
        $(this).parent().css('display','none');
    });
    
//    購物車頁面-X ?
    $('.xtoclose').click(function(){
        $(this).parents('.singleProduct').css('display','none');
    });
    
//    購物車-愛心?
    $('.heartfa').click(function(){
        $(this).children('i').toggleClass('fa-heart-o');
    });
     
    
//   singleProduct 按鈕開關(高度?)
//   商品說明
    $('#pdescription').click(function(){
        $('#ddescription').removeClass('delbtnhr');
        $('.del2').animate({opacity:'0'},500);
        setTimeout("$('.del2').css('display','none')",600);
                
        $('.caretfa').css({'transform':'rotate(180deg)'});
        $(this).addClass('delbtnhr');
        $('.delbox').css({'height':'auto','padding':'15px'});
        $('.delbox').animate({opacity:'1'},400);       
        setTimeout("$('.del1').css('display','block')",600);
        setTimeout("$('.del1').animate({opacity:'1'},1000)",600);
    });
//  詳細尺吋
    $('#ddescription').click(function(){
        $('#pdescription').removeClass('delbtnhr');
        $('.del1').animate({opacity:'0'},500);
        setTimeout("$('.del1').css('display','none')",600);
                
        $('.caretfa').css({'transform':'rotate(180deg)'});
        $(this).addClass('delbtnhr');
        $('.delbox').animate({opacity:'1'},400);
        $('.delbox').css({'height':'auto','padding':'15px'});
        setTimeout("$('.del2').css('display','block')",600);
        setTimeout("$('.del2').animate({opacity:'1'},1000)",600);
    });  
//  ▼按鈕區塊 顯示消失?
    $('#vn').click(function(){
        $('.caretfa').css({'transform':'rotate(0deg)'});
        $('.delbox').css({'height':'0','padding':'0'},3000);
        setTimeout("$('.delbox').animate({opacity:'0'},400)");
        setTimeout("$('.del2').css('display','none')",600);
//        $('.delbox').toggle();
//        $(this).removeClass('fa fa-caret-down');
//        $(this).addClass('fa fa-caret-up');
//        $('.delbox').toggle();
    });
});