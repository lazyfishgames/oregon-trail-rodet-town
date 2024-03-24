document.addEventListener("DOMContentLoaded", function() { 
    //ids for game
    const optionButtons = document.getElementById('options');
    const startButton = document.getElementById('start-button');
    const playerNameInput = document.getElementById('player-name-input');
    const gameContainer = document.getElementById('game-container');
    const mainContent = document.getElementById('main-content');
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
        var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTube Video ID
var videoId = 'https://youtu.be/UKTy-ivDUWc?si=m0B2EQQAINktdY6T'; // Replace with your YouTube video ID

// YouTube Audio Player
var audioPlayer;

// Function called when YouTube API is ready
function onYouTubeIframeAPIReady() {
    audioPlayer = new YT.Player('audioPlayer', {
        height: '0',
        width: '0',
        videoId: videoId,
        playerVars: {
            autoplay: 1,
            loop: 1,
            mute: 1,
            controls: 0 // Remove controls
        },
        events: {
            'onReady': onAudioPlayerReady,
            'onStateChange': onAudioPlayerStateChange
        }
    });
}

// Function called when audio player is ready
function onAudioPlayerReady(event) {
    // Audio player is ready, it will automatically start playing
}

// Function called when audio player's state changes
function onAudioPlayerStateChange(event) {
    // You can do something when the audio player's state changes
}
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

     const gameContainer = document.getElementById('game-container');
    const eventsLog = document.getElementById('events-log');
    const sidePanel = document.getElementById('side-panel');

    let currentPage = 'game';

    exploreButton.addEventListener('click', function() {
        currentPage = 'explore';
        displayPage();
    });

    tradeButton.addEventListener('click', function() {
        currentPage = 'trade';
        displayPage();
    });

    restButton.addEventListener('click', function() {
        currentPage = 'rest';
        displayPage();
    });

    visitBankButton.addEventListener('click', function() {
        currentPage = 'bank';
        displayPage();
    });

    visitMarketButton.addEventListener('click', function() {
        currentPage = 'market';
        displayPage();
    });

    function displayPage() {
        gameContainer.style.display = 'none';
        sidePanel.style.display = 'block';
        eventsLog.innerHTML = "<h3>Events Log</h3>";
        switch (currentPage) {
            case 'explore':
                eventsLog.innerHTML += "<p>You are exploring...</p>";
                break;
            case 'trade':
                eventsLog.innerHTML += "<p>You are trading...</p>";
                break;
            case 'rest':
                eventsLog.innerHTML += "<p>You are resting...</p>";
                break;
            case 'bank':
                eventsLog.innerHTML += "<p>You are visiting the bank...</p>";
                break;
            case 'market':
                eventsLog.innerHTML += "<p>You are visiting the market...</p>";
                break;
            default:
                gameContainer.style.display = 'block';
                sidePanel.style.display = 'none';
                break;
        }
    }
});
