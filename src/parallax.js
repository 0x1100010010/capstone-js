import Phaser from 'phaser'

const createParallax = (scene, scale, count, texture, scrollFactor, originX, originY) => {
  let x=0
  let im
  for (let i=0; i<count ; i++) {
    im = scene.add.image(x,scene.scale.height, texture).setOrigin(originX,originY).setScale(scale).setScrollFactor(scrollFactor)
    x+=im.width*scale
  }
  return im
}

export default class Parallax extends Phaser.Scene 
{
  constructor() {
    super('parallax')
  }

  preload() {
    this.load.setBaseURL('../src/assets/images');
    this.load.image('stars', 'stars.png')
    this.load.image('sky', 'sky.png')
    this.load.image('mountains', 'mountains.png')
    this.load.image('moon', 'moon.png')
    this.load.image('weed', 'weed.png')
    this.load.image('fog', 'fog.png')
    this.load.image('stars', 'stars.png')
    this.load.image('trees', 'trees.png')
    this.load.image('clouds', 'clouds.png')
    this.load.image('ground', 'ground.png')
    this.load.image('plant', 'plant.png')
    this.load.spritesheet('bird', 'bird.png', { frameWidth: 34, frameHeight: 24 });

    this.cursors = this.input.keyboard.createCursorKeys()
  }

  create () {
    const width = this.scale.width
    const height = this.scale.height
    const stageLength = 300
    // createParallax(scene, scale, count, texture, scrollFactor)

    // this.add.image(width*0.5, height*0.5, 'stars').setScrollFactor(0.2);
    createParallax(this, 0.7, stageLength, 'stars',0.2, 0,1.2)
    this.add.image(0,0, 'moon').setScale(0.5).setOrigin(-0.5,0).setScrollFactor(0).setTint(0xF4F3FF);
    
    // this.physics.add.image(400,100, 'moon').setVelocity(1,1).setBounce(1,1).setCollideWorldBounds(true)
    
    // this.add.image(0,0, 'clouds').setScale(.6).setOrigin(-0.1,0).setScrollFactor(.4);
    createParallax(this, 0.6, stageLength, 'clouds',0.4, 0,1.7)

    // this.add.image(0,height, 'weed').setOrigin(0,1).setScale(.7).setScrollFactor(.6)
    createParallax(this, 0.6, stageLength, 'weed',0.6, 0,1.1)

    // this.add.image(0,height, 'trees').setOrigin(0,1.5).setScale(.4).setScrollFactor(.8)
    createParallax(this, 0.4, stageLength, 'trees',0.8, 0,1.5)

    let bird = this.add.sprite(400,400,'bird', 1)
    this.anims.create({
      key: 'flap',
      repeat: -1,
      frameRate: 8,
      frames: this.anims.generateFrameNumbers('bird', {start: 0, end: 2})
    });
    bird.play('flap')
    
    // this.add.image(0,height, 'ground').setScale(.8).setOrigin(0,1).setScrollFactor(1)
    createParallax(this, 0.7, stageLength, 'ground',1, 0,1)

    // this.add.image(0,height, 'fog').setScale(1).setOrigin(0,1).setScrollFactor(1.2)
    createParallax(this, 1, stageLength, 'fog',1.2, 0,1)
    
    // this.add.image(0,height, 'plant').setScale(1).setOrigin(0,1).setScrollFactor(1.4)
    createParallax(this, .7, stageLength, 'plant',1.4, 0,1)

    // let bird = this.add.sprite(200,5,'bird');
    // this.titleGroup.add(bird);



    this.cameras.main.setBounds(0,0,width*width,height)
  }

  update () {
    const cam = this.cameras.main
    const speed = 5
    if (this.cursors.left.isDown)  {
      cam.scrollX -= speed;
    } else if (this.cursors.right.isDown) {
      cam.scrollX += speed;
    }
  }
}