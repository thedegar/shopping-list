$(document).ready(function() {
	//variable to count number of items
	var counter = 0;
	var original_height = $(".list").height();

	//Toggle "done" class when a list item is clicked
	$(document).on("click", ".new", function() {
		$(this).toggleClass("done");
	});

	//Remove the item when double clicked
	$(document).on("dblclick", ".new", function() {
		$(this).remove();
		var list_height = $(".list").height();
		//If the counter is over 37 do not decrease height
		if(counter > 37){
		}
		//If the counter is greater than 5 (but less than 37) then remove 16px
		else if(counter > 5){
			$(".list").height(list_height - 16);
		}
		//decrement counter
		counter = counter - 1;
	});

	//Remove the item when double clicked and show the empty list again
	$(document).on("dblclick", "h2", function() {
		//Check if the header is for the empty class
		if($(this).parent().is(".empty")){
			//do nothing
		}
		else {
			$(this).closest("div").remove();
			$(".empty").show();
			//reset height to original
			$(".list").height(original_height);
			//reset counter to 0
			counter = 0;
		}
	});

	//First I need to take input from the user when enter is pressed
	$(document).keypress(function(enter) {
		if(enter.which == 13){
			//setup variables used to define the list
			var new_list_name = $("#add-list").val();
			var new_list = $('<div class="list"><h2></h2><ul></ul></div>');
			//setup variables used to define the item
			var new_item_name = $("#add-item").val();
			var new_item = $('<li class="new"></li>').text(new_item_name);
			//setup height variable used to change the height
			var list_height = $(".list").height();
			
			//If the entry was the list name, create the list
			if (new_list_name!=""){
				$(".empty").before(new_list);
				$(new_list).find('h2').text(new_list_name + "'s Shopping List");
				$(new_list).find('ul').prepend('<li><input id="add-item" placeholder="add item"></li>');
				//clear the values
				$("#add-list").val("");
				new_list_name = "";
				$(".empty").hide();
				$("#add-item").select();
			}
			//If the entry is an item, create the item
			else if(new_item_name!=""){
				$(this).find('li').last().before(new_item);
				$("#add-item").val("");
				new_item_name = "";

				//If the counter is over 37 do not add height
				if(counter > 37){
				}
				//If the counter is greater than 4 (but less than 37) then add 16px
				else if(counter > 4){
					$(".list").height(list_height + 16);
				}
				//Increment the counter by 1
				counter = counter + 1;
			}
		}
	});
})