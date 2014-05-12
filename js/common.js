head.ready(document, function () {
	// console.log($('body').html());
	
	// sticky footer
	$(function() {
	    var footerHeight = $(".wrap-footer").height();
	    $(".out").css("margin-bottom", -footerHeight);
	    $(".push").css("height", footerHeight);
	});

	$(window).resize(function() {
	    var footerHeight = $(".wrap-footer").height();
	    $(".out").css("margin-bottom", -footerHeight);
	    $(".push").css("height", footerHeight);
	});

	// popup
	$('.js-btn-popup').click(function(event) {
		$('.js-popup').addClass('is-active');
		$('.overlay').addClass('is-active');
		return false;
	});
	$('.js-close').click(function(event) {
		$('.js-popup').removeClass('is-active');
		$('.overlay').removeClass('is-active');
		return false;
	});

	// accorderon
	 function accorderon(){
	  $(".js-accordion .js-accordion__content").hide();
	  $(".js-accordion .js-accordion__content").first().show();

	  $(".js-accordion__title").each(function(){
	   $(this).on('click', function(){
	    if ($(this).hasClass('is-open')) {
	     $(this).removeClass('is-open');
	     $(this).next().slideUp('fast');
	    }
	    else {
	     $(".js-accordion__title").removeClass('is-open');
	     $(this).addClass('is-open');
	     $(".js-accordion__content").slideUp('fast');
	     $(this).next().slideDown('fast');
	    }
	   });
	  });
	 }
	 
	 if ($('.js-accordion').length) {
	  accorderon();
	 };

	 // btn send form
	 $('.js-call-form').on('click', function() {
	  $(".js-form").slideDown('fast');
	  return false;
	 });
});