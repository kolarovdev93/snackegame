let canvas = document.getElementById('snack');

let context = canvas.getContext("2d");

let box = 32;

function criarBG(){//criar fundo
    context.fillStyle = "lightgreen";//dar um contraste com o estilo do canvas

    context.fillRect(0, 0, 16 * box, 16 * box);//desenhar o rectangulos com aquelas coordenadas
}


criarBG();