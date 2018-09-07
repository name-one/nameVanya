
export default class GameState{
    constructor(){
        this.collectedBugs=0;
        this.uncollectedBugs=0;
        this.gameTime='';
        this.coffeeCups=0;
        this.isWin=false;
        this.isLose=false;
        this.graphics=null;
    }

    setGraphics(graphis){
        this.graphics = graphics;
    }
    emitMovement(direction){}

    gameLifeCycle = new GameLifeCycle()

}

class GameLifeCycle{
    constructor(){}
    render(){}
    calculate(){}
}