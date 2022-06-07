class Title extends Phaser.Scene {
    constructor() {
        super("titleScene");
    }

    preload() {
        // load assets
        this.load.path = "./assets/";

        // load JSON (dialog)
        this.load.json('day1', 'json/day1.json');
        this.load.json('day2', 'json/day2.json');
        this.load.json('day3', 'json/day3.json');
        this.load.json('day4', 'json/day4.json');
        this.load.json('FinalDay', 'json/Final Day.json');
        this.load.json('macbeth', 'json/macbeth.json');

        // load images
        this.load.image('dialogbox', 'img/DBOX.png');
        this.load.image('homer', 'img/homer.png');
        this.load.image('minerva', 'img/minerva.png');
        this.load.image('jove', 'img/jove.png');
        this.load.image('neptune', 'img/neptune.png');
        this.load.image('macbeth', 'img/Joker.png');
        this.load.image('banquo', 'img/xiao.png');
        this.load.image('fleance', 'img/shulk.png');
 
        this.load.image('Andi_Angry', 'img/Dialog/Angry.png');
        this.load.image('Andi_Sad', 'img/Dialog/Sad.png');
        this.load.image('Andi_Happy', 'img/Dialog/Smile.png');
        this.load.image('Andi_Laugh', 'img/Dialog/Laugh.png');
        this.load.image('Dialog_Box', 'img/Dialog/Speech-Bubble.png');
        this.load.image('Phone_Border', 'img/Dialog/Border.png');
        this.load.image('Hawaii', 'img/Dialog/Hawaii.png');
        
        this.load.image('Assembly_Tutorial', 'img/Tutorial/Assembly.jpeg');
        this.load.image('Color_Tutorial', 'img/Tutorial/Color_Tutorial.jpg');
        this.load.image('Door_Tutorial', 'img/Tutorial/Door_Tutorial.jpeg');
        this.load.image('Drag_Tutorial', 'img/Tutorial/Drag_Part.jpeg');
        this.load.image('Inv_Tutorial', 'img/Tutorial/Inv_Tutorial.jpeg');
        this.load.image('Order_Tutorial', 'img/Tutorial/Order_Tutorial.jpeg');
        this.load.image('PEN_Tutorial', 'img/Tutorial/PEN_Tutorial.jpeg');
        this.load.image('Sell_Tutorial', 'img/Tutorial/Sell_Tutorial.jpeg');
        this.load.image('Storage_Tutorial', 'img/Tutorial/Storage_Tutorial.jpeg');
        this.load.image('WS_Tutorial', 'img/Tutorial/WSTutorial.jpg');
        

        // load bitmap font
        this.load.bitmapFont('gem_font', 'font/gem.png', 'font/gem.xml');
    }

    create() {
        // add title text
        this.add.bitmapText(centerX, centerY - 32, 'gem_font', 'THE ODYSSEY', 32).setOrigin(0.5);
        this.add.bitmapText(centerX, centerY, 'gem_font', 'Press SPACE to start', 16).setOrigin(0.5);

        // create input
        cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        // wait for player input
        if(Phaser.Input.Keyboard.JustDown(cursors.space)) {
            this.scene.start("Day1Scene");
            
        }
    }
}