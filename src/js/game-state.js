const gameState =
{
    collectedBugs:0,
    uncollectedBugs:0,
    gameTime:'',
    coffeeCups:0,
    setGraphics:()=>{},
    emitMovement:(direction)=>{},
    isWin:false,
    isLose:false
}

export default class GameState{
    constructor(){
        this.collectedBugs=0,
        this.uncollectedBugs=0,
        this.gameTime='',
        this.coffeeCups=0,
        this.isWin=false,
        this.isLose=false
    }

    setGraphics(){}
    emitMovement(direction){}
}