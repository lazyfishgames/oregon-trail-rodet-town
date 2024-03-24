document.addEventListener("DOMContentLoaded", function() {
    // Game elements
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

    // Background music
    const backgroundMusicVideoId = 'UKTy-ivDUWc'; // Replace with your YouTube video ID

    // Game data
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

    // Event listener for start button
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

    // Function to play background music
    function playBackgroundMusic() {
        // Load YouTube Player API asynchronously
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // YouTube API callbacks
    var audioPlayer;

    window.onYouTubeIframeAPIReady = function() {
        audioPlayer = new YT.Player('background-music', {
            height: '0',
            width: '0',
            videoId: backgroundMusicVideoId,
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

    function onAudioPlayerReady(event) {
        // Audio player is ready, it will automatically start playing
    }

    function onAudioPlayerStateChange(event) {
        // You can do something when the audio player's state changes
    }

    // Initialize the game
    function init() {
        displayTownInfo();
        displayPlayerInfo();
    }

    // Display town information
    function displayTownInfo() {
        townInfo.innerHTML = `
            <h2>${gameData.town.name}</h2>
            <p>Population: ${gameData.town.population}</p>
            <p>Gold: ${gameData.town.resources.gold}</p>
            <p>Food: ${gameData.town.resources.food}</p>
            <p>Water: ${gameData.town.resources.water}</p>
        `;
    }

    // Display player information
    function displayPlayerInfo() {
        playerInfo.innerHTML = `
            <h2>${gameData.player.name}</h2>
            <p>Health: ${gameData.player.health}</p>
            <p>Money: ${gameData.player.money}</p>
        `;
    }

    // Event listeners for game actions
    exploreButton.addEventListener('click', function() {
        logEvent("You are exploring...");
    });

    tradeButton.addEventListener('click', function() {
        logEvent("You are trading...");
    });

    restButton.addEventListener('click', function() {
        logEvent("You are resting...");
    });

    visitBankButton.addEventListener('click', function() {
        logEvent("You are visiting the bank...");
    });

    visitMarketButton.addEventListener('click', function() {
        logEvent("You are visiting the market...");
    });

    // Log an event to the events log
    function logEvent(eventMessage) {
        eventsLog.innerHTML += `<p>${eventMessage}</p>`;
    }
});
