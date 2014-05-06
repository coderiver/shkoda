head.ready(document, function () {
	// console.log($('body').html());
	
	$(function() {
    $( "#accordion" ).accordion();
  });

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


});