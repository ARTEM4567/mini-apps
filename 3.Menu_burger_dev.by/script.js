let mainButton = document.querySelector('.main_button');
let input = document.getElementById('input');
let menu = document.querySelector('.menu');
let search = document.querySelector('.search')

mainButton.addEventListener('click', function (){
    mainButton.classList.toggle('bgcross');
    menu.classList.toggle('novis');
    console.log('click')
})

input.addEventListener('focusin', function (){
    input.style.backgroundColor = 'rgb(250, 250, 250)';
    search.style.backgroundColor = 'rgb(250, 250, 250)';
})

input.addEventListener('focusout', function (){
    input.style.backgroundColor = 'rgb(238, 238, 238)';
    search.style.backgroundColor = 'rgb(238, 238, 238)';
})