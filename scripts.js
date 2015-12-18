$(window).scroll(function () {
	var wScroll = $(window).scrollTop();
	$('header').css('background-position', '0% ' + -0.65 * wScroll + 'px');
});
