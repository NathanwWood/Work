function myClickEvent(){
    alert('The Button Was Pressed');
}

function myLoadEvent(){
    var element = document.getElementById('circle');
    element.addEventListener('circle',myClickEvent);
    document.addEventListener('DOMContentLoaded', myLoadEvent);
}

function myClickEvent() {
    var element = document.getElementById('circle');
    element.style.backgroundColor = 'blue';
}

function myLoadEvent(){
    var element = document.getElementById('circle');
    element.addEventListener('click', myClickEvent);
}

document.addEventListener('DOMContentLoaded', myLoadEvent);

function myClickEvent(){
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity - 0.1;
}
document.addEventListener('DOMContentLoaded', myLoadEvent);

function myLoadEvent(){
    var element = document.getElementById('circle');
    element.addEventListener('click', myClickEvent);
    element.style.opacity = '0.5';
}
document.addEventListener('DOMContentLoaded', myLoadEvent);

function myInterval(){
    var element = document.getElementById('circle');
    var circleOpacity = element.style.opacity;

    element.style.stopOpacity = circleOpacity - 0.01;
}

function myClickEvent(){
    setInterval(myInterval, 10);
}

function myLoadEvent(){
    var element = document.getElementById('circle');
    element.addEventListener('click', myClickEvent);
    element.style.opacity = 1;
}
document.addEventListener('DOMContentLoaded', myLoadEvent);

function myKeyDown(){
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;

    element.style.left = positionLeft - 10 + 'px';
}

function myLoadEvent(){
    document.addEventListener('keydown', myKeyDown);
}
document.addEventListener('DOMContentLoaded', myLoadEvent);

function myKeyDown(event){
    console.log(event.keyCode);
}
document.addEventListener('keydown', myKeyDown);