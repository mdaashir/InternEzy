/* External JS */
const input = document.querySelector('input');
const addButton = document.querySelector('.add-button');
const todosHtml = document.querySelector('.todos');
const emptyImage = document.querySelector('.empty-image');
let todosJson = JSON.parse(localStorage.getItem('todos') ?? '') || [];
const deleteAllButton = document.querySelector('.delete-all');
const filters = document.querySelectorAll('.filter');
let filter = '';

showTodos();

function getTodoHtml(todo, index) {
	if (filter && filter != todo.status) {
		return '';
	}
	let checked = todo.status == 'completed' ? 'checked' : '';
	let li = document.createElement('li');
	let label = document.createElement('label');
	let input = document.createElement('input');
	let span = document.createElement('span');
	let button = document.createElement('button');
	let i = document.createElement('i');

	li.className = 'todo';
	label.htmlFor = index;
	input.id = index;
	input.type = 'checkbox';
	input.onclick = function () {
		updateStatus(this);
	};
	span.className = checked;
	span.innerHTML = '' + todo.name + '';
	button.className = 'delete-btn';
	button.dataset.index = index;
	button.onclick = function () {
		remove(this);
	};
	i.className = 'fa fa-times';

	button.appendChild(i);
	label.appendChild(input);
	label.appendChild(span);
	li.appendChild(label);
	li.appendChild(button);

	return li.outerHTML;
}

function showTodos() {
	if (todosJson.length == 0) {
		todosHtml.innerHTML = '';
		emptyImage.style.display = 'block';
	} else {
		todosHtml.innerHTML = todosJson.map(getTodoHtml).join('');
		emptyImage.style.display = 'none';
	}
}

function addTodo(todo) {
	input.value = '';
	todosJson.unshift({ name: todo, status: 'pending' });
	localStorage.setItem('todos', JSON.stringify(todosJson));
	showTodos();
}

input.addEventListener('keyup', (e) => {
	let todo = input.value.trim();
	if (!todo || e.key != 'Enter') {
		return;
	}
	addTodo(todo);
});
