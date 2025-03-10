const addTask = document.getElementById("createTask");
const taskButton = document.getElementById("taskBtn");
const taskContainer = document.getElementById("task-container");

taskButton.addEventListener("click", createElement);

function createElement() {
  const createLi = document.createElement("li");
  const createTask = document.createElement("span");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  editBtn.textContent = "Edytuj";
  deleteBtn.textContent = "Usuń";
  createTask.textContent = addTask.value;

  createLi.appendChild(createTask);
  createLi.appendChild(editBtn);
  createLi.appendChild(deleteBtn);
  taskContainer.appendChild(createLi);

  const editInput = document.createElement("input");
  editBtn.addEventListener("click", () => {
    const acceptBtn = document.createElement("button");
    editInput.type = "text";
    editInput.value = createTask.textContent;
    createLi.replaceChild(editInput, createTask);

    acceptBtn.textContent = "Zatwierdź zmiany";
    createLi.replaceChild(acceptBtn, editBtn);

    acceptBtn.addEventListener("click", () => {
      if (editInput.value === "") {
        alert("Nazwa zadania nie może być pusta.");
      } else {
        createTask.textContent = editInput.value;
        createLi.replaceChild(createTask, editInput);
        createLi.replaceChild(editBtn, acceptBtn);
      }
    });
  });

  deleteBtn.addEventListener("click", () => {
    taskContainer.removeChild(createLi);
  });
}
