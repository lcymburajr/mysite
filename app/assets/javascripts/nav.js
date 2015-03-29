$(window).resize(function(){
    var wWidth = $(this).width();
    if (wWidth < 768){
        $("#navbar-collapse").addClass('mobile');
    }else {
        $("#navbar-collapse").removeClass('mobile');
    }
});

$(document).ready(function(){

  $(window).trigger('resize');

	$('.nav-links').click(function(){

    if( $(this).hasClass('home')) {
      window.location = '/';
    }

    if($("#navbar-collapse").hasClass('in') && $("#navbar-collapse").hasClass('mobile')){
        $(".navbar-collapse").collapse('hide');
    }

    var target = $(this).attr('data-link');
     $('html,body').animate({
        scrollTop: $(target).offset().top -50
      }, 1000);

    return false;
  });


  $('html,body').click(function() {
    if($("#navbar-collapse").hasClass('in') && $("#navbar-collapse").hasClass('mobile')){
        $(".navbar-collapse").collapse('hide');
    }
  });


  $(document).scroll(function() {
    var scroll_top = $(document).scrollTop();
    var div_one_top = $('#about').position().top - 50;
    var div_two_top = $('#project').position().top - 50;
    var div_three_top = $('#contact').position().top - 50  ;

    if(scroll_top >= div_one_top) {
       $('.nav-links').removeClass('active-nav');
       $('.about').addClass('active-nav');
    } else {
        $('.nav-links').removeClass('active-nav');
    }

    if( scroll_top > div_one_top + 200 ) {
       $('.nav-links').removeClass('active-nav');
       $('.project').addClass('active-nav');
    }

    if( scroll_top > div_two_top + 10 ) {
       $('.nav-links').removeClass('active-nav');
       $('.contact').addClass('active-nav');
    }
  });
});