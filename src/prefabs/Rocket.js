// Rocket prefab

class Rocket extends Phaser.GameObjects.Sprite {    // use phasers sprite
    constructor(scene, x, y, texture, frame){

        super(scene, x, y, texture, frame);

        
        scene.add.existing(this); // add object to existing scene, built into phaser
            this.isFiring = false; // tracking rocket's firing status



    }

    update(){
        if(!this.isFiring){   // left / right movement
            if(keyLEFT.isDown && this.x >= 47){
                this.x -= 2;
            } else if (keyRIGHT.isDown && this.x <= 592){
                this.x += 2;
            }
        }

        if(Phaser.Input.Keyboard.JustDown(keyF)){
            this.isFiring = true;
        }

        if(this.isFiring && this.y >= 108){
            this.y -= 2;
        }

        if(this.y <= 108){
            this.isFiring = false;
            this.y = 431;
        }

    }

}