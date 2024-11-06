/*função que adiciona um novo item para o todo list*/
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

function upDateMemory() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function resetTodo() {
  todoList = [];
  localStorage.removeItem("todoList");
  print();
}

function addTodo() {
  //vars
  const name = document.querySelector("#todoName").value;
  const date = document.querySelector("#todoDate").value;

  todoList.push({ name, date });
  console.log(todoList);

  document.querySelector("#todoName").value = "";
  upDateMemory();
  print();
}

function print() {
  let printTodo = "";

  todoList.forEach(function (value, index) {
    console.log(value);
    printTodo += `
      <span>${value.name}</span>
      <span>${value.date}</span>
      <button class="deleteButton" onclick="
        todoList.splice(${index}, 1);
        print();
      ">Delete</button>
    `;
  });

  /*
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
  */
  document.getElementById("todoListDiv").innerHTML = printTodo;
  upDateMemory();
}

print();
document.getElementById("addButton").addEventListener("click", addTodo);
document.getElementById("resetButton").addEventListener("click", resetTodo);
document
  .getElementById("todoName")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") addTodo();
  });
