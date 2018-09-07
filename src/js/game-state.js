
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
    }

    setGraphics(graphics){
        this.graphics = graphics;
    }

    loadLevel(level) {
        this.gameMap = level;
    }

    emitMovement(direction){}

}
