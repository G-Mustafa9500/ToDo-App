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

    // Create li element
    let li = document.createElement('li');

    // Add span for task text
    let span = document.createElement('span');
    span.textContent = input;
    li.appendChild(span);  // ✅ correct

    // Add cancel button
    let btn = document.createElement('button');
    btn.innerText = '✖';
    btn.className = 'delete';
    btn.onclick = function() {
        li.remove();
    };
    li.appendChild(btn);

    // Add li to top of the list
    let todo = document.getElementById('todo-list');
    todo.prepend(li);  // ✅ correct

    // Clear input
    inputField.value = '';
}
