export default class Tile{
    constructor(context, img, tileStartX, tileStartY, tileEndX, tileEndY, width, height) {
        this.ctx = context;
        this.img = img;
        this.tileStartX = tileStartX;
        this.tileStartY = tileStartY;
        this.tileEndX = tileEndX;
        this.tileEndY = tileEndY;
        this.width = width;
        this.height = height;
    }

    draw(x, y){
        this.ctx.drawImage(this.img, this.tileStartX, this.tileStartY, this.tileEndX, this.tileEndY, x * this.width, y * this.height, this.width, this.height);
    }
};
