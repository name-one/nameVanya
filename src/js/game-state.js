
export default class GameState{
    constructor(ctx, canvas) {
        this.collectedBugs=0;
        this.uncollectedBugs=0;
        this.gameTime='';
        this.coffeeCups=0;
        this.isWin=false;
        this.isLose=false;
        this.graphics=null;
        this.gameMap = [];
        this.ctx = ctx;
        this.canvas = canvas;
        this.textMap;
        this.tileStore = new Map();
    }

    initTilesHash() {
        const keys = [327, 485, 325, 455, 463, 461, 487, 357, 453, 333, 365, 335, 359, 493, 367];
        keys.forEach((item, idx) => {
            this.tileStore.set(item, this.graphics.pathes[idx]);
        });
    }
    setGraphics(graphics){
        this.graphics = graphics;
        this.initTilesHash();
    }

    loadLevel(txtFile) {
        fetch(txtFile)
        .then(response => response.text())
        .then(text => {
            this.textMap = text;
            this.renderLevel(text.split('\n').map(row => row.split('')));
        })
    }

    renderLevel(level) {
        level.forEach((row, rowIdx) => {
            row.forEach((cell, cellIdx) => {
                switch(cell) {
                    case '-' :
                        //this.graphics.pathes[0].draw(cellIdx, rowIdx);
                        let hashIdx = this.encode(level,cellIdx , rowIdx);
                        console.log(hashIdx)

                        if (!this.tileStore.get(hashIdx)) {
                            hashIdx |= 325;
                        }
                        if (!this.tileStore.get(hashIdx)) {
                            debugger
                            return;
                        }
                        this.tileStore.get(hashIdx).draw(cellIdx, rowIdx)
                        break;
                    default:
                        break;
                }
            });
        })
    }

    encode(level, x, y) {
        let res = 0;
        //-1 row
        res |= (x === 0 || y === 0 || level[y - 1][x - 1] === '#') ? 1 : 0;
        res <<= 1;

        res |= (y === 0 || level[y - 1][x] === '#') ? 1 : 0;
        res <<= 1;

        res |= (y === 0 || x === level[y - 1].length - 1 || level[y - 1][x + 1] === '#') ? 1 : 0;
        res <<= 1;

        // 0 row
        res |= (x === 0 || level[y][x - 1] === '#') ? 1 : 0;
        res <<= 1;

        res |= (level[y][x] === '#') ? 1 : 0;
        res <<= 1;

        res |= (x === level[y].length - 1 || level[y][x + 1] === '#') ? 1 : 0;
        res <<= 1;

        // +1 row
        res |= (x === 0 || y === level.length - 1 || level[y + 1][x - 1] === '#') ? 1 : 0;
        res <<= 1;

        res |= (y === level.length - 1 || level[y + 1][x] === '#') ? 1 : 0;
        res <<= 1;

        res |= (y === level.length - 1 || x === level[y + 1].length - 1 || level[y + 1][x + 1] === '#') ? 1 : 0;
        return res;
    }
    emitMovement(direction){}
}
