/* Click on input bar */
var input = document.getElementById("task");
input.onfocus = function() {
	if (input.value == "To-Do") 
	{
		input.value = "";
		input.style.color="black";
	}
};
input.onblur = function() {
	if (input.value == "")
	{
		input.value = "To-Do";
		input.style.color="#808080";
	}
};

/* Enter new task */
var button = document.getElementById("button");
input.onkeypress = function(keypress) {
	if (keypress.keyCode == 13)
	{
		keypress.preventDefault()
		if(task.value != "")
			pressButton();
	}
};

button.onclick = function() {	
	pressButton();
};

function pressButton() {
	addToList();
	input.value = "";
	input.focus();
	input.blur();
};

/* Add task to list */
var list = document.getElementById("taskList")
function addToList() {
	var node = document.createElement("li");
		node.style.width = "400px";
		node.className = "item";
	
	var checkbox = document.createElement("input");
		styleCheckbox(checkbox);
	node.appendChild(checkbox);
	
	var item = document.inputForm.task.value;
	var p = document.createElement("p");
		p.className = "text";
		p.style.display = "inline-block";
		p.style.width = "200px";
		p.style.padding = "2.5px 0px";
		p.style.margin = "5px 0px 5px 0px";
		p.style.textDecoration = "none";
	var textNode = document.createTextNode(item);
	p.appendChild(textNode);
	node.appendChild(p);	
		node.style.fontSize = "14px";
		node.style.fontWeight = "bold";
	
	addLinks(node);
	
	list.appendChild(node);
	
	editTask(list);
	checkItemOff(list);
	removeFunction(list);
};

function addLinks(node) {
	var edit = document.createElement("a");
		edit.href = "#";
		edit.className = "edit";
		edit.style.padding = "2px 5px";
		edit.style.borderRight = "1px solid #157dec";
		edit.style.color = "#157dec";
	var textEdit = document.createTextNode("edit");
	edit.appendChild(textEdit);
	node.appendChild(edit);
	
	var del = document.createElement("a");
		del.href = "#";
		del.className = "delete";
		del.style.padding = "2px 5px";
		del.style.color = "#157dec";
	var textDel = document.createTextNode("delete");
	del.appendChild(textDel);
	node.appendChild(del);
	return node;
};

function styleCheckbox(checkbox) {
	checkbox.type = "checkbox";
	checkbox.className = "checkbox";
	checkbox.value = 1;
	checkbox.name = "todo";
	checkbox.style.margin = "5px 25px 0px 0px";
	checkbox.style.height = "20px";
	checkbox.style.width = "20px";
	checkbox.style.cursor = "pointer";
};

function checkItemOff(list) {
	var check = list.getElementsByClassName("checkbox");
	for (var i = 0; i < check.length; i++) 
	{
		check[i].onclick = function() {
	    	var item = this.parentElement;
	    	var text = item.getElementsByTagName("p");
	    	if(text[0].style.textDecoration == "none")
	    		text[0].style.textDecoration = "line-through";
	    	else
	    		text[0].style.textDecoration = "none";
	  };
	}
};

function editTask(list) {
	var edit = list.getElementsByClassName("edit");
	for(var i = 0; i < edit.length; i++)
	{
		edit[i].onclick = function() {
			var item = this.parentElement;
			var text = item.getElementsByTagName("p");
			text[0].setAttribute("contenteditable", true);
			text[0].focus();
			text[0].onkeypress = function(e) {
				if (e.keyCode == 13) 
				{
					e.preventDefault();
					text[0].blur();
				}
			};
			text[0].onblur = function() {
				text[0].setAttribute("contenteditable", false);
			};
		};
	}
};

function removeFunction(list) {
	var remove = list.getElementsByClassName("delete");
	for (var i = 0; i < remove.length; i++) 
	{
		remove[i].onclick = function() {
	    	var item = this.parentElement;
	    	item.style.display = "none";
	  };
	}
};



