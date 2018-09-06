import imgLoad from './js/image-loader';
import Tile from './js/tile';
import loadMap from './js/map-loader';
import genereteMap from './js/generate-map';
const tilesUrl = 'https://forum.unity.com/attachments/nes-super-mario-bros-tile-set-png.150062/';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillRect(0, 0, canvas.width, canvas.height )
Promise.all([
    imgLoad(tilesUrl),
    loadMap('assets/level.txt')
]).then(([img, textMap]) => {
    const wall = new Tile(ctx, img, 16, 16, 16, 16, 40, 40);
    const road = new Tile(ctx, img, 48, 32, 16, 16, 40, 40);
    genereteMap(textMap, {
        wall,
        road
    });
})

