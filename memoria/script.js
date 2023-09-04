const imgs = ['chinchilla.jpg', 'bull.jpg', 'lemur.jpg', 'dromedary.jpg', 'elephant.jpg', 'koala.jpg', 'pig.jpg', 'snake.jpg', 'tiger.jpg', 'whale.jpg'];
console.log(imgs)

let virado1 = null;
let virado2 = null;
let pontos = 0



function removeItem(v1, v2) {
    console.log(v1, v2);
    v1.classList.remove('card-turned');
    v2.classList.remove('card-turned');

}

function turnCard(id) {

    let card = document.getElementById(id);
    console.log(card.attributes.getNamedItem('data-img'));
    card.classList.toggle('card-turned');
    if (virado1 != null) {
        if (virado2 == null) {
            virado2 = card;
            if (virado1.getAttribute('data-img') == virado2.getAttribute('data-img')) {
                console.log("igual");
                virado1.classList.add('match');
                virado2.classList.add('match');
                pontos += 1;
            } else {
                console.log("teste0");
                setTimeout(removeItem, 1000, virado1, virado2);

            }
            virado1 = null;
            virado2 = null;
        }
    } else {
        virado1 = card;
    }


}

function revealAll() {
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add('card-turned');
    }
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
    card.setAttribute('data-img', img);
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
    let container = document.getElementById('container');
    let cards = [];
    imgs.forEach((img, index) => {
            let card = createCard(img, index + 1);
            cards.push(card)
            card = createCard(img, (index + 1) * 53);
            cards.push(card);
        })
        /* container.appendChild(card); */
    cards.sort(() => .5 - Math.random());
    console.log(cards);
    cards.forEach(card => container.appendChild(card));
    //container.appendChild(card);
}

init()