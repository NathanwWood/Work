var upPressed = fales;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false;

function keyup(event){
    var player = document.getElementById('player');
    if (event.keycode == 37){
        leftPressed = false;
        lastPressed = 'left';
    }
    if (event.keycode == 39){
        rightPressed = false;
        lastPressed = 'right';
    }
    if (event.keycode == 38){
        uptPressed = false;
        lastPressed = 'up';
    }
    if (event.keycode == 37){
        downPressed = false;
        lastPressed = 'down';
    }

    player.className = 'character stand' + lastPressed;

}

function move() {
    var player = document.getElementById('player');
    var positionLeft = player.offsetLeft;
    var positionTop = player.offsetTop
    if (downPressed){
        player.style.top = positionTop+1 + 'px';
        player.className = 'character walk down';
    }
    if (upPressed){
        player.style.top = positionTop-1 + 'px';
        player.className = 'chharacter walk left';
    }
    if (rightPressed){
        player.style.left = positionLeft+1 +'px';
        player.className = 'character walk right'
    }
}

function keydown(event){
    if (event.keycode == 37){
        leftPressed = true;
    }
    if (event.keycode == 39){
        rightPressed = true;
    }
    if (event.keycode == 38){
        upPressed = true;
    }
    if (event.keycode == 40){
        downPressed = true;
    }
}

function setHead0(){
    var player = document.getElementById('player');
    player.getElementsByClassName(head)[0].style.backgroundImage = 'url'
}