let canvas = document.getElementById('snack');
let context = canvas.getContext("2d");
let box = 32;
 /**
  * CRIAR UMA FUNÇÃO QUE VAI
  * CRIAR O CANVAS
  */
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();