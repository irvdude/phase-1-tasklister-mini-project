document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let formId = document.getElementById('create-task-form')
  let inputId = document.getElementsByName('new-task-description')[0]
  let ulId = document.getElementById('tasks')

  function submitForm(e) {
    e.preventDefault()
    let inputText = inputId.value
    console.log(inputText);
    let newTask = document.createElement("li")
   newTask.textContent = inputText
    ulId.appendChild(newTask)
    formId.reset()
  }

  formId.addEventListener("submit", submitForm)

});

// function buildTodo(todo) {
//   let btn = document.createElement("button")
//   let tasks = document.getElementById("tasks")
//   tasks.textContent = `${todo}`
//   tasks.appendChild(btn)
//   console.log(todo);
// }
