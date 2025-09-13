/* Color Palette */
:root {
    --primary-purple: #4b0082; /* Indigo */
    --light-purple: #800080;   /* Classic Purple */
    --accent-purple: #8f00ff;  /* Electric Purple */
    --background-dark: #1a0033;
    --text-light: #f4e8ff;
    --card-background: #2b0054;
}

/* Base Styles */
body {
    font-family: Arial, sans-serif;
    background-color: var(--background-dark);
    color: var(--text-light);
    margin: 0;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Header */
.site-header {
    background-color: var(--primary-purple);
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--accent-purple);
}

.logo {
    font-size: 2rem;
    margin: 0;
    color: var(--text-light);
}

.site-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.site-nav a {
    color: var(--text-light);
    text-decoration: none;
    padding: 10px 15px;
    display: block;
    transition: background-color 0.3s ease;
}

.site-nav a:hover {
    background-color: var(--accent-purple);
}

/* Hero Section */
.hero-section {
    text-align: center;
    padding: 80px 20px;
    background: linear-gradient(rgba(75, 0, 130, 0.7), rgba(143, 0, 255, 0.3)), url('background.jpg') center center no-repeat;
    background-size: cover;
    margin-bottom: 40px;
}

.hero-title {
    font-size: 3.5rem;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-subtitle {
    font-size: 1.5rem;
    margin: 10px 0;
}

/* Games Section */
.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 30px;
    color: var(--light-purple);
}

.game-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}

.game-card {
    background-color: var(--card-background);
    border: 2px solid var(--light-purple);
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.game-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(143, 0, 255, 0.5);
}

.game-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    display: block;
}

.game-card h3 {
    font-size: 1.2rem;
    margin: 15px 0 10px;
}

.game-card button {
    background-color: var(--accent-purple);
    color: var(--text-light);
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 15px;
    transition: background-color 0.3s ease;
}

.game-card button:hover {
    background-color: #7200cc;
}

/* Footer */
.site-footer {
    text-align: center;
    padding: 20px;
    background-color: var(--primary-purple);
    margin-top: 40px;
}

/* Modal for Game Play */
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.8);
}

.modal-content {
    background-color: var(--background-dark);
    margin: 5% auto;
    padding: 20px;
    border: 1px solid var(--accent-purple);
    width: 80%;
    max-width: 900px;
    position: relative;
    border-radius: 10px;
}

.close-button {
    color: var(--text-light);
    font-size: 30px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
}

.game-iframe {
    width: 100%;
    height: 600px;
    border: none;
}

