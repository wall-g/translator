var btn = document.querySelector('#btn-translate');
var textInput = document.querySelector('#textarea');
var outputDiv = document.querySelector('#output');

btn.addEventListener('click', clickEvent);

function clickEvent(){
    outputDiv.innerText = textInput.value;
    
};