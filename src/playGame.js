import Phaser from 'phaser'

export default class PlayGame extends Phaser.Scene 
{
  constructor() {
    super('playGame')
  }

  create () {
    const width = this.scale.width
    const height = this.scale.height


    this.stars = this.add.tileSprite(0, 0, width, height, "stars").setOrigin(0,0).setScrollFactor(0).setTileScale(.5);
    this.add.image(0,0, 'moon').setScale(0.5).setOrigin(-0.1,0).setScrollFactor(0).setTint(0xF4F3FF);
    this.clouds = this.add.tileSprite(0, 0, width, height, "clouds").setOrigin(0,0).setScrollFactor(0).setTileScale(.5);
    this.weed = this.add.tileSprite(0, 0, width, height, "weed").setOrigin(0,-.3).setScrollFactor(0).setTileScale(.7);
    this.trees = this.add.tileSprite(0, 0, width, height, "trees").setOrigin(0,-.5).setScrollFactor(0).setTileScale(.5);

    this.bird = this.add.sprite(400,400,'bird', 1)
    this.anims.create({
      key: 'flap',
      repeat: -1,
      frameRate: 8,
      frames: this.anims.generateFrameNumbers('bird', {start: 0, end: 2})
    });
    this.bird.play('flap')

    this.ground = this.add.tileSprite(0, 0, width, height*.4, "ground").setOrigin(0,-2).setScrollFactor(0);
    this.fog = this.add.tileSprite(0, 0, width, height, "fog").setOrigin(0,-.3).setScrollFactor(0).setTileScale(.7);
    this.plant = this.add.tileSprite(0, 0, width, height*.2, "plant").setOrigin(0,-4).setScrollFactor(0).setTileScale(.7);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.cam = this.cameras.main;
    this.cam.startFollow(this.bird);
  }

  update () {
    let speed=5
    if (this.cursors.left.isDown) {
      this.bird.x -= speed;
      this.bird.scaleX = -1;

    } else if (this.cursors.right.isDown) {
      this.bird.x += speed;
      this.bird.scaleX = 1;
    }


    this.stars.tilePositionX = this.cam.scrollX * .2;
    this.clouds.tilePositionX = this.cam.scrollX * .4;
    this.weed.tilePositionX = this.cam.scrollX * .5;
    this.trees.tilePositionX = this.cam.scrollX * .9;
    this.ground.tilePositionX = this.cam.scrollX * .7;
    this.fog.tilePositionX = this.cam.scrollX * .8;
    this.plant.tilePositionX = this.cam.scrollX * .9;
  }
}