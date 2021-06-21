let canvas = document.getElementById('snack');

let context = canvas.getContext("2d");

let box = 32;

let snack = [];

/**
 * Coordenadas x e y
 * para colocar a cobra inicialmente 
 * numa posição definida a baixo
 */
snack[0]={
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

function criarBG(){//criar fundo
    context.fillStyle = "lightgreen";//dar um contraste com o estilo do canvas

    context.fillRect(0, 0, 16 * box, 16 * box);//desenhar o rectangulos com aquelas coordenadas
}

/*a cobrinha é uma array

as coordenadas serão x e y.

a cobra é um array que a medida que esta
anda será incrementado ou decrementado

*/
function criarCobrihna(){
    for(i = 0; i < snack.length; i++){
        context.fillStyle = "green";

        context.fillRect(snack[i].x, snack[i].y, box, box);
        /**
         * 
         * Aqui colocamos a cobra na box
         */
    }
}

/**
 * Criar uma função que faça que a cobra ande
 * de tempo em tempo
 */

function inicialJogo(){
    /**
     * Chamar as primeiras funcoes
     */
     criarBG();
     criarCobrihna();

     /**
      * Definir a posição inicial da cobrina
      */

     let snakeX = snack[0].x;
     let snakeY = snack[0].y;

    //Criar as coordenadas da cobrinha

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snack.pop();

    let newHead = {
        x: snackX,
        y: snakeY
    }

    snack.unshift(newHead);
}
/**
 * Começar o jogo no intervalo em 100 milisegundo
 * depois é renovada assim que ele travar
 */
let jogo = setInterval(inicialJogo, 100);






