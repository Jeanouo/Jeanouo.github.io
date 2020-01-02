$(function(){
    $(".navbar-collapse").localScroll({
        duration:900,
		hash:1,
//		easing:"easeOutBack"
		easing:"easeInOutExpo"
    });
            
    $('nav,.bg1,.bg2,.bg3,.bg4,.bg5,.bg6,footer').click(function(){
        $('.m').removeClass('menuhor');
        $('.sm').removeClass('menuhorlia');
        $('.sm').parent().removeClass('menuhorli');
    }); 
            
    $('.m1,.sm1').click(function(){
        $('.m').removeClass('menuhor');
        $('.sm').removeClass('menuhorlia');
        $('.sm').parent().removeClass('menuhorli');
        $('.m1').addClass('menuhor');
        $('.sm1').addClass('menuhorlia');
        $('.sm1').parent().addClass('menuhorli');
    }); 
    $('.m2,.sm2').click(function(){
        $('.m').removeClass('menuhor');
        $('.sm').removeClass('menuhorlia');
        $('.sm').parent().removeClass('menuhorli');
        $('.m2').addClass('menuhor');
        $('.sm2').addClass('menuhorlia');
        $('.sm2').parent().addClass('menuhorli');
    }); 
    $('.m3,.sm3').click(function(){
        $('.m').removeClass('menuhor');
        $('.sm').removeClass('menuhorlia');
        $('.sm').parent().removeClass('menuhorli');
        $('.m3').addClass('menuhor');
        $('.sm3').addClass('menuhorlia');
        $('.sm3').parent().addClass('menuhorli');
    }); 
    $('.m4,.sm4').click(function(){
        $('.m').removeClass('menuhor');
        $('.sm').removeClass('menuhorlia');
        $('.sm').parent().removeClass('menuhorli');
        $('.m4').addClass('menuhor');
        $('.sm4').addClass('menuhorlia');
        $('.sm4').parent().addClass('menuhorli');
    }); 
    $('.m5,.sm5').click(function(){
        $('.m').removeClass('menuhor');
        $('.sm').removeClass('menuhorlia');
        $('.sm').parent().removeClass('menuhorli');
        $('.m5').addClass('menuhor');
        $('.sm5').addClass('menuhorlia');
        $('.sm5').parent().addClass('menuhorli');
    }); 
    $('.m6,.sm6').click(function(){
        $('.m').removeClass('menuhor');
        $('.sm').removeClass('menuhorlia');
        $('.sm').parent().removeClass('menuhorli');
        $('.m6').addClass('menuhor');
        $('.sm6').addClass('menuhorlia');
        $('.sm6').parent().addClass('menuhorli');
    });
    
    $('.learnbox a').click(function(){
        $(this+'close').removeClass('close');
    });
    
    
    /*for canvas*/
    var canvas = document.getElementById("myCanvas");
                            var ctx = canvas.getContext("2d");

                            ctx.beginPath();                 
                            ctx.moveTo(370,327); 
                            ctx.quadraticCurveTo(340,380,250,410);
                            ctx.quadraticCurveTo(70,410,55,320);
                            //加陰影
                            ctx.shadowColor = "rgba(0,0,0,.7)";
                            ctx.shadowOffsetX = 5;
                            ctx.shadowOffsetY = 20;
                            ctx.shadowBlur = 30;      
                            ctx.fillStyle = "rgba(25,25,25,.3)";   
                            ctx.fill();

                            //圓 圓周起始 結束
                            ctx.beginPath();
                            ctx.arc(210,210,200,.8*Math.PI,.2*Math.PI);
                            ctx.fillStyle = "#77ab7f";
                            ctx.fill();

                            //先用直線定點   
                    //                            ctx.beginPath();
                    //                            ctx.strokeStyle = "blue";
                    //                            ctx.moveTo(372,327); 
                    //                            ctx.lineTo(320,370);
                    //                            ctx.lineTo(180,377);
                    //                            ctx.lineTo(110,380);
                    //                            ctx.lineTo(70,360);
                    //                            ctx.lineTo(43,343);
                    //                            ctx.lineTo(49,327);
                    //                            ctx.stroke();

                            //雙數點 中間連接點要接近  
                            //二次貝塞爾曲線 quadraticCurveTo
                            ctx.beginPath();                 
                            ctx.moveTo(372,327); 
                            ctx.quadraticCurveTo(320,370,180,377);
                            ctx.quadraticCurveTo(110,380,70,360);
                            ctx.quadraticCurveTo(43,343,49,327);                       
                            ctx.shadowColor = "rgba(0,0,0,.2)";
                            ctx.fillStyle = "#92cf9b";   
                            ctx.fill();                            
                            //三次貝塞爾曲線 bezierCurveTo 

                            //文字
                            ctx.font = "50px Century Gothic Regular";
                            ctx.fillStyle = "#000";
                            ctx.fillText("Welcome to",60,180);
                            ctx.font = "45px Century Gothic Regular";
                            ctx.fillText("the",55,250);
                            ctx.font = "bold 45px Century Gothic Regular";
                            ctx.fillText("Jean Web",140,250);
                            ctx.font = "45px Century Gothic Regular";
                            ctx.fillText("!",365,250);
})