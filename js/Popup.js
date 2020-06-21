$('.popup, .popup-wrapper').hide();
var a = 1
$(document).ready(function(){
	$('.btn-shopping-cart').click(function(){
		$('.popup, .popup-wrapper').show();
	});

	$('.fa-button-mn').click(function(){
	a = $('.fa-button-mn').next('input[class|="popop-how-many-input"]').val();
	a--;
	$('.fa-button-mn').next('input[class|="popop-how-many-input"]').val(a);
	});

	$('.fa-button-plus').click(function(){
	a = $('.fa-button-plus').prev('input[class|="popop-how-many-input"]').val();
	a++;
	$('.fa-button-plus').prev().val(a);

	});
});