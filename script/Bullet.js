/**
 * Created by Kuro on 17-May-16.
 */
class Bullet {
    constructor(x, y,direction) {
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.sprite = new Image();
        this.sprite.src = "images/bullet_up.png";
        this.spriteUp = new Image();
        this.spriteUp.src = "images/bullet_up.png";
        this.spriteDown = new Image();
        this.spriteDown.src = "images/bullet_down.png";
        this.spriteLeft = new Image();
        this.spriteLeft.src = "images/bullet_left.png";
        this.spriteRight = new Image();
        this.spriteRight.src = "images/bullet_right.png";
        this.direction = direction;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(context){
        context.drawImage(this.sprite,this.x,this.y);
    }
    move (direction) {
        switch (direction) {
            case 1: //Fire up
                this.sprite = this.spriteUp;
                this.speedY = -8;
                this.speedX = 0;
                this.direction = direction;
                break;
            case 2: //Fire down
                this.sprite = this.spriteDown;
                this.speedY = 8;
                this.speedX = 0;
                this.direction = direction;
                break;
            case 3: //Fire left
                this.sprite = this.spriteLeft;
                this.speedX = -8;
                this.speedY = 0;
                this.direction = direction;
                break;
            case 4: //Fire right
                this.sprite = this.spriteRight;
                this.speedX = 8;
                this.speedY = 0;
                this.direction = direction;
                break;
        }
    }
}
