/*
    OBJETIVO - quando cliclarmos no botão temos que mostrar a imagem de fundo correspondente:

    - passo 1 - dar um jeito de pegar o elemento HTML dos botões

    - passo 2 - dar um jeito de identificar o clique do usuário no botão

    - passo 3 - desmarcar o botão selecionado anterior

    - passo 4 - marcar o botão clicando como se estivesse selecionada

    - passo 5 - esconder a imagem de fundo anterior

    - passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado

*/

//- passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoescarrossel = document.querySelectorAll('.botao');
console.log(botoescarrossel);
const imagens = document.querySelectorAll('.imagem')

//- passo 2 - dar um jeito de identificar o clique do usuário no botão
botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //- passo 3 - desmarcar o botão selecionado anterior   
        desativarBotaoSelecionado();

        //- passo 4 - marcar o botão clicando como se estivesse selecionado
        selecionarBotaoCarrossel(botao);

        //- passo 5 - esconder a imagem ativa de fundo anterior
        esconderImagemAtiva();  

        //- passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostrarImagemDeFundo(indice);
    })
}) 

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtva = document.querySelector('.ativa');
    imagemAtva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
