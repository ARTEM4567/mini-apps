let burgerButton = document.querySelector('.menu_burger');
console.log(burgerButton)
let XButton = document.querySelector('.leftpart_button');
let main = document.getElementById('main');
let leftPart = document.querySelector('.leftpart');

burgerButton.addEventListener('click', function (){
    burgerButton.classList.add('display_none');
    leftPart.classList.remove('zero_width');
    main.classList.add('margin_main');
})

XButton.addEventListener('click', function (){
    burgerButton.classList.remove('display_none');
    leftPart.classList.add('zero_width');
    main.classList.remove('margin_main');
})