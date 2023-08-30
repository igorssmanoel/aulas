const imgs = ['chinchilla.jpg', 'bull.jpg', 'lemur.jpg', 'dog.jpg', 'dromedary.jpg', 'elephant.jpg', 'koala.jpg', 'lemur.jpg', 'pig.jpg', 'snake.jpg', 'tiger.jpg', 'whale.jpg'];
console.log(imgs)


function turnCard(id) {
    let card = document.getElementById(id);
    card.classList.toggle('card-turned');
}

function reset() {
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('card-turned');
    }
}


function createCardFace(img, className) {
    let cardFace = document.createElement("div");
    cardFace.className = className;
    cardFace.style.backgroundImage = `url('img/${img}')`;
    cardFace.style.backgroundSize = 'cover';
    return cardFace;
}

function createCardAttributes(card, img, index) {
    card.className = 'card';
    card.id = 'card-' + index + "-" + img;
    card.onclick = () => turnCard(card.id);
}

function createCard(img, index) {
    let card = document.createElement("div");
    let cardBack = createCardFace('jaguar.jpg', 'card-front');
    let cardFront = createCardFace(img, 'card-back');

    createCardAttributes(card, img, index);

    card.appendChild(cardFront);
    card.appendChild(cardBack);
    return card;
}

function init() {
    imgs.forEach((img, index) => {
        let container = document.getElementById('container');
        let card = createCard(img, index);
        container.appendChild(card);
    })
}

init()