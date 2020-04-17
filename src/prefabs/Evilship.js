
class Evilship extends Phaser.GameObjects.Sprite {    // use phasers sprite
    constructor(scene, x, y, texture, frame, pointValue) {

        super(scene, x, y, texture, frame);


        scene.add.existing(this); // add object to existing scene, built into phaser
        this.points = pointValue;




    }

    update() {
        // move spaceship left 
        


        
        this.x -= game.settings.spaceshipSpeed + 0.7; // making the new evil ship faster
       
        // wraparound screen bounds

        if (this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }

    reset() {
        this.x = game.config.width;
    }

}