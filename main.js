const canvas = document.getElementById("jogoCanvas")
const ctx = canvas.getContext("2d")

 //Config. personagem
let player = {
    x:360,
    y:0,
    tamanho:40,
    velocidade:5,
    cor: "black"
};

// monitor de teclas
let teclas = {};
window.addEventListener("keydown", (e) => teclas[e.key] = true);
window.addEventListener("keyup", (e) => teclas[e.key] = false);

function atualizar()
{
//movimentação no eixo x
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
