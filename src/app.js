import loadGraphic from './js/graphic-loader';
import GameState from './js/game-state'
import loadImage from './js/image-loader';
import GameEventEmitter from './js/game-event-emitter';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const gameEventEmitter = new GameEventEmitter();
loadImage('assets/canvas-bg.png').then(img => {
    const gameState = new GameState(ctx, canvas, img);
    loadGraphic(ctx).then(graphic => {
        console.log(graphic)
        gameState.setGraphics(graphic);
        gameState.loadLevel('/assets/level.txt');
        //gameEventEmitter.subscribeOnEvents(()
    });
})
