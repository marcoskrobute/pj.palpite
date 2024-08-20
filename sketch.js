let numeroAleatorio;
let tentativas = 0;
let input;
let button
let feedback;

function setup() {
   createCanvas(400, 200);
   numeroAleatorio = floor(random(1, 101));
  
   input = createInput();
   input.position(20, 150);
  
   button = createButton('palpite');
   button.position(input.x + input. width, 150);
   button.mousePressed(verificarpalpite);
  
  feedback = createElement('h2', '');
  feedback.position(20, 100);
}

function verificarpalpite(){
   const palpite = parseInt(input.value());
   tentativas++;
  
  if (palpite === numeroAleatorio) {
    feedback.html('parabéns! você acertou o número em r${tentaativas} tentativas!');
  } else if (palpite < numeroAleatorio) {
    feedback.html('palpite muito baixo. tente novamente!');
   } else {
     feedback.html('palpite muito alto. tente novamente');
   }
   }
  https://editor.p5js.org/
function draw() {
  background(220);
}