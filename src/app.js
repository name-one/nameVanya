import loadGraphic from './js/graphic-loader';
import GameState from './js/game-state'
import loadImage from './js/image-loader';
import GameEventEmitter from './js/game-event-emitter';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const gameEventEmitter = new GameEventEmitter();
const loader = document.querySelector('.game__preloader');
loadImage('assets/canvas-bg.png').then(img => {
    const gameState = new GameState(ctx, canvas, img);
    loadGraphic(ctx).then(graphic => {
        console.log(graphic)
        gameState.setGraphics(graphic);
        gameState.loadLevel('/assets/level.txt');
        gameEventEmitter.subscribeOnEvents(gameState.onEvent.bind(gameState));
        setTimeout(() => {
            loader.classList.add('game__preloader_transparent');
            setTimeout(() => {
                loader.classList.add('game__preloader_hidden');
            }, 2000);
        }, 2000);
    });
})
