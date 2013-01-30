$(document).ready(function(){
	var height = $('#content').height();
	$('#content_secondary').css('height', height);

	$('.learn').click(function(){
		var dropper = $(this).next();
		if (dropper.hasClass('open')) {
			dropper.slideUp('500').removeClass('open');
		} else {
			$('.open').slideUp(500).removeClass('open');
			dropper.slideDown('500').addClass('open');
		}
	});

	$('[rel=external]').attr('target','_blank');
});