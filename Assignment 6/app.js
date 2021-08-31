const inp = document.querySelector('input');
const list = document.getElementById('list');
// const btn = document.getElementByClassName('add');

inp.addEventListener('keypress', (e) => {
    if (e.which === 13) {
        const todoText = inp.value;
        
        const li = document.createElement('li');
        li.innerHTML = todoText;

        li.addEventListener('click', () => {
            li.remove();
        })

        list.append(li);

        inp.value = "";
    }
})  
btn.addEventListener('click', ()=>{
    // if (e.which === 13) {
        const todoText = inp.value;
        
        const li = document.createElement('li');
        li.innerHTML = todoText;

        li.addEventListener('click', () => {
            li.remove();
        })

        list.append(li);

        inp.value = "";
    // }
})
