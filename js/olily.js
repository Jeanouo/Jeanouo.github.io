// menu open
$('.menu-icon').click(function(){
    $('.header-ul').addClass('menu-open');
});
// menu close
$('.close-icon').click(function(){
    $('.header-ul').removeClass('menu-open');
    
});

$('.pernutations-img').hide();
$('.pernutations-img:nth-child(1)').show();

var pimg1 =  $('.pernutations-img:nth-child(1)');
var pimg2 =  $('.pernutations-img:nth-child(2)');
var pimg3 =  $('.pernutations-img:nth-child(3)');

var perContent = $('.permutations-content');

$('.pernutations-button').click(function(){
    // if('.pernutations-img:nth-child(1)' == true){
    //     console.log('click');
    //     $(this).prev(perContent).children('.pernutations-img').hide();
    //     $(this).prev(perContent).children('.pernutations-img:nth-child(2)').show();
    // }
    // if(pimg1 == true){
    //     $(pimg1).hide();
    //     $(pimg2).show();
    // } else if(pimg2 == true) {
    //     $(pimg2).hide();
    //     $(pimg3).show();
    // } else {
    //     $(pimg3).hide();
    //     $(pimg1).show();
    // }
});


// $('.header-ul a').click(function(e){    
//     var pages = $(this).attr('href');

//     $('body').animate({scrollTop:$(pages).offset().top},400);
//     e.preventDefault();
// });
