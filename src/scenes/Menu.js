class Menu extends Phaser.Scene {
    constructor(){
        super ("menuScene");
    }

    create(){
        

        // displays menu scene
        // 0,0 is upper left 
        this.add.text(20, 20, "Rocket Patrol Menu");
        
        // launches next scene
        this.scene.start("playScene")
       

    }


}