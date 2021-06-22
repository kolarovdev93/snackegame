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


let direction = "right";


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

/**
 * ACTUALIZAR O JOGO
 * DE TEMPOS EM TEMPOS
 */


function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //actualizaçã do array
    snake.pop();

    //adicionar uma nova cabeça a cobrinha
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead)
}

let jogo = setInterval(iniciarJogo, 100);