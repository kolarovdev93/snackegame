let canvas = document.getElementById('snack');
let context = canvas.getContext("2d");
let box = 32;

/**
 * A COBRA PRECISA 
 * DE SER UM ARRAY
 */


let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

 /**
  * CRIAR UMA FUNÇÃO QUE VAI
  * CRIAR O CANVAS
  */
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}


function criarCobrinha(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();