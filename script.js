function loadGame(gameUrl) {
    const gameContainer = document.getElementById('game-container');
    const gameList = document.getElementById('game-list');
    const header = document.querySelector('header');
    const gameFrame = document.getElementById('game-frame');

    gameFrame.src = gameUrl;
    gameList.style.display = 'none';
    header.style.display = 'none';
    gameContainer.style.display = 'block';
}

function goBack() {
    const gameContainer = document.getElementById('game-container');
    const gameList = document.getElementById('game-list');
    const header = document.querySelector('header');
    const gameFrame = document.getElementById('game-frame');

    gameFrame.src = ''; // Clear the iframe
    gameContainer.style.display = 'none';
    gameList.style.display = 'flex';
    header.style.display = 'block';
}

