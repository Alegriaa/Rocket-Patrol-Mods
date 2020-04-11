// Rocket prefab

class Rocket extends Phaser.GameObjects.Sprite {    // use phasers sprite
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // add object to existing scene, built into phaser
        this.isFiring = false; // tracking rocket's firing status
        this.sfxRocket = scene.sound.add('sfx_rocket'); // adding rocket sfx



    }

    update() {
        if (!this.isFiring) {   // left / right movement
            if (keyLEFT.isDown && this.x >= 47) {
                this.x -= 2;
            } else if (keyRIGHT.isDown && this.x <= 592) {
                this.x += 2;
            }
        }

        if (Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play(); // play sfx
        }

        if (this.isFiring && this.y >= 108) {
            this.y -= 2;
        }

        if (this.y <= 108) {
            this.reset();
        }

    }

    reset() {
        this.isFiring = false;
        this.y = 431;

    }

}