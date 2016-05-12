$(window).scroll(function() {

	var scrollDown = $(this).scrollTop();
	var titleAndSubTitle = $('.title,.sub_title');

	$('header > .content').css({
		'transform' : 'translate(0,' + scrollDown /34 + '%)'
	});

	$(titleAndSubTitle).css('opacity', 1 - scrollDown / 320);
	
});