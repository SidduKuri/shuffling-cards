function createShuffleCards() {
    const container = document.getElementById('cardsRow');
    container.innerHTML = '';
    const randomCardsArr = getRandomNumber(1, 9);
    for (let i = 0; i < randomCardsArr.length; i++) {
        container.innerHTML += `<div class="column">
                                    <div class="card">
                                        <h3>${randomCardsArr[i]}</h3>
                                    </div>
                                </div>`;
    }
    addColorClass();
}

function getRandomNumber(min, max) {
    let arr = [];
    while (arr.length < 9) {
        let r = Math.floor(Math.random() * (max - min + 1)) + min;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}

function addColorClass() {
    const cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        if (i === 0 || i === 7) {
            cards[i].className += ' first-color';
        } else if (i === 1 || i === 3) {
            cards[i].className += ' second-color';
        } else if (i === 2 || i === 4 || i === 8) {
            cards[i].className += ' third-color';
        } if (i === 5 || i === 6) {
            cards[i].className += ' fourth-color';
        }
    }
}

function sortCards() {
    console.log('inside sort');
    const container = document.getElementById('cardsRow');
    container.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        container.innerHTML += `<div class="column">
                                    <div class="card">
                                        <h3>${i + 1}</h3>
                                    </div>
                                </div>`;
    }
    addColorClass();
}

createShuffleCards();
