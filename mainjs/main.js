(function()
{


	$( "#saveTodo" ).click(function() {

			// var todoName = $("#getTodo").val();
			var setID = $("#todoTable tbody tr").length;	
	  			// $("#todoTable tbody").append('<tr id ="todoID'+setID+'">'+ '<td>'+ todoName + '</td>'+ '<td><input class="editTodo" type="button" value="Edit"></td> <td><input class="doneTodo" type="submit" value="Done"></td></tr>');

	  			$("#todoTable tbody").append('<tr id ="todoID'+setID+'">'+ '<td><input type="text"/></td>'+ '<td> <input id=saved'+setID+' class="btn btn-info btn-lg" type="button" value="Save"></td> <td><input id=TodoCancel'+setID+' class="btn btn-info btn-lg" type="submit" value="Cancel"></td></tr>');
				// var temp = $("#todoTable tbody tr").attr('id');
				$('#saved'+setID).bind("click",Save);
				$('#TodoCancel'+setID).bind("click",Cancel);

				// $('.saved').click(function(){
				// 	alert('evan');
					   // var row_index = $(this).closest('tr').attr('id');
					   // var toUpdate=$("#"+row_index).text();
					   // var $modal = $('#updateModal');
      					//var $displayTodo = $modal.find('#updateTodo');
  						// $displayTodo.val(toUpdate);
  						// $modal.modal("show");
  						// test(row_index);
  						// count++;
  						// alert(''+count);
  						// if($(this).closest('tr').length===0)

				// });

				// $('#TodoDelete').click(function(){
					
				// });

		});

	function Cancel()
	{
		var row_index = $(this).closest('tr');
		row_index.remove();
	}

	function Save()
	{
		var row_index = $(this).closest('tr');
		var setTodo = row_index.children("td:nth-child(1)");
		var changeEdit = row_index.children("td:nth-child(2)");
		var changeDone = row_index.children("td:nth-child(3)");


		setTodo.html(setTodo.children("input[type=text]").val());
		changeEdit.html("<input id=TodoEdit"+row_index.index()+" class='btn btn-info btn-lg' type='button' value='Edit'/>");
		changeDone.html("<input id=TodoDone"+row_index.index()+" class='btn btn-info btn-lg' type='button' value='Done'/>");
	

		$("#TodoEdit"+row_index.index()).bind("click", Edit);
		$("#TodoDone"+row_index.index()).bind("click", Done);
	}



	function Edit()
	{
		var row_index = $(this).closest('tr');
		var editTodo = row_index.children("td:nth-child(1)");
		var changeSave = row_index.children("td:nth-child(2)");
		var changeDone = row_index.children("td:nth-child(3)");

		editTodo.html("<input type='text' value="+editTodo.html()+">");
		changeSave.html("<input id=TodoSave"+row_index.index()+" class='btn btn-info btn-lg' type='button' value='Save'/>");
		$("#TodoSave"+row_index.index()).bind("click",Save);

	}

	


	function Done()
	{
		var strike = $(this).closest('tr');
		strike.css("text-decoration","line-through");
	}


	$( "#hideTodo" ).click(function() {
  			
  			$me = $(this);
  			$me.toggleClass('off');
  			$show = $("#todoTable tbody");

  			if($me.hasClass("off"))
  			{
  				
        		$("#hideTodo").val('Show');
        		$show.hide();
        		
    		}
    		else
    		{
    			
        		$("#hideTodo").val('Hide');
        		$show.show();     		
        		
    		}
		});


	// function test(row)
	// {
	// 	alert('wosh'+row);
	// }
	// $("#saveUpdateTodo").click(function(){
	// 		var updateName = $("#updateTodo").val();
	// 		// $("#todoTable tbody tr td:first-child").eq(row).text(updateName);
	// 		$("#"+row).find("td:first-child").text(updateName);

	// 	});

	
})();
