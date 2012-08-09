$(function() {

	// Get number of inputs in div
	var i = $('.inputs input').size() + 1;


	// Show alert message
	function showAlert(message){
		$('#alerts').remove();
		$('body').append("<div id='alerts'>"+message+"</div>");
	};

	// Total all field values and return number
	function fieldsTotal(){
		var add = 0;
        $(".field").each(function() {
            add += Number($(this).val());
        });
        return add;
	};
	

	$('#add').click(function() {
		// Calculate if total of all nav items is greater than nav width
		// Add function to show total width of nav so people can see how many pixels left
		var add = fieldsTotal();
		var nav_width = $('#nav-width').val();

		// Update the nav items number
		$('#inputs-num').html(i);

        if(add > nav_width) 
        {
        	showAlert('This is greater than your navigation width. Try again, you may be a few pixels over the total width.');
        	$('.nav-item:last .field').val("");
        } 
        else 
        {
        	$('#alerts').remove();
        	$('<div class="nav-item"><label for="' + i + '">' + i + '</label><input type="text" class="field" name="dynamic[]" placeholder="Navigation item width" value="" pattern="[0-9]*"><span class="px">px</span></div>').fadeIn('slow').appendTo('.inputs');
			i++;
			$('.nav-item:last .field').focus();
        }	
        return false;
	});
	

	// Remove last item
	$('#remove').click(function() {
		if(i > 1) {
			$('.nav-item:last').remove();
			i--; 
		};
		$('#alerts').remove();
	    $('#answers').remove();
	    return false;
	});
	

	// Reset form
	$('#reset').click(function() {
		while(i > 2) {
			$('.nav-item:last').remove();
			i--;
		};
		$('#alerts').remove();
	    $('#answers').remove();
	    return false;
	});
	

	// Submit form
	$('input[type=button]').click(function(){
		// Create and empty array to store field values
		var answers = [];
		// Get navigation width value
		var nav_width = $('#nav-width').val();

	    $.each($('.field'), function() {
	    	a = nav_width;
	        b = $(this).val();
	        c = b/a;
	        d = parseFloat(c*100).toFixed(2);
	        answers.push(d); 
	    });

	    // Calculate if total of all nav items is greater than nav width
	    var add = fieldsTotal();

	    if(add > nav_width) 
	    {
	    	showAlert('This is greater than your navigation width. Try again, you may be a few pixels over the total width.');
        	$('.nav-item:last .field').val("");
	    } 
	    else
	    {
	    	$('#alerts').remove();
	    	$('#answers').remove();
	    	// If first value in array equals 0
	    	if(answers == 0 || nav_width == '') {
	        	showAlert('Please enter a value to be calculated.');
	        }
	        else 
	        {
		    	// Show answers
		    	$('body').append("<div id='answers'>"+answers+"</div>");
	    	};
	    };
		
		
		return false;						
	});
	
	

});