/**
 * Created by Kuro on 16-May-16.
 */
class Tank {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.sprite = new Image();
        this.sprite.src = "images/tank_basic_down_c0_t1_f.png";
        this.spriteUp = new Image();
        this.spriteUp.src = "images/tank_basic_up_c0_t1_f.png";
        this.spriteDown = new Image();
        this.spriteDown.src = "images/tank_basic_down_c0_t1_f.png";
        this.spriteLeft = new Image();
        this.spriteLeft.src = "images/tank_basic_left_c0_t1_f.png";
        this.spriteRight = new Image();
        this.spriteRight.src = "images/tank_basic_right_c0_t1_f.png";
        this.direction = 1; //Current direction
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw(context) {
        context.drawImage(this.sprite, this.x, this.y);

    }

    move(direction) {
        switch (direction) {
            case 1://Move up
                this.speedY = -3;
                this.speedX = 0;
                this.sprite = this.spriteUp;
                this.direction = 1;
                break;
            case 2://Move down
                this.speedY = 3;
                this.speedX = 0;
                this.sprite = this.spriteDown;
                this.direction = 2;
                break;
            case 3://Move left
                this.speedX = -3;
                this.speedY = 0;
                this.sprite = this.spriteLeft;
                this.direction = 3;
                break;
            case 4://Move right
                this.speedX = 3;
                this.speedY = 0;
                this.sprite = this.spriteRight;
                this.direction = 4;
                break;
        }
    }
}