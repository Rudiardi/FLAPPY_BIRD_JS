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
    gravidade:0.25,
    velocidade:0,
    atualizar(){
        flappyBird.velocidade=flappyBird.velocidade+flappyBird.gravidade;
        console.log(flappyBird.velocidade);
        flappyBird.y=flappyBird.y+flappyBird.velocidade;
    },
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

const telaDeInicio = {
    spriteX: 134, //inicio do quadro de seleção
    spriteY: 0,
    largura: 174, //fim do quadro de seleção
    altura: 152,
    x:(canvas.width/2)-174/2, //tamanho da imagem
    y:50,
    desenhar(){
        contexto.drawImage(       
            sprites,
            telaDeInicio.spriteX, telaDeInicio.spriteY,
            telaDeInicio.largura, telaDeInicio.altura,
            telaDeInicio.x,telaDeInicio.y,
            telaDeInicio.largura,telaDeInicio.altura
        );
    }
}

//CRIAÇÃO DE TELAS


let telaAtiva = {};

function mudaDeTela(novaTela){
    telaAtiva = novaTela; 
}

const telas = {
    inicio:{
        desenhar(){
            planoDeFundo.desenhar();
            telaDeInicio.desenhar();
            chao.desenhar();
            flappyBird.desenhar();
        },
        click(){
            mudaDeTela(telas.telaDeJogo)
        },
        atualizar(){

        }
    },

    telaDeJogo: {
        desenhar(){
            planoDeFundo.desenhar();
            chao.desenhar();
            flappyBird.desenhar();
        },
        atualizar(){
            flappyBird.atualizar();
        }
    }
};



function loop(){ //atualização da tela
    
    telaAtiva.desenhar();
    telaAtiva.atualizar();
    requestAnimationFrame(loop);
}

window.addEventListener('click', function(){
    if (telaAtiva.click){
        telaAtiva.click();
    }
});


mudaDeTela(telas.inicio);
loop();