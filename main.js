

const canvas = document.getElementById("jogoCanvas");
const ctx = canvas.getContext("2d");
const spanPlacar = document.getElementById("placar");

let pontucao = 0;
let frames = 0;
let jogoAtivo = true;
let velocidadeGlobal = 3;
let frenquenciaCriacao = 60;

let player ={
 x: 180,
 y: 430,
 tamanho: 35,
 velocidade: 6,
 cor: "blue"
};

let obstaculos [];

let teclas = {};
window.addEventListener("keydown", (e) => teclas[e.key] = true);
window.addEventListener("keyup", (e) => teclas[e.key] = false);

function gerenciarMovimento (){
 if(teclas["ArrowLeft"] && player.x > 0){
  player.x -= player.velocidade;
 }
 if(teclas["ArrowRight"] && player.x + player.tamanho < canvas.width){
   player.x += player.velocidade;
 }
  if(teclas["ArrowUp"] && player.x > 0){
  player.y -= player.velocidade;
 }
 if(teclas["ArrowDown"] && player.x + player.tamanho < canvas.heidth){
   player.y += player.velocidade;
 }
}

setInterval(()=>{
  if(jogoAtivo){
    velocidadeGlobal += 1;
    console.log("Aumentando velocidade base para: " + velocidadeGlobal)
  }
}, 30000) 

function atualizar(){
  frames++;
 if(frames % frequenciaCriacao === 0)
   obstaculos.push({
     x: Math.random() * (canvas.width - 25),
     y: -30,
     tamanho: 25,
     cor: "#e74c3c"
   });

}

function atualizar(){
if(teclas["ArrowLeft"]) player.x -= player.velocidade;
if(teclas["ArrowRight"]) player.x += player.velocidade;
//Movimentação no eixo y
if(teclas["ArrowDown"]) player.y += player.velocidade;
if(teclas["ArrowUp"]) player.y -= player.velocidade;
}
// Limpar a tela e criar o personagem
function desenhar(){
ctx.clearRect(0,0, canvas.width, canvas.height);
ctx.fillStyle = player.cor;
ctx.fillRect (player.x, player.y, player.tamanho, player.tamanho);
}
//iniciar o jogo
function loop(){
    atualizar();
    desenhar();
    requestAnimationFrame(loop);
}
loop();
