// Brian Pereira Alegria
// Implement a simultaneous two-player mode (50)
// Create a new spaceship type (w/ new artwork) that's smaller, 
// moves faster, and is worth more points (25)
// Create a new title screen (15)
// Add your own (copyright-free) background music to the Play scene (10)
// background music was produced by me 



let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],  // order is important 
};

let game = new Phaser.Game(config);

// reserve some keyboard variables

let keyF, keyLEFT, keyRIGHT, keyZ, keyX, keyC, keyE, keyH, keyL, keySPACE;

// define game settings

game.settings = {
    spaceshipSpeed: 3,
    evilshipSpeed: 300,
    gameTimer: 60000
}