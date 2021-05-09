function myKeyDown(event){

if (event.KeyCode == 37){
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 10 + 'px';
}

if (event.KeyCode == 38){
    var element = document.getElementById('circle');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - 10 + 'px';
}

if (event.KeyCode == 39){
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 10 + 'px';
}

if (event.KeyCode == 40){
    var element = document.getElementById('circle');
    var positionTop = element.offsetTop;
    element.style.top = positionTop + 10 + 'px';
}

}

var interval = 0;

function myKeyDown(event){
    clearInterval(interval);
    if (event.code == 37){
interval = setInterval(moveLeft, 10);
    }
    if (event.code == 38){
        interval = setInterval(moveUp, 10);
            }
            if (event.code == 39){
                interval = setInterval(moveRight, 10);
                    }
                    if (event.code == 40){
                        interval = setInterval(moveDown, 10);
                            }
}

function myLoadEvent(){
    document.addEventListener('keydown', myKeyDown);
}
document.addEventListener('DOMContentLoaded', myLoadEvent)