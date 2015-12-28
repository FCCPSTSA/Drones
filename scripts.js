$(window).scroll(function () {
	var wScroll = $(window).scrollTop();
	$('header').css('background-position', '0% ' + 0.2 * wScroll + 'px');
});

/*
$('nav a').on('click', function () {
	$('html, body').animate({
		scrollTop: window.innerHeight * (Math.floor(($(window).scrollTop() / window.innerHeight)) + 1)
	}, 500);
});
*/