jQuery('form').validate({
        rules: {
            name: {
                minlength: 3,
                maxlength: 15,
                required: true
            },
            surname: {
                minlength: 3,
                maxlength: 15,
                required: true
            },
             email: {
                required: true,       
            },
            newPasswd: {
                minlength: 6,
                maxlength: 15,
                required: true
            },
            phone: {
                required: true
            },
            gender: {
                required: true
            },
            address: {
                required: true
            },
            spouse: {
                required: true
            },
            bio: {
                required: true
            },
            interests: {
                required: true
            },
            
        },
        highlight: function(element) {
            $(element).closest('.control-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.control-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'has-error',
        errorPlacement: function(error, element) {
            if(element.parent('.control-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });



jQuery(function($) {
    
	for (i = new Date().getFullYear(); i > 1900; i--)
	{
	    $('#years').append($('<option />').val(i).html(i));
	}
	    
	for (i = 1; i < 13; i++)
	{
	    $('#months').append($('<option />').val(i).html(i));
	}
	updateNumberOfDays(); 
	    
	$('#years, #months').change(function(){    
	    updateNumberOfDays(); 
	});

});

function updateNumberOfDays(){
	$('#days').html('');
	month = $('#months').val();
	year = $('#years').val();
	days = daysInMonth(month, year);

	for(i=1; i < days+1 ; i++){
	    $('#days').append($('<option />').val(i).html(i));
	}

}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}