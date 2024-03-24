document.addEventListener("DOMContentLoaded", function() {
    const optionButtons = document.getElementById('options');
    const startButton = document.getElementById('start-button');
    const playerNameInput = document.getElementById('player-name-input');
    const gameContainer = document.getElementById('game-container');
    const townInfo = document.getElementById('town-info');
    const playerInfo = document.getElementById('player-info');
    const eventsLog = document.getElementById('events-log');
    const exploreButton = document.getElementById('explore-button');
    const tradeButton = document.getElementById('trade-button');
    const restButton = document.getElementById('rest-button');
    const visitBankButton = document.getElementById('visit-bank-button');
    const visitMarketButton = document.getElementById('visit-market-button');

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

    startButton.addEventListener('click', function() {
        let playerName = playerNameInput.value.trim();
        if (playerName === "") {
            alert("Please enter your name.");
            return;
        }
        gameData.player.name = playerName;
        document.getElementById("start-screen").style.display = "none";
        gameContainer.style.display = "block";
        playBackgroundMusic();
        init();
    });

    function playBackgroundMusic() {
        let backgroundMusic = document.getElementById("background-music");
        backgroundMusic.volume = 0.3; // Adjust volume as needed
        backgroundMusic.play();
    }

    function init() {
        displayTownInfo();
        displayPlayerInfo();
    }

    function displayTownInfo() {
        townInfo.innerHTML = `
            <h2>${gameData.town.name}</h2>
            <p>Population: ${gameData.town.population}</p>
            <p>Gold: ${gameData.town.resources.gold}</p>
            <p>Food: ${gameData.town.resources.food}</p>
            <p>Water: ${gameData.town.resources.water}</p>
        `;
    }

    function displayPlayerInfo() {
        playerInfo.innerHTML = `
            <h2>${gameData.player.name}</h2>
            <p>Health: ${gameData.player.health}</p>
            <p>Money: ${gameData.player.money}</p>
        `;
    }

    exploreButton.addEventListener('click', function() {
        let event = "You explored the area and found some resources.";
        gameData.eventsLog.push(event);
        updateEventsLog();
    });

    tradeButton.addEventListener('click', function() {
        let event = "You traded with another settlement.";
        gameData.eventsLog.push(event);
        updateEventsLog();
    });

    restButton.addEventListener('click', function() {
        let event = "You rested and regained some health.";
        gameData.eventsLog.push(event);
        updateEventsLog();
    });

    visitBankButton.addEventListener('click', function() {
        let event = "You visited the bank.";
        gameData.eventsLog.push(event);
        updateEventsLog();
    });

    visitMarketButton.addEventListener('click', function() {
        let event = "You visited the market.";
        gameData.eventsLog.push(event);
        updateEventsLog();
    });

    function updateEventsLog() {
        eventsLog.innerHTML = "<h3>Events Log</h3>";
        gameData.eventsLog.forEach(event => {
            eventsLog.innerHTML += `<p>${event}</p>`;
        });
    }
});
