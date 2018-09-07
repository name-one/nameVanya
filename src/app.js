import loadGraphic from './js/graphic-loader';
import GameState from './js/game-state'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const gameState = new GameState(ctx, canvas);

ctx.fillStyle = '#5fa2b9';
ctx.fillRect(0, 0, canvas.width, canvas.height);

loadGraphic(ctx).then(graphic => {
    console.log(graphic)
    gameState.setGraphics(graphic);
    gameState.loadLevel('/assets/level.txt')
});
