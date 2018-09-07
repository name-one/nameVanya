import Tile from './tile';
const tileSize = 64;
export default class BgTile extends Tile {
    constructor(context, img) {
        super(context, img, 0, 0, 64, 64, tileSize, tileSize);
    }
}