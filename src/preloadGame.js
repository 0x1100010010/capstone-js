import Phaser from 'phaser'
import PlayGame from './playGame'

export default class preloadGame extends Phaser.Scene 
{
  constructor() {
    super('PreloadGame')
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
  }

  create(){
    this.scene.start("playGame");
  }
}