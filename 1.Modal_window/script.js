let mainButton = document.getElementById('mainbutton');
let windowjs = document.getElementById('windowjs');
let windowButton = document.getElementById('windowbutton');

mainButton.addEventListener('click', function () {
    windowjs.classList.remove('bg_color_nonvis');
})

windowButton.addEventListener('click', function (event) {
    windowjs.classList.add('bg_color_nonvis');
})

window.addEventListener('click', function (event) {
    if(event.target == windowjs){
        windowjs.classList.add('bg_color_nonvis');
    }
})