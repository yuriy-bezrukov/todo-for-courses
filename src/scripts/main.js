const TODO_LIST_ELEMENT = document.querySelector('.todo__task-list');

let tasks = [
  {
    id: 'hlb4tk4j5bgv4b',
    title: 'Разобратся с js',
    description: 'Напрячь ручки, а еще меньше спать'
  },
  {
    id: 'egj38m349vht438',
    title: 'Высказать свое мнение о проблемах курса',
    description: 'составить список аргументированных проблем и возможно предложить готовые варианты решения'
  }
];

function renderTasks() {
    let fullTemplate = '';
    for (let i = 0; i < tasks.length; i++) {
      let template = ` 
        <div class="checkbox" data-id="${tasks[i].id}"> 
            <input id="checkbox${tasks[i].id}" type="checkbox" class="checkbox__input"> 
            <label for="checkbox${tasks[i].id}" class="checkbox__label"> 
                <div class="checkbox__text"> 
                    <div class="checkbox__title">${tasks[i].title}</div>
                    <div class="checkbox__subtitle">${tasks[i].description}</div>
                </div> 
            </label> 
        </div>`;
        fullTemplate = fullTemplate + template;
    }
    TODO_LIST_ELEMENT.innerHTML = fullTemplate;
}
renderTasks();

function onChangeTaskStatus(event) {
    if (event.target.classList.contains('checkbox__input')) {
        console.log('tasks (before removing):', tasks);
        const taskCardElement = event.target.parentElement;
        const removingTaskId = taskCardElement.dataset.id;
        taskCardElement.remove();
        tasks = tasks.filter(function(task) {
            return  task.id !== removingTaskId;
        });
        console.log('tasks (after removing):', tasks);
    }
}

TODO_LIST_ELEMENT.addEventListener('click', onChangeTaskStatus);

function onAddTask(e) {
  e.preventDefault();
  const newTask = {
    id: Math.random().toString().split('.').join('-'),
    title: document.querySelector('.todo__modal-add-task-title').value,
    description: document.querySelector('.todo__modal-add-task-description').value,
  };
  tasks.push(newTask);
  renderTasks();
  
  hideTaskForm();

  // Строка 60: Закрытие окна формы после нажатия кнопки Submit
  
  // Реализовать очистку полей Title и 
  // Description после каждого закрытия формы 
  // через воздействие на input placeholder? 
}

document.querySelector('.todo__modal-add-task-form').addEventListener('submit', onAddTask);

// Step 2
const addTaskButton = document.querySelector('.todo__add');

const addTaskForm = document.querySelector('.todo__overlay');

addTaskButton.addEventListener('click', showTaskForm);

function showTaskForm(){
  addTaskForm.classList.remove('initial');
}

// Step 3
addTaskForm.onclick = function hideOverlayForm(event){
  if (event.target.classList.contains('todo__overlay')) {
    hideTaskForm();
  };
};

function hideTaskForm(){
  addTaskForm.classList.add('initial'); 
}

//Задать адекватные названия фунций и переменных







