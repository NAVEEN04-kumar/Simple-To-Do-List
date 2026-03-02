const myList = JSON.parse(localStorage.getItem('myList')) || [];

renderTodo();

function renderTodo() {
    let html = '';

    if (myList.length === 0) {
        document.querySelector('.js-user-container').innerHTML = `
    <p class = "cs-empty" >ADD A TASK</p>`;
        return;
    }
    for (let i = 0; i < myList.length; i++) {
        const todo = myList[i];
        const { user, date } = todo;
        html += `<div class="css-task-row">
                    <div>${user}</div>
                    <div>${date}</div>
                    <button onclick="
                        myList.splice(${i},1)
                        renderTodo();
                        saveToStorage();
                    " class="css-delete-button">Delete</button>
                </div>`;
    }
    document.querySelector('.js-user-container').innerHTML = html;
}

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