// Define game variables and functions
let gameData = {
    town: {
        name: "Rodet Town",
        population: 100,
        resources: {
            gold: 100,
            food: 100,
            water: 100
        }
    },
    player: {
        name: "", // Player name will be assigned later
        health: 100,
        money: 50
    },
    eventsLog: []
};

// Function to start the game
// Function to start the game
function startGame() {
    let playerNameInput = document.getElementById("player-name-input").value.trim(); // Trim the input value


        const playerName = document.getElementById('player-name-input').value;
        const content = document.getElementById('player-name-field').value;

        if (playerName.trim() === '' || content.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

    
    gameData.player.name = playerNameInput;
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    playBackgroundMusic();
    init();
}

// Add event listener to the "Start Game" button
document.addEventListener("DOMContentLoaded", function() {
    let startButton = document.getElementById("start-button");
    startButton.addEventListener("click", startGame);
});

// Function to play background music
function playBackgroundMusic() {
    let backgroundMusic = document.getElementById("background-music");
    backgroundMusic.volume = 0.3; // Adjust volume as needed
    backgroundMusic.play();
}

// Function to initialize the game
function init() {
    displayTownInfo();
    displayPlayerInfo();
}

// Function to display town information
function displayTownInfo() {
    let townInfo = document.getElementById("town-info");
    townInfo.innerHTML = `
        <h2>${gameData.town.name}</h2>
        <p>Population: ${gameData.town.population}</p>
        <p>Gold: ${gameData.town.resources.gold}</p>
        <p>Food: ${gameData.town.resources.food}</p>
        <p>Water: ${gameData.town.resources.water}</p>
    `;
}

// Function to display player information
function displayPlayerInfo() {
    let playerInfo = document.getElementById("player-info");
    playerInfo.innerHTML = `
        <h2>${gameData.player.name}</h2>
        <p>Health: ${gameData.player.health}</p>
        <p>Money: ${gameData.player.money}</p>
    `;
}

// Function to explore the area
function explore() {
    // Simulate exploration
    let event = "You explored the area and found some resources.";
    gameData.eventsLog.push(event);
    updateEventsLog();
}

// Function to trade with other settlements
function trade() {
    // Simulate trading
    let event = "You traded with another settlement.";
    gameData.eventsLog.push(event);
    updateEventsLog();
}

// Function to rest and regain health
function rest() {
    // Simulate resting
    let event = "You rested and regained some health.";
    gameData.eventsLog.push(event);
    updateEventsLog();
}

// Function to visit the bank
function visitBank() {
    // Simulate visiting bank
    let event = "You visited the bank.";
    gameData.eventsLo
