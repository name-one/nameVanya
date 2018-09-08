
export default class GameState{
    constructor(ctx, canvas, bg) {
        this.collectedBugs=0;
        this.uncollectedBugs=3;
        this.gameTime='';
        this.coffeeCups=1;
        this.isWin=false;
        this.isLose=false;
        this.graphics=null;
        this.gameMap = [];
        this.ctx = ctx;
        this.canvas = canvas;
        this.textMap;
        this.tileStore = new Map();
        this.bg = bg;
        this.splittedMap = null
        this.dragonPositionX=0;
        this.dragonPositionY=0;
    }

    MoveDragonDown(){
        if(!this.isWall(this.splittedMap,this.dragonPositionX,this.dragonPositionY+1))
        {
        this.splittedMap[this.dragonPositionY][this.dragonPositionX] = '-';
        this.dragonPositionY++;
        this.splittedMap[this.dragonPositionY][this.dragonPositionX] = 'D';
        this.renderLevel(this.splittedMap);
        }
    }

    MoveDragonUp(){
        if(!this.isWall(this.splittedMap,this.dragonPositionX,this.dragonPositionY-1))
        {
        this.splittedMap[this.dragonPositionY][this.dragonPositionX] = '-';
        this.dragonPositionY--;
        this.splittedMap[this.dragonPositionY][this.dragonPositionX] = 'D';
        this.renderLevel(this.splittedMap);
        }
    }

    MoveDragonLeft(){
        if(!this.isWall(this.splittedMap,this.dragonPositionX+1,this.dragonPositionY))
        {
        this.splittedMap[this.dragonPositionY][this.dragonPositionX] = '-';
        this.dragonPositionX++;
        this.splittedMap[this.dragonPositionY][this.dragonPositionX] = 'D';
        this.renderLevel(this.splittedMap);
        }
    }

    MoveDragonRight(){
        if(!this.isWall(this.splittedMap,this.dragonPositionX-1,this.dragonPositionY))
        {
        this.splittedMap[this.dragonPositionY][this.dragonPositionX] = '-';
        this.dragonPositionX--;
        this.splittedMap[this.dragonPositionY][this.dragonPositionX] = 'D';
        this.renderLevel(this.splittedMap);
        }
    }

    isWall(gameMap,x,y){
        if(gameMap[y][x] == '#') return true
        else return false
    }

    isBug(gameMap,x,y){
        if(gameMap[y][x] == '*') return true
        else return false
    }

    isCoffee(gameMap,x,y){
        if(gameMap[y][x] == '@') return true
        else return false
    }

    onEvent(eventType){
        switch(eventType){

        }
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
            this.splittedMap = text.split('\n').map(row => row.split(''));
            this.renderLevel(this.splittedMap);
        })
        .then((data)=>{
            this.MoveDragonDown();
        })
    }

    renderLevel(level) {

        level.forEach((row, rowIdx) => {
            row.forEach((cell, cellIdx) => {
                this.ctx.drawImage(this.bg, cellIdx * 64, rowIdx * 64, 64, 64);
                if(cell !== '#') {
                    let hashIdx = this.encode(level,cellIdx , rowIdx);
                    if (!this.tileStore.get(hashIdx)) {
                        hashIdx |= 325;
                    }
                    if (!this.tileStore.get(hashIdx)) {
                        return;
                    }
                    this.tileStore.get(hashIdx).draw(cellIdx, rowIdx)
                    if (cell === '*') {
                        this.graphics.bugs[Math.round(Math.random() * 3)].draw(cellIdx * 64 + 16
                            , rowIdx * 64 + 16, 1)
                    }

                    if (cell === '@') {
                        this.graphics.coffee.draw(cellIdx * 64 + 16
                            , rowIdx * 64 + 20, 1)
                    }
                    if(cell === 'D') {
                        this.graphics.dragon[1].draw(cellIdx * 64 + 14, rowIdx * 64 + 2, 1)
                    }
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
