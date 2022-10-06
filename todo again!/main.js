const form = document.querySelector('form');
const ul = document.querySelector('ul');
const i = document.querySelector('div i');
const search = document.querySelector('.ser');
const todooo = document.querySelector('.new');

form.addEventListener('submit', e=>{
    e.preventDefault();
    const newTodo = document.querySelector('.new').value
    if(!newTodo == ""){

    let html = `<div><p> ${newTodo} </p><i class="del fas fa-trash-alt"></i></div>`
    ul.innerHTML+= html.trim();
    form.reset();
    }else{
        alert("Please Type Your ToDo First!")
    }
    
})

ul.addEventListener('click', (e)=> {
    if(e.target.classList.contains('del')){
        e.target.parentElement.remove();
    }
    
})

//search

search.addEventListener('keyup', ()=> {
    const term = search.value.trim();
    Array.from(ul.children)
    .filter(one=> {!one.textContent.includes(term);})
    .forEach(one => {one.classList.add('filtered')})

    Array.from(ul.children)
    .filter(one=> {one.textContent.includes(term);})
    .forEach(one => {one.classList.remove('filtered')})
})
