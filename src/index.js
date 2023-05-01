document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form");
  const taskList = document.getElementById("list");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = form.elements.task.value;
    const newTask = document.createElement("li");

    newTask.textContent = task;
    taskList.appendChild(newTask);
    form.elements.task.value = "";
  });
});
