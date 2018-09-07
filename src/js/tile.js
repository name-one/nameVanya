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

    draw(x, y, absolute = 0){
        this.ctx.drawImage(this.img, this.tileStartX, this.tileStartY, this.tileEndX, this.tileEndY, x * (absolute ? 1 : this.width), y * (absolute ? 1 : this.height), this.width, this.height);
    }
};
