$(window).scroll(function() {

	var scrollDown = $(this).scrollTop();
	var titleAndSubTitle = $('.title,.sub_title');

	$('#scroll').css({
		'transform' : 'translate(0px,' + scrollDown / 4 + '%)'
	});

	$(titleAndSubTitle).css(
		'opacity', 1 - scrollDown / 320
	);

});