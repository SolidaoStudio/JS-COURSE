/*função que adiciona um novo item para o todo list*/
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

function addTodo() {
  //vars
  const inputName = document.querySelector("#todoName");

  todoList.push(inputName.value);
  console.log(todoList);

  inputName.value = "";
  localStorage.setItem("todoList", JSON.stringify(todoList));
  print();
}

function print() {
  let printTodo = [];

  for (let i = 0; i < todoList.length; i++) {
    printTodo += `<p>${todoList[i]}</p>`;
  }

  document.getElementById("todoListDiv").innerHTML = printTodo;
}

function resetTodo() {
  todoList = [];
  localStorage.removeItem("todoList");
  print();
}

print();
document.getElementById("addButton").addEventListener("click", addTodo);
document
  .getElementById("todoName")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") addTodo();
  });
document.getElementById("resetButton").addEventListener("click", resetTodo);
