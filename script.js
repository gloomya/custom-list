var addButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var clearButton = document.getElementById("clear-list");
var lineEmpty = document.getElementById("empty-list");

function inputLength() {
	return input.value.length;
}
function createListElement() {
	var listItem = document.createElement("li");
	listItem.appendChild(document.createTextNode(input.value));
	var delButton = document.createElement("button");
	listItem.appendChild(delButton);
	delButton.setAttribute("id","delete-item");
	delButton.setAttribute("class","delete-item");
	delButton.innerHTML = "Delete";
	ul.appendChild(listItem);
	input.value = "";
	lineEmpty.setAttribute("class","delete");
	function delItem() {
		listItem.remove();
		var listNotEmpty = document.getElementsByClassName("delete-item");
		if (listNotEmpty.length === 0) {
			clearList();
		}
	}
	function itemDone() {
		listItem.classList.toggle("done");
	}
	delButton.addEventListener("click", delItem);
	listItem.addEventListener('click', itemDone);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
} 
function clearList(){
	ul.innerHTML = "";
    ul.appendChild(lineEmpty);
    lineEmpty.classList.remove("delete");
}
addButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
clearButton.addEventListener("click", clearList);
