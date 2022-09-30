const input = document.querySelector('#input');
const list = document.querySelector('.list');

const filters = document.querySelectorAll('.filter p');
const all = document.querySelector('#all');
const active = document.querySelector('#active');
const completed = document.querySelector('#completed');

const number = document.querySelector('#number');

let result;
let toDo = {};
let tasks = [];

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value !== '') {
        
        const task = document.createElement('li');
        const taskTitle = document.createElement('p');
        const check = document.createElement('button');
        
        const deleteBtn = document.createElement('button');
        
        e.preventDefault();    
        taskTitle.textContent = input.value;

        toDo =  {
            title: input.value,
            status: false
        };

        tasks.push(toDo);

        check.id = 'check';
        taskTitle.id = 'task-title';
        deleteBtn.id = 'delete';

        task.classList = 'task';

        task.appendChild(check);
        
        task.appendChild(taskTitle);
        task.appendChild(deleteBtn);

        list.appendChild(task);
        
        check.addEventListener('click', () => {
            if (check.className !== 'complete') {
                check.className = 'complete';
                tasks.forEach(element => {
                    if (element.title === taskTitle.textContent) {
                        element.status = true;
                    }
                })
                number.textContent = parseInt(number.textContent) - 1;
                check.nextElementSibling.id = 'done';
            } else {
                check.className = '';
                tasks.forEach(element => {
                    if (element.title === taskTitle.textContent) {
                        element.status = false;
                    }
                })
                number.textContent = parseInt(number.textContent) + 1;
                check.nextElementSibling.id = '';
            }
        });

        deleteBtn.addEventListener('click', () => { 
            tasks = remove(tasks, taskTitle.textContent);
            if (deleteBtn.previousSibling.id !== 'done') {
                number.textContent = parseInt(number.textContent) - 1;
            }
            deleteBtn.parentNode.remove();
        });

        input.value = '';
        number.textContent = parseInt(number.textContent) + 1;    
    }
    
});

filters.forEach(element => {
    element.addEventListener('click', () => {
        filters.forEach(element => {
            element.className = '';
        });
        element.className = 'active';
    })
})

all.addEventListener('click', () => {
    removeChildNodes(list);

    tasks.forEach(element => {
        const task = document.createElement('li');
        const taskTitle = document.createElement('p');
        const check = document.createElement('button');
        
        const deleteBtn = document.createElement('button');

        taskTitle.textContent = element.title;

        check.id = 'check';
        
        if (element.status === true) {
            taskTitle.id = 'done';
            check.classList = 'complete';
        } else {
            taskTitle.id = 'task-title';
            check.classList = '';
        }
    
        deleteBtn.id = 'delete';

        task.classList = 'task';

        task.appendChild(check);
        
        task.appendChild(taskTitle);
        task.appendChild(deleteBtn);

        list.appendChild(task);

        check.addEventListener('click', () => {
            if (check.className !== 'complete') {
                check.className = 'complete';
                tasks.forEach(element => {
                    if (element.title === taskTitle.textContent) {
                        element.status = true;
                    }
                })
                number.textContent = parseInt(number.textContent) - 1;
                check.nextElementSibling.id = 'done';
            } else {
                check.className = '';
                tasks.forEach(element => {
                    if (element.title === taskTitle.textContent) {
                        element.status = false;
                    }
                })
                number.textContent = parseInt(number.textContent) + 1;
                check.nextElementSibling.id = '';
            }
        });

        deleteBtn.addEventListener('click', () => {
            tasks = remove(tasks, taskTitle.textContent);
            deleteBtn.parentNode.remove();
        });

    })
})

active.addEventListener('click', () => {
    removeChildNodes(list);
    let activeTasks = tasks.filter(element => element.status === false);

    activeTasks.forEach(element => {
        const task = document.createElement('li');
        const taskTitle = document.createElement('p');
        const check = document.createElement('button');
        
        const deleteBtn = document.createElement('button');

        taskTitle.textContent = element.title;

        check.id = 'check';
        taskTitle.id = 'task-title';
        deleteBtn.id = 'delete';

        task.classList = 'task';

        task.appendChild(check);
        
        task.appendChild(taskTitle);
        task.appendChild(deleteBtn);

        list.appendChild(task);

        check.addEventListener('click', () => {
            if (check.className !== 'complete') {
                check.className = 'complete';
                tasks.forEach(element => {
                    if (element.title === taskTitle.textContent) {
                        element.status = true;
                    }
                })
                number.textContent = parseInt(number.textContent) - 1;
                check.nextElementSibling.id = 'done';
            } else {
                check.className = '';
                tasks.forEach(element => {
                    if (element.title === taskTitle.textContent) {
                        element.status = false;
                    }
                })
                number.textContent = parseInt(number.textContent) + 1;
                check.nextElementSibling.id = '';
            }
        });

        deleteBtn.addEventListener('click', () => {
            tasks = remove(tasks, taskTitle.textContent);
            if (deleteBtn.previousSibling.id !== 'done') {
                number.textContent = parseInt(number.textContent) - 1;
            }
            deleteBtn.parentNode.remove();
        });

    })
    showLeft(activeTasks);
})

completed.addEventListener('click', () => {
    removeChildNodes(list);
    let completedTasks = tasks.filter(element => element.status === true);
    
    completedTasks.forEach(element => {
        const task = document.createElement('li');
        const taskTitle = document.createElement('p');
        const check = document.createElement('button');
        
        const deleteBtn = document.createElement('button');

        taskTitle.textContent = element.title;

        check.id = 'check';
        check.className = 'complete';
        taskTitle.id = 'done';
        deleteBtn.id = 'delete';

        task.classList = 'task';

        task.appendChild(check);
        
        task.appendChild(taskTitle);
        task.appendChild(deleteBtn);

        list.appendChild(task);

        check.addEventListener('click', () => {
            if (check.className !== 'complete') {
                check.className = 'complete';
                tasks.forEach(element => {
                    if (element.title === taskTitle.textContent) {
                        element.status = true;
                    }
                })
                number.textContent = parseInt(number.textContent) - 1;
                check.nextElementSibling.id = 'done';
            } else {
                check.className = '';
                tasks.forEach(element => {
                    if (element.title === taskTitle.textContent) {
                        element.status = false;
                    }
                })
                number.textContent = parseInt(number.textContent) + 1;
                check.nextElementSibling.id = '';
            }
        });

        deleteBtn.addEventListener('click', () => {
            tasks = remove(tasks, taskTitle.textContent);
            if (deleteBtn.previousSibling.id !== 'done') {
                number.textContent = parseInt(number.textContent) - 1;
            }
            deleteBtn.parentNode.remove();
        });

    })
})

function removeChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function remove(array, value) {
    return array.filter(element => element.title !== value)
}

function showLeft(array) {
    number.textContent = array.length;
}

