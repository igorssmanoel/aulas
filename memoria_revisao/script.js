let cartaVirada1 = null;
let cartaVirada2 = null;
let pontuacao = 0;

let imagens = ["bull.jpg", "dog.jpg", "dromedary.jpg"];

function desvirarCartas(c1, c2) {
    c1.classList.remove('carta-virada');
    c2.classList.remove('carta-virada');
    c1.style.background = "yellow";
    c2.style.background = "yellow";
}


function pontuar() {
    pontuacao = pontuacao + 1;
    let pontuacaoElemento = document.getElementsByClassName("pontuacao")[0];
    pontuacaoElemento.innerText = pontuacao;
}

function adicionarClasseDataPar(c){
    c.classList.add(`carta-par`);
}

function atualizarImagens(c1, c2) {
    let dataPar = c1.getAttribute('data-par');
    adicionarClasseDataPar(c1);
    adicionarClasseDataPar(c2);
    atualizarImagem(c1, dataPar);
    atualizarImagem(c2, dataPar);
}

function atualizarImagem(c, dataPar) {
    c.style.backgroundImage = `url('./img/${dataPar}')`;
    c.style.backgroundSize = 'cover';
}

function zerarValores() {
    cartaVirada1 = null;
    cartaVirada2 = null;
}

function atualizaAtributosImagem(c){
    let dataPar = c.getAttribute('data-par');
    atualizarImagem(c, dataPar);
}

function virarCarta(cartaId) {
    let elemento = document.getElementById(cartaId);
    if (elemento == null || elemento.classList.contains('carta-virada') || elemento.classList.contains('carta-par')) {
        return;
    }

    if (cartaVirada1 != null) {
        cartaVirada2 = elemento;
        if (cartaVirada2.getAttribute('data-par') == cartaVirada1.getAttribute('data-par')) {
            atualizarImagens(cartaVirada1, cartaVirada2)
            pontuar();
            zerarValores();
            return;
        }

        atualizaAtributosImagem(cartaVirada2);
        setTimeout(desvirarCartas, 2000, cartaVirada1, cartaVirada2);
        zerarValores();
        return;
    }

    cartaVirada1 = elemento;
    atualizaAtributosImagem(cartaVirada1);
}



function criarCarta(id, dataPar) {
    let elementoCarta = document.createElement("div");
    elementoCarta.setAttribute("data-par", dataPar);
    elementoCarta.id = id;
    elementoCarta.className = "carta flex-center";
    elementoCarta.addEventListener('click', function () {
        virarCarta(id);
    });
    return elementoCarta;
}

function criaParametrosCarta(i, dataPar) {
    let id = 'carta-' + i;
    let elementoCarta = criarCarta(id, dataPar);
    return elementoCarta;
}


function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

function criaItemsAleatorios(){
    let items = [];
    for (let i = 0; i < imagens.length * 2; i = i + 2) {
        let dataPar = imagens[i / 2];
        items.push(criaParametrosCarta(i, dataPar));
        items.push(criaParametrosCarta(i + 1, dataPar));
    }

    return items;
}

function adicionaItensNoTabuleiro(itemsAleatorios){
    let tabuleiro = document.getElementById("tabuleiro");
    for (let i = 0; i < itemsAleatorios.length; i++) {
        tabuleiro.appendChild(itemsAleatorios[i]);
    }
}

function init() {
    let items = criaItemsAleatorios();
    let itemsAleatorios = shuffle(items);
    adicionaItensNoTabuleiro(itemsAleatorios);
}

init();