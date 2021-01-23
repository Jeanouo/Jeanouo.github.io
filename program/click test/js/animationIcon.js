// menu-bounce icon
$('.aIcon-menu-bounce').on('click',function(){            
    $(this).children().addClass('icon-menu');
    setTimeout(function(){
        $('.aIcon-menu-bounce').children().removeClass('icon-menu');
    },1200);        
});

// menu-bounce2 icon
$('.aIcon-menu-bounce2').on('click',function(){            
    $(this).children().addClass('icon-menu');
    setTimeout(function(){
        $('.aIcon-menu-bounce2').children().removeClass('icon-menu');
    },1200);        
});

// menu-rotate icon
$('.aIcon-menu-rotate').on('click',function(){            
    $(this).children().toggleClass('icon-menu');       
    $(this).children().children().toggleClass('icon-menu');      
});
// $('.aIcon-menu-rotate').on('click',function(){  
//     var aIrotate = 0;
//     if(aIrotate.length != 0){
//         $(this).children().addClass('icon-menu');  
//         $(this).children().children().addClass('icon-menu');      
//     } else {
//         $(this).children().removeClass('icon-menu');       
//         $(this).children().children().removeClass('icon-menu');      
//     }
// });

// menu-point icon
$('.aIcon-menu-point').on('click',function(){            
    $(this).children().toggleClass('icon-menu');         
});