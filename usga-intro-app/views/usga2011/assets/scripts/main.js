(function($){
  $.fn.showdelay = function(del){
    var delay = 0;
    return this.each(function(){
      $(this).delay(delay).fadeIn(1800);
      delay += del;
    });
  };
})(jQuery);


$(document).ready(function(){
	$('a[rel=external]').attr('target', '_blank');
	
	var slideshow = '';
	var nav = $('#navigation-main');
	var currentSlide = 0;
	var count = $('.slide').length-1;
	
	$('#play').click(function(){
		initSlideShow();
		
	});

	$('#pause').click(function() {
		clearInterval(slideshow);
	});	
	
	$('#send, .send-form').click(function(){
		$("#contact-form").modal({
			onOpen: function (dialog) {
				dialog.overlay.fadeIn('slow', function () {
					dialog.container.slideDown('slow', function () {
						dialog.data.fadeIn('slow');
					});
				});
		}});		
			
		return false;
	});

	$('#navigation-main a').click(function() {
			var nav = $(this).closest('ul'),
				 clicked_class = $(this).closest('li').attr('class'),
				 current_class = nav.attr('class');
			
			nav.removeClass(current_class).addClass(clicked_class);
			clearInterval(slideshow);
			
			var clickedPosition = $(this).parent().attr('class');
			switch (clickedPosition) {
				case 'how':
					switchSlide(4);
					break;
				case 'next':
					switchSlide(6);
					break;
				default: 
					switchSlide(0);
					break;
			}			
			return false;
	});

	$('#uploader').validate({
		rules: {
			uploadit: {
				required: true,
				accept: "gif|jpe?g"
			}
		},			
		submitHandler: function(form){
			form.submit();
		}
	});	
		
function switchSlide(newSlide) {
	currentSlide = newSlide;
	$('#current').fadeOut(500, function(){
		clearInterval(slideshow);
		$(this).attr('id', '');
		switch(newSlide) {
			case 4:
				$('div.how').attr('id', 'current').fadeIn(500);
				builder();
				currentSlide++;
				initSlideShow();
				break;
			case 6:
				$('div.next').attr('id', 'current').fadeIn(500);
				builder();
				currentSlide++;
				initSlideShow();	
				break;
			default: 
				$('div.what').attr('id', 'current').fadeIn(500);
				builder();
				currentSlide++;
				initSlideShow();					
		}
		
		
	});
}		
function initSlideShow() {
		slideshow = setInterval(function() {
			mainSlideShow();
		}, 5000);

}	
		
function mainSlideShow() {
			if (currentSlide < count) {
				switch (currentSlide) {
					case 4:
						nav.removeClass('what').addClass('how');
						break;
					case 6:
						nav.removeClass('how').addClass('next');
					default:
						break;
				}				
				$('#current').fadeOut(500, function(){
					$('#current').attr('id', '').next().attr('id', 'current').fadeIn(500);
					builder();
					currentSlide++;
				});
						
			}	
}	

function builder() {
	var builderInt = setTimeout(function(){		
		$('.build', '#current').showdelay(500);
	}, 2500);
	
	
}		
});

