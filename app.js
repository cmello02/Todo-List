const formAddTodo = document.querySelector(".form-add-todo");
const searchTodo = document.querySelector(".form-search input");
const todosContainer = document.querySelector(".todos-container");
const body = document.querySelector("body")

const addTodo = (inputValue) => {
  if (inputValue.length) {
    todosContainer.innerHTML += `
  <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
  <span>${inputValue}</span>
  <i class="far fa-trash-alt delete" data-trash="${inputValue}"></i>
  </li>`;

    event.target.reset();
  }
};

const removeTodo = (clickedElement) => {
  const trashDataValue = clickedElement.dataset.trash;
  const todo = document.querySelector("[data-todo]");

  if (trashDataValue) {
    todo.remove();
  }
};

const filterTodos = (todos, inputValue, returnMatchedTodos) =>
  todos.filter((todo) => {
    const matchedTodos = todo.textContent.toLowerCase().includes(inputValue);
    return returnMatchedTodos ? matchedTodos : !matchedTodos;
  });

  const manupilateClasses = (todos, classToAdd, classToRemove) => {
    todos.forEach((todo) => {
    todo.classList.remove(classToRemove);
    todo.classList.add(classToAdd);
  });
  }

const hideTodos = (todos, inputValue) => {
  const todoToHide = filterTodos(todos, inputValue, false)
  manupilateClasses(todoToHide, "hidden", "d-flex");
};

const showTodos = (todos, inputValue) => {
  const todoToShow = filterTodos(todos, inputValue, true)
  manupilateClasses(todoToShow, "d-flex", "hidden");
};

// Create a new Todo Element
formAddTodo.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = event.target.add.value.trim();

  addTodo(inputValue);
});

// remove Todo Element
todosContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;

  removeTodo(clickedElement);
});

// Search Todo Elements
searchTodo.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim().toLowerCase();
  const todos = Array.from(todosContainer.children);

  hideTodos(todos, inputValue);
  showTodos(todos, inputValue);
});


body.addEventListener('click', event => {
  console.log(event);
})