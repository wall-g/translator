var btn = document.querySelector('#btn-translate');
var textInput = document.querySelector('#textarea')

btn.addEventListener('click', clickEvent);

function clickEvent(){
    
    console.log(textInput.value);
}