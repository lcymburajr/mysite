$(document).ready(function(){

	$(window).on('scroll', function(){
		var sHight = $(window).scrollTop();
		if (sHight > 300) {
			$('.scroll-top').show();
		} else {
			$('.scroll-top').hide();
		}
	});

	$('.scroll-top').click(function(){
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
		$('.modal-footer a').attr('href', url);
	});

});