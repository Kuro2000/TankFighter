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
        this.sprite = new Animation(this.x,this.y, "water_",2,10);
    }
    update(){
        this.sprite.update(this.x,this.y);
    }
    draw(context) {
       this.sprite.draw(context);
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
