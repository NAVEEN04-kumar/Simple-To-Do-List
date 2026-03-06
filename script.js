const myList = JSON.parse(localStorage.getItem('myList')) || [];

renderTodo();

function renderTodo() {
    let html = '';

    if (myList.length === 0) {
        document.querySelector('.js-user-container').innerHTML = `
    <p class = "cs-empty" >ADD A TASK</p>`;
        return;
    }

    myList.forEach((todo, index) => {
        const { user, date } = todo;
        html += `<div class="css-task-row">
                    <div>${user}</div>
                    <div>${date}</div>
                    <button class="js-delete-button css-delete-button">Delete</button>
                </div>`;
    });
    
    document.querySelector('.js-user-container').innerHTML = html;

    document.querySelectorAll('.js-delete-button')
        .forEach((deleteButton,index) => {
            deleteButton.addEventListener('click', () => {
                myList.splice(index,1)
                renderTodo();
                saveToStorage();
            })
        });
}

document.querySelector('.js-add-button')
    .addEventListener('click', () => {
        addtask();
    })

function addtask() {
    const userInput = document.querySelector('.js-user-input');
    const dateInput = document.querySelector('.js-date-input');

    const user = userInput.value.trim();
    const date = dateInput.value;


    if (user !== '') {
        myList.push({
            user,
            date
        });
        userInput.value = '';
        renderTodo();
        saveToStorage();
    }
}

function saveToStorage() {
    localStorage.setItem('myList', JSON.stringify(myList));
}