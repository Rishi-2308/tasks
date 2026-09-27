const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {

    const text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task.");
        return;
    }

    const task = {
        text: text,
        completed: false
    };

    createTaskElement(task);
    saveTasks();

    taskInput.value = "";
}

function createTaskElement(task) {

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.completed) {
        span.classList.add("completed");
    }

    span.onclick = function () {
        span.classList.toggle("completed");
        saveTasks();
    };

    const btnContainer = document.createElement("div");
    btnContainer.className = "task-buttons";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    editBtn.onclick = function () {

        const newText = prompt("Edit task:", span.textContent);

        if (newText !== null && newText.trim() !== "") {
            span.textContent = newText;
            saveTasks();
        }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        li.remove();
        saveTasks();
    };

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnContainer);

    taskList.appendChild(li);

    updateCounter();
}

function saveTasks() {

    const tasks = [];

    document.querySelectorAll("#taskList li").forEach(li => {

        const text = li.querySelector("span").textContent;
        const completed = li.querySelector("span").classList.contains("completed");

        tasks.push({ text, completed });

    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    updateCounter();
}

function loadTasks() {

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => createTaskElement(task));
}

function clearTasks() {

    if (confirm("Are you sure you want to delete all tasks?")) {
        taskList.innerHTML = "";
        localStorage.removeItem("tasks");
        updateCounter();
    }
}

function updateCounter() {

    const total = document.querySelectorAll("#taskList li").length;

    taskCount.textContent = "Total Tasks: " + total;
}