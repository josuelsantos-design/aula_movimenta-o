

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



for (let i = 0; i < obstaculos.length; i++) {
    let obs = obstaculos [i];
    obs.y += velocidadeGlobal;

 // Verficação da Colisão
 if (player.x < obs.x + obs.tamanho &&
     player.x + player.tamanho > obs.x &&
     player.y < obs.y + obs.tamanho &&
     player.y + player.tamanho > obs.y) {

        finalizarJogo();
  {

  // Pontuação e Limpeza
  if (obs.y > canvas.height) { 
      obstaculos.splide(i, 1);
      i--;
      pontuação++;
      spanPlacar.innerText = pontuacao;
     }
   }
 }










   
