var div;
var size;

function myClickEvent(event){
    div = document.createElement('div');
    div.style.borderRadius = '50%';
    div.style.position = 'absolute';

var randomRed = Math.floor(Math.random() * 256);
var randomGreen = Math.floor(Math.random() * 256);
var randomBlue = Math.floor(Math.random() * 256);
var randomOpacity = Math.floor(Math.random() * 256);
div.style.backgroundColor = 'rgba(' + randomRed +',' + randomGreen +',' + randomBlue +',' + randomOpacity ;

size = Math.ceil(Math.random() * 200);
div.style.width = size + 'px';

div.style.height = size + 'px';

div.style.left = event.clientX - (size/2) + 'px';
div.style.top =  event.clientY - (size/2) + 'px';

var body = document.getElementsByTagName('body')[0];
body.appendChild(div);

setInterval(shrink, 30);
}

function shrink() {
    size = size - 1;
    div.style.width = size + 'px';
    div.style.height = size + 'px';
}

document.addEventListener('click', myClickEvent);