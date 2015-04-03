$(window).resize(function(){
    var wWidth = $(this).width();

    var wHeight = $(this).height();
    $('.home-section').css('height', wHeight);

    if (wWidth < 768){
        $("#navbar-collapse").addClass('mobile');
    }else {
        $("#navbar-collapse").removeClass('mobile');
    }
});

$(document).ready(function(){

	 var wHeight = $(this).height();
    $('.home-section').css('height', wHeight);

	$(window).on('scroll', function(){
		var sHight = $(window).scrollTop();
		if (sHight > 300) {
			$('.scroll-top').show();
		} else {
			$('.scroll-top').hide();
		}

		if (sHight > 10) {
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

	$('.project-thumbs').click(function() {
		var title = $(this).attr('data-title');
		var description = $(this).attr('data-description');
		var secondDescription = $(this).attr('data-seconddescription');
		var url = $(this).attr('data-url');

		var orgImg = $(this).find('.lg-img').attr('src');
		var orgImgW = $(this).find('.lg-img').width();

		$('.web-title').text(title);
		var desFooter = $('.modal-footer .description').text(description);
		var secondDesFooter = $('.modal-footer .second-description').text(secondDescription);

		if(orgImgW > 200){
			$(desFooter).show();
			$(secondDesFooter).show();
			$('.web-img img').attr('src', orgImg).show();
		}else{
			$(desFooter).hide();
			$(secondDesFooter).hide();
			$('.web-img img').attr('src', orgImg).hide();
		}


		if( url.length == 0){
			$('.site-link').hide();
			$('.modal-body a').css('cursor', 'default').removeAttr('href');
		}else{
			$('.modal-body a').css('cursor', 'pointer').attr('href', url);
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
	$(window).trigger('resize');
});

