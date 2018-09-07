
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
    }

    setGraphics(graphics){
        this.graphics = graphics;
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
                        this.graphics.pathes[0].draw(cellIdx, rowIdx);
                        break;
                    default:
                        break;
                }
            });
        })
    }

    emitMovement(direction){}

}
