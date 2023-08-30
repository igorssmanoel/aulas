function turnCard(id) {
    let card = document.getElementById(id);
    card.classList.toggle('card-turned');
}

function reset() {
    let cards = document.getElementsByClassName("card");
    console.log(cards);
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('card-turned');
    }
}