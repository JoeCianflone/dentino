$(document).ready(function() {
	is_user();

	validate();

	$('#other_income').keyup(function(){
		if ($(this).attr('value') != '') {
			$('#other_source_fields').fadeIn(250);
		}
	});

		$('.rollover_button, .rollover_question').hover(
			function(e){
				$(this).css('cursor', 'pointer');
				var box_id = $(this).attr('id');
				$('.'+box_id).fadeIn(250);
			},
			function(e) {
				var box_id = $(this).attr('id');
				$('.'+box_id).fadeOut(250);
			});

		$(':input').autotab_magic();

	popup();
	value_switch();
	$("[rel=external]").click(function(){
		var link = $(this).attr('href');

		window.open(link, "","width=810,height=480,menubar=yes, scrollbars=yes, status=yes, resizeable=yes, directories=yes");
		return false;
	});

	$('#history_no').click(function(){
	    var popID = 'popup_bankrupt'; //Get Popup Name

	    var popWidth = 350;

	    //Fade in the Popup and add close button
	    $('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" class="close"><img src="close_pop.png" class="btn_close" title="Close Window" alt="Close" /></a>');

	    //Define margin for center alignment (vertical   horizontal) - we add 80px to the height/width to accomodate for the padding  and border width defined in the css
	    var popMargTop = ($('#' + popID).height() + 80) / 2;
	    var popMargLeft = ($('#' + popID).width() + 80) / 2;

	    //Apply Margin to Popup
	    $('#' + popID).css({
	        'margin-top' : -popMargTop,
	        'margin-left' : -popMargLeft
	    });

	    //Fade in Background
	    $('body').append('<div id="fade"></div>'); //Add the fade layer to bottom of the body tag.
	    $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //Fade in the fade layer - .css({'filter' : 'alpha(opacity=80)'}) is used to fix the IE Bug on fading transparencies

		$('a.btn_close, #fade, a.btn_inside_no').live('click', function() { //When clicking on the close or fade layer...
		    $('#fade , .popup_block').fadeOut(function() {
		        $('#fade, a.close').remove();  //fade them both out
		    });
		    return false;
		});

	    return false;
	});

	$('.drop_option').click(function(){
		if ($(this).hasClass('open')){
			$(this).html('Open').removeClass('open');

		} else {
			$(this).html('Close').addClass('open');
		}
		$(this).parent().next().slideToggle(500);
		return false;
	});
});

function is_user() {
	$('#currently_enrolled_yes').click(function(){
		$('#prefill_form').fadeIn(500);
	});
	$('#currently_enrolled_no').click(function(){
		$('#prefill_form').fadeOut(500);
	});
}

function popup() {
	//When you click on a link with class of poplight and the href starts with a #
	$('a.poplight[href^=#]').click(function() {
	    var popID = $(this).attr('rel'); //Get Popup Name
	    var popURL = $(this).attr('href'); //Get Popup href to define size

	    //Pull Query & Variables from href URL
	    var query= popURL.split('?');
	    var dim= query[1].split('&');
	    var popWidth = dim[0].split('=')[1]; //Gets the first query string value

	    //Fade in the Popup and add close button
	    $('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" class="close"><img src="close_pop.png" class="btn_close" title="Close Window" alt="Close" /></a>');

	    //Define margin for center alignment (vertical   horizontal) - we add 80px to the height/width to accomodate for the padding  and border width defined in the css
	    var popMargTop = ($('#' + popID).height() + 80) / 2;
	    var popMargLeft = ($('#' + popID).width() + 80) / 2;

	    //Apply Margin to Popup
	    $('#' + popID).css({
	        'margin-top' : -popMargTop,
	        'margin-left' : -popMargLeft
	    });

	    //Fade in Background
	    $('body').append('<div id="fade"></div>'); //Add the fade layer to bottom of the body tag.
	    $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //Fade in the fade layer - .css({'filter' : 'alpha(opacity=80)'}) is used to fix the IE Bug on fading transparencies

	    return false;
	});

	//Close Popups and Fade Layer
	$('a.btn_close, #fade, a.btn_inside_no').live('click', function() { //When clicking on the close or fade layer...
	    $('#fade , .popup_block').fadeOut(function() {
	        $('#fade, a.close').remove();  //fade them both out
	    });
	    return false;
	});
}

