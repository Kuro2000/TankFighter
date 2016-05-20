/**
 * Created by Kuro on 5/19/2016.
 */
class wallBrick {
    constructor(i, j) {
        this.x = j * 16;
        this.y = i * 16;
        this.sprite = new Image();
        this.sprite.src = "images/wall_brick.png";
    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y);
    }
}
class wallSteel {
    constructor(i, j) {
        this.x = j * 16;
        this.y = i * 16;
        this.sprite = new Image();
        this.sprite.src = "images/wall_steel.png";
    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y);
    }
}
class Water {
    constructor(i, j) {
        this.x = j * 16;
        this.y = i * 16;
        this.sprite = new Image();
        this.sprite.src = "images/water_1.png";
    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y);
    }
}
class Trees {
    constructor(i, j) {
        this.x = j * 16;
        this.y = i * 16;
        this.sprite = new Image();
        this.sprite.src = "images/trees.png";
    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y);
    }
}
