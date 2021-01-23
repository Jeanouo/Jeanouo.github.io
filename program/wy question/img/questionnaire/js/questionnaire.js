window.onload = function () {
	$("#submitbtn").click(function(){
	MessageShow();
	});
	$(".btnClose").click(function(){
	MessageHide();
	});
};

function MessageShow() {
	$('.checkAlert').show()
}
function MessageHide() {
	$('.checkAlert').hide()
}
