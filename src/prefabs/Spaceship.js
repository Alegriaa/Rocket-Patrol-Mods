// Spaceshipp prefrab

class Spaceship extends Phaser.GameObjects.Sprite {    // use phasers sprite
    constructor(scene, x, y, texture, frame, pointValue) {

        super(scene, x, y, texture, frame);


        scene.add.existing(this); // add object to existing scene, built into phaser
        this.points = pointValue;
       




    }

    update() {
        // move spaceship left 

        
        this.x -= game.settings.spaceshipSpeed;
       
        // wraparound screen bounds

        if (this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }

    reset() {
        this.x = game.config.width;
    }

}