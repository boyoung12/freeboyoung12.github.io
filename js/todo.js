const byToForm = document.querySelector("#todo");
const byToInput = document.querySelector("#todo input");
const byToUl = document.querySelector("#todo-ul");

let toDos = [];

function handleDelted(event) {
	const bydel = event.target.parentElement;
	bydel.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(bydel.id));
	saveTodo();
}

function saveTodo(){
	localStorage.setItem("todo", JSON.stringify(toDos));
}


function handleTodo(event){
	event.preventDefault();
	const byToVal = byToInput.value;
	byToInput.value = "";
	const newToDoObj = {
		text: byToVal,
		id: Date.now(),
	};
	toDos.push(newToDoObj);
	PaintTodo(newToDoObj);
	saveTodo();
}

function PaintTodo(newTodo){
	const toLi = document.createElement("li");
	toLi.id = newTodo.id;
	const toSpan = document.createElement("span");
	const toButton = document.createElement("button");
	
	toLi.appendChild(toSpan);
	toLi.appendChild(toButton);
	byToUl.appendChild(toLi);
	
	toSpan.innerText = newTodo.text;
	toButton.innerText = "❌";
	toButton.addEventListener("click", handleDelted);
}

const savedTodo = localStorage.getItem("todo");

byToForm.addEventListener("submit", handleTodo);

if(savedTodo !== null) {
	const parseToDo = JSON.parse(savedTodo);
	toDos = parseToDo;
	parseToDo.forEach(PaintTodo);
}