
// function get_data(){
//     $.ajax({
//     url: 'GetBalance.php',
//     cache:false , 
//     ifModified :true , 
//     error: function(xhr) {
//         alert('Ajax request 發生錯誤');
//     },
//     success: function(response) {
//         $('#balance').html(response);
//         $('#balance').fadeIn();
//     }
// });
// }
// window.setInterval("get_data()",180000);//180秒一次执行


$(".sidenav").find("dd").not("dd:first").hide().end()
$(".sidenav dt").click(function () {
    $(this).next("dd").slideDown("fast").siblings("dd").slideUp("fast").hide().end();
});


$('#deposit-btn').click(function(){
    $('.contentbox').addClass('noshow');
    $('#deposit').removeClass('noshow');
});	
$('#withdrawal-btn').click(function(){
    $('.contentbox').addClass('noshow');
    $('#withdrawal').removeClass('noshow');
});	
$('#record-btn').click(function(){
    $('.contentbox').addClass('noshow');
    $('#record').removeClass('noshow');
});	
$('#dailyrecord-btn').click(function(){
    $('.contentbox').addClass('noshow');
    $('#dailyrecord').removeClass('noshow');
});	
$('#BEw-btn').click(function(){
    $('.contentbox').addClass('noshow');
    $('#BEw').removeClass('noshow');
});	
$('#BEr-btn').click(function(){
    $('.contentbox').addClass('noshow');
    $('#BEr').removeClass('noshow');
});	
$('#EDM-btn').click(function(){
    $('.contentbox').addClass('noshow');
    $('#EDM').removeClass('noshow');
});	
$('#changepassword-btn').click(function(){
    $('.contentbox').addClass('noshow');
    $('#changepassword').removeClass('noshow');
});						   


$('.BEw-btn').click(function(){
    $('#BEw .blackbg').removeClass('noshow');
});
$('#BEw .blackbg button').click(function(){
    $('#BEw .blackbg').addClass('noshow');
});

$('.BEr-btn').click(function(){
    $('#BEr .blackbg').removeClass('noshow');
});
$('#BEr .blackbg button').click(function(){
    $('#BEr .blackbg').addClass('noshow');
});