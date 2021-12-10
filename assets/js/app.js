let form = document.getElementById('form');
let container = document.getElementById('container');
let div = document.createElement('div');
const RIGHT_BUTTON = 2;

document.addEventListener("contextmenu", function (event){
    event.preventDefault();
});

function open() {
    form.addEventListener("click", () => {
        container.append(div);
        container.style.backgroundColor = 'rgba(0,0,0,0.21)';
        div.style.width = '50rem';
        div.style.height = '40rem';
        div.style.marginTop = '10rem';
        div.style.backgroundColor = 'white';
        div.style.boxShadow = "0 0 10px 5px white";
        div.style.border = "1rem solid black";
        div.style.fontSize = "2rem";
        div.innerHTML = 'Veuillez entrer toutes les informations';
        divElement();
        form.style.display = 'none';
    })
}

open();

function divElement() {
    let input1 = document.createElement('input');
    let input2 = document.createElement('input');
    let input3 = document.createElement('input');
    let input4 = document.createElement('input');
    let input5 = document.createElement('input');
    div.appendChild(input1);
    div.appendChild(input2);
    div.appendChild(input3);
    div.appendChild(input4);
    div.appendChild(input5);
    input1.placeholder = "Votre nom";
    input2.placeholder = "Votre prénom";
    input3.placeholder = "Votre E-mail";
    input4.placeholder = "Votre mot de passe";
    input4.type = "password";
    input5.placeholder = "Confirmer";
    input5.type = "password";
}

div.addEventListener("mouseup", function (event) {
    switch (event.button) {
        case RIGHT_BUTTON: // set the right click to "O"
        container.remove();
    }
});