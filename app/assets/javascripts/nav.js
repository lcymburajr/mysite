$(document).ready(function(){

	$('a').click(function(){
		var target = $(this).attr('data-link');
		$('html,body').animate({
	          scrollTop: $(target).offset().top -50
	 	}, 1000);
	 	return false;
	});

});