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
        // first thing you add in create will be the last thing rendered 
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

        // add spaceship
        this.ship01 = new Spaceship(this, game.config.width + 192, 132, 'spaceship', 0, 30).setOrigin(0,0);
        this.ship02 = new Spaceship(this, game.config.width + 96, 89, 'spaceship', 0, 20).setOrigin(0,0);
        this.ship03 = new Spaceship(this, game.config.width, 120, 'spaceship', 0, 10).setOrigin(0,0);

        // add rocket (p1)
        // constructor(scene, x, y, texture, frame)
        this.p1Rocket = new Rocket(this, game.config.width/2, 431, 'rocket')
        .setScale(0.5, 0.5);

        //define keyboard keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }

    update() {
        // scroll satrfield every frame
        this.starfield.tilePositionX -= 4; 

        this.p1Rocket.update(); // updating rocket

        this.ship01.update();
        this.ship02.update();
        this.ship03.update();


    }


}