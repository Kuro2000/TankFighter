/**
 * Created by Kuro on 16-May-16.
 */
class Tank {
    constructor(x, y) {
        this.bullet = new Array();
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.sprite = new Image();
        this.sprite.src = "images/tank_basic_up_c0_t1_f.png";
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
    checkCollision(rect1,rect2) {
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {
            return true;
        }
        return false;
    }
    update() {
        var isMove = true;
        var rect1 = {x: this.x + this.speedX, y: this.y + this.speedY, width: 32, height: 32};
        for (var i = 0; i < arrBrick.length; i++) {
            var rect2 = {x: arrBrick[i].x, y: arrBrick[i].y, width: 16, height: 16};
            if (this.checkCollision(rect1, rect2) == true) {
                isMove = false;
                break;

            }
        }
        if(isMove == true)
        {
            this.x += this.speedX;
            this.y += this.speedY;
        }
        for (var i = 0;i < this.bullet.length;i++)
        {
            this.bullet[i].update();
        }

    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y);
        for (var i = 0;i < this.bullet.length;i++)
        {
                this.bullet[i].draw(context);
        }

    }
    move(direction) {
        switch (direction) {
            case 1://Move up
                this.speedY = -3;
                this.speedX = 0;
                this.sprite = this.spriteUp;
                this.direction = direction;
                break;
            case 2://Move down
                this.speedY = 3;
                this.speedX = 0;
                this.sprite = this.spriteDown;
                this.direction = direction;
                break;
            case 3://Move left
                this.speedX = -3;
                this.speedY = 0;
                this.sprite = this.spriteLeft;
                this.direction = direction;
                break;
            case 4://Move right
                this.speedX = 3;
                this.speedY = 0;
                this.sprite = this.spriteRight;
                this.direction = direction;
                break;
        }
    }

    shoot(){
        var bullet = new Bullet(this.x + 13, this.y + 13, this.direction);
        this.bullet.push(bullet);
    }
}