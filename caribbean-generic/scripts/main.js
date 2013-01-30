(function(){
	$(document).ready(function(){ pop(); });
	$(window).resize(function() { pop(); });
	
	function pop() {
		$('.overlay').css({
			'height': $(window).height(),
			'opacity': '0.5'
		}).fadeIn(250, function(){
			var errWidth = $('.error-message').outerWidth(),
				errHeight = $('.error-message').outerHeight(),
				winHeight = $(window).height(),
				winWidth = $(window).width(),
				topValue = ((winHeight / 2) - (errHeight / 2)),
				leftValue = ((winWidth / 2) - (errWidth / 2));
			$('.error-message').css({
				'top': topValue,
				'left': leftValue
			}).fadeIn(1000);		
		});		
	}
})();
