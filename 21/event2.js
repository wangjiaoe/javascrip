window.onload = function() {
    console.log('hello');

}

function sayHi() {
    console.log('hihi');
}

function changeBackgroundColor() {
    document.getElementById('div1').style.backgroundColor = '#ff0000';
}

function dontTouchMe() {
    let square = document.getElementById('div1');
    let prePosition = square.getAttribute('class')
        // 解决重复落在同一个位置，导致DIV被点到问题的方案
    do {
        let randNum = Math.floor(Math.random() * 5 + 1);
        nextPosition = 'box position' + randNum;
        square.setAttribute('class', nextPosition);
        console.log(nextPosition);
    } while (prePosition === nextPosition)
}

function dontTouchMeToo() {
    let square = document.getElementById('div2');
    let randY = Math.floor(Math.random() * 500);
    let randX = Math.floor(Math.random() * 500);
    console.log(randY, randX);
    square.style.top = randY + 'px';
    square.style.left = randX + 'px';

}