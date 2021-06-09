import Phaser from 'phaser';
import Parallax from './parallax';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: false
        }
    },
    // scene: {
    //     preload, create, Parallax, update
    // }
    scene: [Parallax]
};

var game = new Phaser.Game(config);

function preload ()
{
    // this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', '../src/assets/images/background.png');
    this.load.image('logo', 'http://labs.phaser.io/assets/sprites/phaser3-logo.png');
    this.load.image('red', 'http://labs.phaser.io/assets/particles/rising-smoke.png');
}

function create ()
{
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 10,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 100);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
}

function update ()
{
}