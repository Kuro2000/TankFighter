/**
 * Created by Kuro on 5/19/2016.
 */
class wallBrick {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = new Image();
        this.sprite.src = "images\wall_brick.png";
    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y);
    }
    update(){};
}
class wallSteel {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = new Image();
        this.sprite.src = "images\wall_steel.png";
    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y);
    }
    update(){};
}
class water {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = new Image();
        this.sprite.src = "images\water_1.png";
    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y);
    }
    update(){};
}
class trees {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = new Image();
        this.sprite.src = "images\trees.png";
    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y);
    }
    update(){};
}
