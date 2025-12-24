let arr = [];

function createTodoItem(event) {
    event.preventDefault();

    let inputField = document.querySelector('input[type="text"]');
    let input = inputField.value;

    if (input === '') {
        alert('Kuch Likho To Add Karne Ke Liye😂');
        return;
    }

    arr.unshift(input);
    let html = '';

    for (let i = 0; i < arr.length; i++) {
        html += `<li>${arr[i]}</li>`;
    }

    document.querySelector('.todo-list').innerHTML = html;

    inputField.value = '';
}
