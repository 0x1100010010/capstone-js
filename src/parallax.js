import Phaser from 'phaser'

export default class Parallax extends Phaser.Scene 
{
  constructor() {
    super('parallax')
  }

  preload() {
    this.load.setBaseURL('../src/assets/images');
    this.load.image('stars', 'stars.png')
  }

  create () {
    const width = this.scale.width
    const height = this.scale.height
    this.add.image(width*0.5, height*0.5, 'stars')
  }
}