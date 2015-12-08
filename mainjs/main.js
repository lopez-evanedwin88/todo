(function()
{


	$( "#saveTodo" ).click(function() {

			// var todoName = $("#getTodo").val();
			var setID = $("#todoTable tbody tr").length;	
	  			// $("#todoTable tbody").append('<tr id ="todoID'+setID+'">'+ '<td>'+ todoName + '</td>'+ '<td><input class="editTodo" type="button" value="Edit"></td> <td><input class="doneTodo" type="submit" value="Done"></td></tr>');

	  			$("#todoTable tbody").append('<tr class="card-panel cp-extend row" id =todoID'+setID+'">'+'<td class="col custom s12 m4 l2"><img src="./saitama.jpg" alt="" class="circle responsive-img"></img></td><td class="col custom s12 m4 l8 center"><input type="text" class="textmargin"/></td>'+ '<td class="col custom s12 m4 l2"><a class="waves-effect waves-light btn" id=saved'+setID+'><i class="fa fa-floppy-o center"></i></a></td> <td class="col custom s12 m4 l2"><a class="waves-effect waves-light btn" id=TodoCancel'+setID+'><i class="fa fa-times center"></i></a></td></td> <td><i class="fa fa-thumb-tack fa-2x style"></i></td></tr>');
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
		var changeIcon = row_index.children("td:nth-child(1)");
		var setTodo = row_index.children("td:nth-child(2)");
		var changeEdit = row_index.children("td:nth-child(3)");
		var changeDone = row_index.children("td:nth-child(4)");

		changeIcon.html('<img src="./saitama.jpg" class="circle responsive-img"></img>');
		setTodo.html(setTodo.children("input[type=text]").val());
		changeEdit.html("<a id=TodoEdit"+row_index.index()+" class='waves-effect waves-light btn'><i class='fa fa-keyboard-o center fa-5x'></i></a>");
		changeDone.html("<a class='waves-effect waves-light btn' id=TodoDone"+row_index.index()+"><i class='fa fa-check center'></i></a>");
	

		$("#TodoEdit"+row_index.index()).bind("click", Edit);
		$("#TodoDone"+row_index.index()).bind("click", Done);
	}



	function Edit()
	{
		var row_index = $(this).closest('tr');
		var changeIcon = row_index.children("td:nth-child(1)");
		var editTodo = row_index.children("td:nth-child(2)");
		var changeSave = row_index.children("td:nth-child(3)");
		var changeDone = row_index.children("td:nth-child(4)");

		changeIcon.html('<img src="./serious.jpg" class="circle responsive-img test"></img>');
		editTodo.html("<input type='text' value="+editTodo.html()+">");
		changeSave.html("<a class='waves-effect waves-light btn' id=TodoSave"+row_index.index()+"><i class='fa fa-floppy-o center'></i></a>");
		changeDone.html("<span></span>");
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
