let input = document.querySelector('input');
let button = document.querySelector('button');
let ul = document.querySelector('ul');
let form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('ffff');
    console.log(input.value);
    if (input.value != ''){
        let button = document.createElement('button');
        button.innerText = 'X';

        let li = document.createElement('li');

        let p = document.createElement('p');
        p.innerText = input.value;

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', (event) => {
            p.classList.toggle('crossedout')
        })

        button.addEventListener('click', (event) => {
            li.remove();
        })

        li.appendChild(button);
        li.appendChild(p);
        li.appendChild(checkbox);
        ul.appendChild(li);
        
        input.value = '';
    }
})
