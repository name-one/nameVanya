import imgLoad from './js/image-loader';
import Tile from './js/tile';
import BgTile from './js/bg-tile'
import loadMap from './js/map-loader';
import genereteMap from './js/generate-map';
import loadGraphic from './js/graphic-loader';
// const tilesUrl = 'https://forum.unity.com/attachments/nes-super-mario-bros-tile-set-png.150062/';
const tile = '/assets/path-rotated-t.png'
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#5fa2b9';
ctx.fillRect(0, 0, canvas.width, canvas.height )
// Promise.all([
//     imgLoad(tile),
//     loadMap('assets/pathes/level.txt')
// ]).then(([img, textMap]) => {
//     //const wall = new Tile(ctx, img, 16, 16, 16, 16, 40, 40);
//     const road = new Tile(ctx, img, 48, 32, 16, 16, 40, 40);
//     const wall = new BgTile(ctx, img, 64, 64)
//     wall.draw(0,0)
//     // genereteMap(textMap, {
//     //     wall,
//     //     road
//     // });
// })

loadGraphic(ctx).then(graphic => {
    console.log(graphic)
    graphic.pathes.forEach((tile, idx) => {
        tile.draw(idx, 0);
    })
});
