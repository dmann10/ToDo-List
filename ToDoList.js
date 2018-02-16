/* Click on/off input bar */
$("#txtbxNewTask").focus(function() {
	if($(this).val() != "") 
	{
		$(this).val("").css("color", "black");
	}
});
$("#txtbxNewTask").blur(function() {
	if($(this).val() == "") 
	{
		$(this).val("");
	}
});

/* Enter new task */
// Press Enter
$("#txtbxNewTask").keypress(function(ev) {
	if(ev.keyCode == 13) 
	{
		ev.preventDefault();
		if($(this).val() != "")
		{
			addToList();
			$(this).val("");
		}
	}
});

//Press Add Button
$("#btnAddNewTask").click(function() {
	addToList();
	$("#txtbxNewTask").focus();
});

/* Add Task to List */
function addToList() {
	var newListItem = $("<li class='listItem'></li>")
	newListItem.append("<input type='checkbox' class='checkbox' value=1 name='check'></input><label></label>");
	newListItem.append("<p class='task'>" + $("#txtbxNewTask").val() + "</p>");
	newListItem.append("<a href='#' class='editLink'>edit</a>");
	newListItem.append("<a href='#' class='deleteLink'>delete</a>");
	$("#taskList").append(newListItem);
};

/* Check off task when checkbox is clicked */
$("#taskList").on("click", ".checkbox", function() {
	$(this).siblings("p").toggleClass("checkItemOff");
});

/* Allow user to edit a task after the edit link is clicked */
$("#taskList").on("click", ".editLink", function() {
	var task = $(this).siblings("p");
	task.attr("contenteditable", true).focus();
	task.on("keypress", function(ev) {
		if(ev.keyCode == 13)
		{
			ev.preventDefault();
			task.blur();
		}
	});
	task.blur(function() {
		task.attr("contenteditable", false);
	});
});

/* Deletes task if user clicks the delete link */
$("#taskList").on("click", ".deleteLink", function(ev) {
	ev.preventDefault();
	$(this).parent().remove();
});
