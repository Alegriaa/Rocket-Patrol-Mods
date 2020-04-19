class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // loading audio in menu so that it can be used anywhere in the game
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.audio('backgroundMusic', './assets/rocketPatrolMusic.wav');
    }

    create() {

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0

        }

        let menuText = {
            fontFamily: 'Courier',
            fontSize: '24px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0

        }

        // show text on menu
        let centerX = game.config.width / 2;
        let centerY = game.config.height / 2;
        let textSpacer = 64;

        this.add.text(centerX, centerY - textSpacer * 3, 'ROCKET PATROL Two Player', menuConfig).setOrigin(0.5);
        
        this.add.text(centerX, centerY - textSpacer * 2, 'Player 1: ', menuText).setOrigin(0.5);
        this.add.text(centerX, centerY - textSpacer, 'Use (Z) to move Left & (X) to move Right', menuText).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Use (C) to Fire', menuText).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer, ' Play 2: ', menuText).setOrigin(0.5);
        
        this.add.text(centerX, centerY + textSpacer * 2, ' Play 2 Use <-> arrows to move & (F) to Fire', menuText).setOrigin(0.5);
        menuText.backgroundColor = '#00FF00';
        menuText.color = '#000';
        this.add.text(centerX, centerY + textSpacer * 3, 'Select (E) for Easy Mode or (H) for Hard', menuText).setOrigin(0.5);
        //define keys for difficulty selection
        keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyE)) {
            //  easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyH)) {
            // this is for hard mode

            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene")
        }
    }


} 