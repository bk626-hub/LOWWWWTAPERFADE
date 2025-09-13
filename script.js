function loadGame(gameUrl) {
    const gameContainer = document.getElementById('game-container');
    const gameList = document.getElementById('game-list');
    const header = document.querySelector('header');
    const gameFrame = document.getElementById('game-frame');
    const loadingScreen = document.getElementById('loading-screen');

    // Show the loading screen and game container
    loadingScreen.style.display = 'block';
    gameContainer.style.display = 'block';
    gameList.style.display = 'none';
    header.style.display = 'none';
    
    // Set the game URL and hide the loading screen once it's loaded
    gameFrame.src = gameUrl;
    gameFrame.onload = function() {
        loadingScreen.style.display = 'none';
    };
}

function goBack() {
    const gameContainer = document.getElementById('game-container');
    const gameList = document.getElementById('game-list');
    const header = document.querySelector('header');
    const gameFrame = document.getElementById('game-frame');
    const loadingScreen = document.getElementById('loading-screen');

    // Clear the iframe source and hide the game container
    gameFrame.src = '';
    gameContainer.style.display = 'none';

    // Show the game list and header
    gameList.style.display = 'flex';
    header.style.display = 'block';

    // Ensure the loading screen is hidden when returning to the menu
    loadingScreen.style.display = 'none';
}
