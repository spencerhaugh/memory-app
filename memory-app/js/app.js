// console.log('connected!')

// BASIC GAME SETUP:
// create colorArray
// create game cards (18 cards, each with a random color from colorArray, and populate the currentGameColors array)

let colorArray = [
    '#DC143C',
    '#FF69B4',
    '#DA70D6',
    '#FF00FF',
    '#9400D3',
    '#0000CD',
    '#6495ED',
    '#A2B5CD',
    '#00BFFF',
    '#00F5FF',
    '#00C78C',
    '#00FF7F',
    '#00FF00',
    '#7CFC00',
    '#FFFF00',
    '#808069',
    '#FFFFF0',
    '#BDB76B',
    '#FFD700',
    '#FFA500',
    '#CD8500',
    '#CD6600',
    '#8B8682',
    '#292421',
    '#8B4513',
    '#FFA07A',
    '#FF4500',
    '#FF7F50',
    '#FF6347',
    '#FFE4E1',
    '#EAEAEA',
    '#FF0000',
    '#8E388E',
    '#800000',
    '#8E8E38',
    '#C5C1AA',
    '#388E8E',
    '#FF7D40',
    '#4B0082',
    '#8968CD',
    '#F8F8FF',
];

let currentGameColors = [];




const makeCards = () => {
    
}

const startGame = () => {
    for (i = 0; i < 18; i++) {
        let colorPicker = Math.floor(Math.random() * 40);
        currentGameColors.push(colorPicker); // account for no doubles??
        let $card = $('<div>').addClass('gameCard');
        $card.css('background-color', colorArray[colorPicker]);
    }
}

const matchCard = () => {
    let matchCardPicker = Math.floor(Math.random() * currentGameColors.length);
    let $matchCard = $('<div>').addClass('matchCard');
        $matchCard.css('background-color', currentGameColors[matchCardPicker]);
}