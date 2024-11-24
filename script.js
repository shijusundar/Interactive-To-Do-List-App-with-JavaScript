function addTask() {
    const taskInput = document.getElementById("todo-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!")
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => taskItem.remove();

    taskItem.appendChild(deleteBtn);

    document.getElementById("todo-list").appendChild(taskItem);

    taskInput.value = "";
}