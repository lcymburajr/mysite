$(document).ready(function(){

	$(window).on('scroll', function(){
		var sHight = $(window).scrollTop();
		if (sHight > 300) {
			$('.scroll-top').show();
		} else {
			$('.scroll-top').hide();
		}

		if (sHight > 100) {
			$('.scoll-down').hide();
		} else {
			$('.scoll-down').show();
		}
	});

	$('.scroll-top').click(function(){
		$('.nav-links').removeClass('active-nav');
		$('html,body').animate({
	    	scrollTop: 0
	 	}, 1000);
	 	return false;
	});

	$('.modal-link div').click(function() {
		var title = $(this).attr('data-title');
		var description = $(this).attr('data-description');
		var url = $(this).attr('data-url');
		$('.modal-title').text(title);
		$('.modal-body p').text(description);
		if( url.length !== 0){
			$('.modal-footer a').attr('href', url);
			$('.site-link').show();
		}
	});

	$('#my-form').on('submit', function(event){
		var name = $('#contact_form_name').val();
		var email = $('#contact_form_email').val();
		var message = $('#contact_form_message').val();
		var nickname = $('#contact_form_nickname').val();

		var regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		var emailValidate = regEx.test(email);

		if(name.length === 0){
			$('#contact_form_name').attr('placeholder', 'Please Enter Your Name');
			$('#contact_form_name').addClass('error');
		}else{
			var sendName = true;
			$('#contact_form_name').removeClass('error');
		}

		if(email.length === 0){
			$('#contact_form_email').attr('placeholder', 'Please Enter Your Email');
			$('#contact_form_email').addClass('error');
		}else if(!emailValidate){
			$('#contact_form_email').val('');
			$('#contact_form_email').attr('placeholder', 'Please Enter Vaild Email');
			$('#contact_form_email').addClass('error');
		}else {
			var sendEmail = true;
			$('#contact_form_email').removeClass('error');
		}

		if(message.length  === 0){
			$('#contact_form_message').attr('placeholder', 'Please Enter Your Message');
			$('#contact_form_message').addClass('error');
		}else {
			var sendMessage = true;
			$('#contact_form_message').removeClass('error');
		}

		if(nickname.length == 0){
			var send = true;
		}

		if(sendName && sendEmail && sendMessage && send){
			// submit form
		}else {
			event.preventDefault();
		}
	});

	$('#myModal2').modal('show');
});

$(window).load(function(){

});