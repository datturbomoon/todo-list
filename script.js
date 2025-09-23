const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// adding task event listener
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

// add new task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    // create task item
    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
    <label class="task-label">
            <input type="checkbox" class="task-check">
            <span class="task-text">${taskText}</span>
        </label>
        <button class="delete-btn" aria-label="Delete" title="Delete task">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </button>
    `;

    // delete button event listener
    li.querySelector(".delete-btn").addEventListener("click", () => li.remove());

    taskList.appendChild(li);
    taskInput.value = "";
}