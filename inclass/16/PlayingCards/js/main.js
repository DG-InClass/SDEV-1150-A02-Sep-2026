const container = document.getElementById('players');

const form = document.querySelector('form');
// TODO: Add Event Listener
form.addEventListener('submit', function (evt) {
    evt.preventDefault(); // 📍Remember, or the page will reload
    console.log('Adding players ...');

    // Get the names from the <input name="playerNames" />
    /** @type {HTMLFormElement} */
    const theForm = evt.target; // <form> elements
    const formControls = theForm.elements;
    console.log(formControls);
    console.log(formControls["playerNames"]); // formControls.playerNames
    const inputElement = formControls.playerNames;
    const names = inputElement.value; // .value will hold a string
    // const names = evt.target.elements.playerNames.value
    console.log('The user entered this: ', names);

    /** @type { string[] } */
    const allNames = names.split(',');
    const allTrimmedNames = allNames.map(name => name.trim());
    //                              \____ clean up _________/

    container.innerHTML = ''; // Clear out any previous player list
    allTrimmedNames.forEach((player, index) => {
        const playerDiv = `<div id="player-${index}">
            <h2>${player}</h2>
        </div>`;
        container.innerHTML += playerDiv; // Append this new player
    });

    container.classList.remove('hidden');// Reveal the player list

});

const dealButton = document.getElementById('deal-me-in');
// TODO: Add Event Listener
dealButton.addEventListener('click', function (evt) {
    console.clear(); // just to reduce the "noise" of other logging
    const players = container.querySelectorAll('div');
    players.forEach(playerHand => {
        const card = shuffledCards.pop(); // pull a card from the top
        const img = `<img src="/img/${card}.svg" alt="${card}" />`;
        playerHand.innerHTML += img;
        console.log(playerHand);
    });
});

const shuffledCards = [
    "4D",
    "3D",
    "4H",
    "6S",
    "3H",
    "4S",
    "JC",
    "3C",
    "7C",
    "6C",
    "8H",
    "KD",
    "KH",
    "JH",
    "QH",
    "7H",
    "AS",
    "8S",
    "3S",
    "8C",
    "0S",
    "7S",
    "6H",
    "4C",
    "JD",
    "9S",
    "0D",
    "5S",
    "AC",
    "9H",
    "2C",
    "0H",
    "9C",
    "8D",
    "6D",
    "KS",
    "QC",
    "KC",
    "5H",
    "2S",
    "JS",
    "QD",
    "2H",
    "7D",
    "AD",
    "2D",
    "0C",
    "AH",
    "9D",
    "5C",
    "QS",
    "5D"
]