function value_switch() {

	$('input#month, input#day, input#year').focus(function(){
		var check = $(this).attr('value');
		if (check == 'mm' || check == 'dd' || check == 'yyyy') {
			$(this).attr('value','');
		}

	}).focusout(function(){
		var leaving = $(this);
		if (leaving.attr('value') == '') {
			switch(leaving.attr('id')) {

			case 'month':
				leaving.attr('value','mm');
				break;
			case 'day':
				leaving.attr('value','dd');
				break;
			case 'year':
				leaving.attr('value','yyyy');
				break;
			default:
				break;
			}
		}
	});
}

function validate() {

	$('.required, .digits, .text, .email, .check_set_dob, .check_set_alt_phone, .check_set_phone, .check_open, #amt1, #amt2, #amt3').blur(function(){
		validates($(this));
	});


	function validates(element) {
		var pattern;

		if (element.hasClass('required') && !element.hasClass('only_open')) {

			if (element.attr('value') == '') {
				add_error(element, 'This information is required. Please enter.');
			} else {
				remove_error(element)
			}
		}

		if (element.attr('id') == 'amt1') {
			var acct = $('#acc1').attr('value');

			if ( (acct != ''  && element.attr('value') == '') || (acct == ''  && element.attr('value') != '')) {
				if (!element.hasClass('error_field')) {
					$('#amt1, #acc1').addClass('error_field');
					element.parent().after("<p class='inline clear error message'>Both fields are required. </p>");
				}
			} else {
				if (element.hasClass('error_field')) {
					$('#amt1, #acc1').removeClass('error_field');
					element.parent().next().remove();
				}
			}
		}

		if (element.attr('id') == 'amt2') {
			var acct = $('#acc2').attr('value');
			if ( (acct != ''  && element.attr('value') == '') || (acct == ''  && element.attr('value') != '')) {
				if (!element.hasClass('error_field')) {
					$('#amt2, #acc2').addClass('error_field');
					element.parent().after("<p class='inline clear error message'>Both fields are required. </p>");
				}
			} else {
				if (element.hasClass('error_field')) {
					$('#amt2, #acc2').removeClass('error_field');
					element.parent().next().remove();
				}
			}
		}

		if (element.attr('id') == 'amt3') {
			var acct = $('#acc3').attr('value');

			if ( (acct != ''  && element.attr('value') == '') || (acct == ''  && element.attr('value') != '')) {
				if (!element.hasClass('error_field')) {
					$('#amt3, #acc3').addClass('error_field');
					element.parent().after("<p class='inline clear error message'>Both fields are required. </p>");
				}
			} else {
				if (element.hasClass('error_field')) {
					$('#amt3, #acc3').removeClass('error_field');
					element.parent().next().remove();
				}
			}
		}

		if (element.hasClass('check_open')) {
			var first_name = $('#first_name_add').attr('value');
			var last_name = element.attr('value');

			if ( (first_name == '' && last_name != '') || (last_name == '' && first_name !='') ) {
				if (!element.hasClass('error_field')) {
					$('#first_name_add, #last_name_add').addClass('error_field');
					element.parent().after("<p class='clear error message'>Both these fields are required. Please enter</p>");
				}
			} else if ( (first_name == '' && last_name == '') || (first_name != '' && last_name != '')) {
				if (element.hasClass('error_field')) {
					$('#first_name_add, #last_name_add').removeClass('error_field');
					element.parent().next().remove();
				}
			}

		}
		if (element.hasClass('digits') && element.attr('value') != '') {
			pattern = /\D/g; //non-digit character...

			if (test_expression(pattern, element.attr('value'))) {
				add_error(element, 'Please use digits 0-9 only');
			} else {
				remove_error(element);
			}
		}

		if (element.hasClass('letters') && element.attr('value') != '') {
			pattern = /[a-z]/gi;

			if (!test_expression(pattern, element.attr('value'))) {
				add_error(element, 'This field should only have letters');
			} else {
				remove_error(element);
			}

		}

		if (element.hasClass('email') && element.attr('value') != '') {
			pattern = /^([a-zA-Z0-9]{3,})(((\.|\-|\_|\+)[a-zA-Z0-9]{2,})+)?@([a-z]{3,})(\-[a-z0-9]{3,})?(\.[a-z]{2,})+$/;

			if (!test_expression(pattern, element.attr('value'))) {
				if (!element.hasClass('error_field')) {
					element.addClass('error_field');
					$('#phone_elem2').after("<p class='clear error message'>Incorrect email format, please use correct format</p>");
				}
			} else {
				if (element.hasClass('error_field')) {
					element.removeClass('error_field');
					$('#phone_elem2').next().remove();
				}
			}
		}

		if (element.hasClass('check_set_dob')) {
			var month = $('#month').attr('value');
			var day = $('#day').attr('value');
			var year = $('#year').attr('value');

			if (month == 'mm' || day == 'dd' || year == 'yyyy' || month == '' || day == '' || year == '') {
				if (!$('#month, #day, #year').hasClass('error_field')) {
				$('#month, #day, #year').addClass('error_field');
				element.closest('.row').after("<p class='clear error message'>This information is required. Please enter.</p>");
				}
			} else {
				if ($('#month, #day, #year').hasClass('error_field')) {
				$('#month, #day, #year').removeClass('error_field');
				element.closest('.row').next().remove();
				}
			}
		}

		if (element.hasClass('check_set_alt_phone')) {
			var field1 = $('#alt_phone').attr('value');
			var field2 = $('#alt_phone2').attr('value');
			var field3 = $('#alt_phone3').attr('value');

			if (field1 == '' || field2 == '' || field3 == '') {
				if (!$('#alt_phone, #alt_phone2, #alt_phone3').hasClass('error_field')) {
				$('#alt_phone, #alt_phone2, #alt_phone3').addClass('error_field');
				element.closest('.row').after("<p class='clear error message'>This information is required. Please enter.</p>");
				}
			} else {
				if ($('#alt_phone, #alt_phone2, #alt_phone3').hasClass('error_field')) {
				$('#alt_phone, #alt_phone2, #alt_phone3').removeClass('error_field');
				element.closest('.row').next().remove();
				}
			}
		}
		if (element.hasClass('check_set_phone')) {
			var field1 = $('#phone').attr('value');
			var field2 = $('#phone2').attr('value');
			var field3 = $('#phone3').attr('value');

			if (field1 == '' || field2 == '' || field3 == '') {
				if (!$('#phone, #phone2, #phone3').hasClass('error_field')) {
				$('#phone, #phone2, #phone3').addClass('error_field');
				element.closest('.row').after("<p class='clear error message'>This information is required. Please enter.</p>");
				}
			} else {
				if ($('#phone, #phone2, #phone3').hasClass('error_field')) {
					$('#phone, #phone2, #phone3').removeClass('error_field');
					element.closest('.row').next().remove();
				}
			}
		}


	}


	function test_expression(pattern, test_against) {
		return pattern.test(test_against);
	}

	function add_error(element, message) {
		if (!element.hasClass('error_field')) {
			element.addClass('error_field');
			element.closest('.row').after("<p class='clear error message'>"+message+"</p>");
		}
	}

	function remove_error(element) {
		if (element.hasClass('error_field')) {
			element.removeClass('error_field');
			element.closest('.row').next().remove();
		}
	}

}

function rollover() {
	$('.rollover_button, .rollover_question').hover(
		function(e){
			$(this).css('cursor', 'pointer');
			var box_id = $(this).attr('id');
			$('.'+box_id).fadeIn(250);
		},
		function(e) {
			var box_id = $(this).attr('id');
			$('.'+box_id).fadeOut(250);
		});
}