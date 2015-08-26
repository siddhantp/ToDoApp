$(document).ready(function(){
	
	String.prototype.ltrim = function(){  
		return this.replace(/^\s+/,"");  
	};

	$('#ip').keypress(function(event){
		var regex=new RegExp("^[a-zA-Z0-9!.,\b ]+$");
		var key=String.fromCharCode(event.which);
		if(!regex.test(key))
			return false;
	});

	//Add button click event
	$('#addbtn').click(function(){
		if ( $('#ip').val().ltrim()=="" || $('#ip').val()==null)
			alert("Input is required");
		else {
				var ip_text=$('#ip').val();
				$('#tasklist').append("<li class='item'>"+ip_text+"</li>");
				$('#ip').val("");
				$('#charcount').empty();
				$("#ip").focus();
		}
	});

	$(document).on('keyup','#ip', function(){
		var count=$(this).val().ltrim().length;
		if(count==0)
			$('#charcount').empty();
		else if (count>160)
			$('#charcount').empty().append("<p id='countcontent'>"+Math.abs((160-count))+" Extra Characters.</p>");
		else
			$('#charcount').empty().append("<p id='countcontent'>"+(160-count)+" Characters Remaining.</p>");

		if(count>2 && count<=160)
			$('#addbtn').prop("disabled",false);
		else
			$('#addbtn').prop("disabled",true);
	});	
	
	//Double click event to remove item

	$(document).on('dblclick','.item', function(){
		$(this).remove();
	});

	//Click event to check/uncheck item
	$(document).on('click','.item',function(){
		if ($(this).css('text-decoration').charAt(0)=='l') {
				$(this).removeClass('checked');
		}
		else{
			$(this).addClass('checked');
		}
	});		
});
