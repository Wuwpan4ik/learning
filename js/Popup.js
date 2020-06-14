$('.popup, .popup-wrapper').hide();
$(document).ready(function(){
	$('.btn-shopping-cart').click(function(){
		$('.popup, .popup-wrapper').show();
	});
	$('.fa-times, .popup-btn2, .popup-btn1').click(function(){
		$('.popup, .popup-wrapper').hide();
	});
	
	var manu1 = $('#popop-how-many-input1').val();
	$('#fa-plus1').click(function(){
		manu1++;
		$('#popop-how-many-input1').attr('value', manu1)
	});
	var manu2 = $('#popop-how-many-input2').val();
	$('#fa-plus2').click(function(){
		manu2++;
		$('#popop-how-many-input2').attr('value', manu2)
	});

	var manu3 = $('#popop-how-many-input3').val();
	$('#fa-plus3').click(function(){
		manu3++;
		$('#popop-how-many-input3').attr('value', manu3)
	});

	var manu4 = $('#popop-how-many-input4').val();
	$('#fa-plus4').click(function(){
		manu4++;
		$('#popop-how-many-input4').attr('value', manu4)
	});

	var manu5 = $('#popop-how-many-input5').val();
	$('#fa-plus5').click(function(){
		manu5++;
		$('#popop-how-many-input5').attr('value', manu5)
	});



	var manu1 = $('#popop-how-many-input1').val();
	$('#fa-minus1').click(function(){
		manu1--;
		$('#popop-how-many-input1').attr('value', manu1)
	});
	var manu2 = $('#popop-how-many-input2').val();
	$('#fa-minus2').click(function(){
		manu2--;
		$('#popop-how-many-input2').attr('value', manu2)
	});

	var manu3 = $('#popop-how-many-input3').val();
	$('#fa-minus3').click(function(){
		manu3--;
		$('#popop-how-many-input3').attr('value', manu3)
	});

	var manu4 = $('#popop-how-many-input4').val();
	$('#fa-minus4').click(function(){
		manu4--;
		$('#popop-how-many-input4').attr('value', manu4)
	});

	var manu5 = $('#popop-how-many-input5').val();
	$('#fa-minus5').click(function(){
		manu5--;
		$('#popop-how-many-input5').attr('value', manu5)
	})
	summa = manu1*250+manu2*250+manu3*250+manu4*250+manu5*250;
	$('.popup-score').text(summa + ' ₽')
});