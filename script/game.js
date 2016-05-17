/**
 * Created by Kuro on 16-May-16.
 */
window.onload = function()
{
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    var background = document.getElementById("images/background.jpg");
    document.body.appendChild(canvas);
    //
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //
    gameStart();
    setInterval(()=>{
        gameUpdate();
        gameDrawer(context);
    }, 17);
};
var player;
var playerBullet;
function gameStart()
{
	//Tank is as known as the blueprint for building 'player', stored in Tank.js
    //Bullet                                         'playerBullet', stored in Bullet.js
    player = new Tank(100,100);
    playerBullet = new Bullet(0,0,1);
}
function gameUpdate()
{
    player.update();
    playerBullet.update();
}
function gameDrawer(context)
{
    context.fillStyle = "999999";
    context.fillRect(0,0,window.innerWidth,window.innerHeight);
	player.draw(context);
    playerBullet.draw(context);
}
window.onkeydown = function(e)
{
    switch (e.keyCode)
    {
        case 87 ://W button, Go Up
            player.move(1);
            break;
        case 83 ://S button, Go Down
            player.move(2);
            break;
        case 65 ://A button, Go Left
            player.move(3);
            break;
        case 68 ://D button, Go Right
            player.move(4);
            break;
        case 32 ://Space Bar, Shoot
            playerBullet.x = player.x;
            playerBullet.y = player.y;
            playerBullet.move(player.direction);
            break;
    }
};
window.onkeyup = function (e) {
    switch (e.keyCode){
        case 87 ://W - Go Up
            if(player.speedY < 0){
                player.speedY = 0;
                player.sprite = player.spriteUp;
            }
            break;  
        case 83 :// S - Go Down
            if(player.speedY > 0){
                player.speedY = 0;
                player.sprite = player.spriteDown;
            }
            break;
        case 65 :// A - Go Left
            if(player.speedX < 0){
                player.speedX = 0;
                player.sprite = player.spriteLeft;
            }
            break;
        case 68 :// D - Go Right
            if(player.speedX > 0){
                player.speedX = 0;
                player.sprite = player.spriteRight;
            }
            break;

    }
};


