$(function(){
    
    $('.explain li label').click(function() {
        $(this).addClass('tabcolor').siblings('.tabcolor').removeClass('tabcolor');
    }
});