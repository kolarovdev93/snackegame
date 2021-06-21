let canvas = document.getElementById('snack');

let context = canvas.getContext("2d");

let box = 32;

let snack = [];

snack[0]={
    x: 8 * box,
    y: 8 * box
}

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

criarBG();
criarCobrihna();