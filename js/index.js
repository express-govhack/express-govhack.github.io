$(document).ready(function(){

    //Smooth Scroll for all the navigation bars. 
	$("#home_nav").click(function() {
		var body = $('html, body');
		body.animate({scrollTop:$("#home").offset().top}, 1100);
	});

	$(".current_nav").click(function() {
		var body = $('html, body');
		body.animate({scrollTop:$("#current").offset().top}, 1100);
	});

	$("#future_nav").click(function() {
		var body = $('html, body');
		body.animate({scrollTop:$("#future").offset().top}, 1100);
	});

	$("#opt_nav").click(function() {
		var body = $('html, body');
		body.animate({scrollTop:$("#opt").offset().top}, 1100);
	});

	$("#about_nav").click(function() {
		var body = $('html, body');
		body.animate({scrollTop:$("#about").offset().top}, 1100);
	});

});

