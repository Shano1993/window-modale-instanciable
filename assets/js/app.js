let form = document.getElementById('form');
let closed = document.getElementById('close');
let container = document.getElementById('container');
let div = document.createElement('div');

function open() {
    form.addEventListener("click", () => {
        container.append(div);
        container.style.backgroundColor = 'rgba(0,0,0,0.21)';
        div.style.width = '50rem';
        div.style.height = '40rem';
        div.style.marginTop = '10rem';
        div.style.backgroundColor = 'white';
        div.style.boxShadow = "5px 10px 10px 5px #000000";
        div.innerHTML = 'Ceci est une fenêtre modale instanciable !'
        form.style.display = 'none';
        closed.style.display = 'block';
    })
}

open();

function close() {
    closed.style.display = 'none';
    form.style.display = 'block';
    container.style.backgroundColor = '';
    div.remove();
}

closed.addEventListener("click", close);