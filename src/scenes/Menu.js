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
        this.load.image('universe', 'assets/universe.png')
    }

    create() {
        
        this.sound.play('backgroundMusic'); // playing my music
        // new copyright free background
        this.universe = this.add.tileSprite(0, 0, 640, 480, 'universe').setOrigin(0, 0);
        

        let menuConfig = {
            fontFamily: 'Impact', // changed the font
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
            fontFamily: 'Impact',
            fontSize: '24px',
           
            color: '#A74242',
            backgroundColor: '#500303',
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

        this.add.text(centerX, centerY - textSpacer * 3, 'ROCKET PATROL ', menuConfig).setOrigin(0.5);
       
       // Added more information 
        this.add.text(centerX, centerY - textSpacer * 2, 'PLAYER 1: ', menuText).setOrigin(0.5);
        this.add.text(centerX, centerY - textSpacer, 'USE ( Z ) TO MOVE LEFT & ( X ) TO MOVE RIGHT', menuText).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Use ( C ) to Fire', menuText).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer, ' PLAYER 2: ', menuText).setOrigin(0.5);
        
        this.add.text(centerX, centerY + textSpacer * 2, 'USE <-> ARROWS TO MOVE & ( L ) TO FIRE', menuText).setOrigin(0.5);
        
        this.add.text(centerX, centerY + textSpacer * 3, 'SELECT ( E ) FOR EASY MODE OR ( H ) FOR HARD MODE', menuConfig).setOrigin(0.5);
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
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene")
        }
    }


} 