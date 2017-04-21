/* Click on input bar */
var txtbxInput = $("#txtbxNewTask");
txtbxInput.onfocus = function() {
	if (txtbxInput.value == "To-Do") 
	{
		txtbxInput.value = "";
		txtbxInput.style.color="black";
	}
};
txtbxInput.onblur = function() {
	if (txtbxInput.value == "")
	{
		txtbxInput.value = "To-Do";
		txtbxInput.style.color="#808080";
	}
};

/* Enter new task */
var addButton = document.getElementById("btnAddNewTask");
txtbxInput.onkeypress = function(keypress) {
	if (keypress.keyCode == 13)
	{
		keypress.preventDefault()
		if(txtbxInput.value != "")
			pressAddButton();
	}
};

addButton.onclick = function() {	
	pressAddButton();
};

function pressAddButton() {
	addToList();
	txtbxInput.value = "";
	txtbxInput.focus();
	txtbxInput.blur();
};

/* Add task to list */
var taskList = document.getElementById("taskList")
function addToList() {
	var newListItem = document.createElement("li");
		newListItem.className = "listItem";
	
	var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.className = "checkbox";
		checkbox.value = 1;
		checkbox.name = "checkbox";
	newListItem.appendChild(checkbox);
	
	var newTask = document.createElement("p");
		newTask.className = "task";
	var userInputTask = txtbxInput.value;
	var textNode = document.createTextNode(userInputTask);
	newTask.appendChild(textNode);
	newListItem.appendChild(newTask);	
	
	addEditDeleteLinks(newListItem);
	
	taskList.appendChild(newListItem);
	
	checkItemOff(taskList);
	editTask(taskList);
	deleteTask(taskList);
};

function addEditDeleteLinks(newListItem) {
	var editLink = document.createElement("a");
		editLink.href = "#";
		editLink.className = "editLink";	
	var editText = document.createTextNode("edit");
	editLink.appendChild(editText);
	newListItem.appendChild(editLink);
	
	var deleteLink = document.createElement("a");
		deleteLink.href = "#";
		deleteLink.className = "deleteLink";
	var deleteText = document.createTextNode("delete");
	deleteLink.appendChild(deleteText);
	newListItem.appendChild(deleteLink);
	return newListItem;
};

/* Check off task when checkbox is clicked */
function checkItemOff(taskList) {
	var checkbox = taskList.getElementsByClassName("checkbox");
	for (var i = 0; i < checkbox.length; i++) 
	{
		checkbox[i].onclick = function() {
	    	var listItem = this.parentElement;
	    	var task = listItem.getElementsByTagName("p");
	    	if(task[0].style.textDecoration == "line-through")
	    		task[0].style.textDecoration = "none";
	    	else
	    		task[0].style.textDecoration = "line-through";
	  };
	}
};

/* Allow user to edit a task after the edit link is clicked */
function editTask(taskList) {
	var editLink = taskList.getElementsByClassName("editLink");
	for(var i = 0; i < editLink.length; i++)
	{
		editLink[i].onclick = function() {
			var listItem = this.parentElement;
			var task = listItem.getElementsByTagName("p");
			task[0].setAttribute("contenteditable", true);
			task[0].focus();
			task[0].onkeypress = function(keypress) {
				if (keypress.keyCode == 13) 
				{
					keypress.preventDefault();
					task[0].blur();
				}
			};
			task[0].onblur = function() {
				task[0].setAttribute("contenteditable", false);
			};
		};
	}
};

/* Deletes task if user clicks the delete link */
function deleteTask(taskList) {
	var deleteLink = taskList.getElementsByClassName("deleteLink");
	for (var i = 0; i < deleteLink.length; i++) 
	{
		deleteLink[i].onclick = function() {
	    	var listItem = this.parentElement;
	    	listItem.style.display = "none";
	    };
	}
};