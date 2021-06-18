import Phaser from 'phaser'

export default class PlayGame extends Phaser.Scene 
{
  constructor() {
    super('playGame')
  }

  create () {
    const width = this.scale.width
    const height = this.scale.height


    this.stars = this.add.tileSprite(0, 0, width, height, "stars").setOrigin(0,0).setScrollFactor(0);
    
    this.bird = this.add.sprite(400,400,'bird', 1)
    this.anims.create({
      key: 'flap',
      repeat: -1,
      frameRate: 8,
      frames: this.anims.generateFrameNumbers('bird', {start: 0, end: 2})
    });
    this.bird.play('flap')



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


    this.stars.tilePositionX = this.cam.scrollX * 5;
  }
}