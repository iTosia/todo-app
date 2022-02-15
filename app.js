window.addEventListener('load', () => {
    const form = document.querySelector('#task-form');
    const input = document.querySelector('#task-input');
    const taskList = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if(!task) {
            alert("Please fill out the task");
            return;
        }

        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        
        const taskContent = document.createElement('div');
        taskContent.classList.add('content');

        taskElement.appendChild(taskContent);

        const taskInputElement = document.createElement("input");
        taskInputElement.classList.add('text');
        taskInputElement.type = 'text';
        taskInputElement.value = task;
        taskInputElement.setAttribute("readonly", "readonly");

        taskContent.appendChild(taskInputElement);

        const taskActions = document.createElement('div');
        taskActions.classList.add('actions');

        const taskEdit = document.createElement('button');
        taskEdit.classList.add('edit');
        taskEdit.innerHTML = "Edit";

        const taskDelete = document.createElement('button');
        taskDelete.classList.add('delete');
        taskDelete.innerHTML = "Delete";

        taskActions.appendChild(taskEdit);
        taskActions.appendChild(taskDelete);

        taskElement.appendChild(taskActions);

        taskList.appendChild(taskElement);

        input.value = '';

        taskEdit.addEventListener('click', () => {
            if(taskEdit.innerText.toLowerCase() == "edit") {
                taskInputElement.removeAttribute("readonly");
                taskInputElement.focus();
                taskEdit.innerText = "Save";
            } else {
                taskInputElement.setAttribute("readonly", "readonly");
                taskEdit.innerText = "Edit";
            }
        });

        taskDelete.addEventListener('click', () => {
            taskList.removeChild(taskElement);
        });
    });
});