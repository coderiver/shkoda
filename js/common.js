head.ready(document, function () {
	// console.log($('body').html());
	
	// accordion
	$(function() {
    $( "#accordion" ).accordion();
  });

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
});