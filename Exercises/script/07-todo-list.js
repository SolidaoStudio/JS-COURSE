/*função que adiciona um novo item para o todo list*/
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

function addTodo() {
  //vars
  const name = document.querySelector("#todoName").value;
  const date = document.querySelector("#todoDate").value;

  todoList.push({ name, date });
  console.log(todoList);

  document.querySelector("#todoName").value = "";
  localStorage.setItem("todoList", JSON.stringify(todoList));
  print();
}

function print() {
  let printTodo = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, date } = todoObject;

    printTodo += `
      <span>${name}</span>
      <span>${date}</span>
      <button class="deleteButton" onclick="
        todoList.splice(${i}, 1);
        print();
      ">Delete</button>
    `;
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
