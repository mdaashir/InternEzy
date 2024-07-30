/* External JS */
const input = document.querySelector('input');
const addButton = document.querySelector('.add-button');
const todosHtml = document.querySelector('.todos');
const emptyImage = document.querySelector('.empty-image');
let todosJson = JSON.parse(localStorage.getItem('todos') ?? '') || [];
const deleteAllButton = document.querySelector('.delete-all');
const filters = document.querySelectorAll('.filter');
let filter = '';
