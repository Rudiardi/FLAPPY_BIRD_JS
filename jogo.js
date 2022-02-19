console.log(`[Rudiardi] Flappy Bird`);

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const chao = {
    spriteX: 0, //inicio do quadro de seleção
    spriteY: 610,
    largura: 224, //fim do quadro de seleção
    altura: 112,
    x:0, //tamanho da imagem
    y:canvas.height-112,
    desenhar(){
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x,chao.y,
            chao.largura, chao.altura,
        );
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            (chao.x+chao.largura),chao.y,
            chao.largura, chao.altura,
        );
    }
}

const planoDeFundo = {
    spriteX: 391, //inicio do quadro de seleção
    spriteY: 0,
    largura: 275, //fim do quadro de seleção
    altura: 204,
    x:0, //tamanho da imagem
    y:chao.y-204,
    desenhar(){
        contexto.fillStyle='#70c5ce';
        contexto.fillRect(0,0,canvas.width,canvas.height);


        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            planoDeFundo.x, planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura,
        );
        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            (planoDeFundo.x+planoDeFundo.largura), planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura,
        );
    }
};


const flappyBird = { //criação do objeto
    spriteX: 0, //inicio do quadro de seleção
    spriteY: 0,
    largura: 33, //fim do quadro de seleção
    altura: 24,
    x:10, //tamanho da imagem
    y:50,

    //adicionando uma função ao objeto
    desenhar(){
        contexto.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY,
            flappyBird.largura, flappyBird.altura,
            flappyBird.x,flappyBird.y,
            flappyBird.largura, flappyBird.altura
        );
    }
}


function loop(){ //atualização da tela
    planoDeFundo.desenhar();
    chao.desenhar();
    flappyBird.desenhar();
    requestAnimationFrame(loop);
}

loop();