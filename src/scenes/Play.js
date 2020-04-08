class Play extends Phaser.Scene {
    constructor(){
        super ("playScene");
    }

    preload() {
        // load images/tile sprite
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
    }

    create() {
        // place tile sprite
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0,0);

        // white rectangle borders
        this.add.rectangle(5, 5, 630, 32,  0xFACADE).setOrigin(0,0);
        this.add.rectangle(5, 443, 630, 32,  0xFACADE).setOrigin(0,0);
        this.add.rectangle(5, 5, 32, 455,  0xFACADE).setOrigin(0,0);
        this.add.rectangle(603, 5, 32, 455,  0xFACADE).setOrigin(0,0);

        // green UI background
        
        this.add.rectangle(37, 42, 566, 64, 0x00FF00).setOrigin(0,0);
        this.add.text(20, 20, "Rocket Patrol Play");
        // 0,0 is upper left 

    }

    update() {
        // scroll satrfield every frame
        this.starfield.tilePositionX -= 4; 


    }


}