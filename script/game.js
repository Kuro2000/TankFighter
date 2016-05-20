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
var map = [ [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,4,0,4,0,4,0,4,0,0,0,0,0,2],
            [2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,4,0,0,0,0,0,2],
            [2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,4,0,0,0,0,0,2],
            [2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,2],
            [2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],              // Map size : 28 x 28
            [2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],              // 0 : Movable
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],              //2 : Steel Wall
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],              //3 : Water
            [2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2],              //4 : Trees
            [2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]];
var arrBrick = new Array();
var arrSteel = new Array();
var arrTrees = new Array();
var arrWater = new Array();
for(var i = 0; i < 28; i++) {
    for(var j = 0; j < 28; j++) {
        if (map[i][j] == 1)
        {
            var brick = new wallBrick(i,j);
            arrBrick.push(brick);
        }
        if (map[i][j] == 2)
        {
            var steel = new wallSteel(i,j);
            arrSteel.push(steel);
        }
        if (map[i][j] == 3)
        {
            var water = new Water(i,j);
            arrWater.push(water);
        }
        if (map[i][j] == 4)
        {
            var trees = new Trees(i,j);
            arrTrees.push(trees);
        }
    }
}
function gameStart()
{
	//Tank is as known as the blueprint for building 'player', stored in Tank.js
    //Bullet                                         'playerBullet', stored in Bullet.js
    player = new Tank(100,100);
}
function gameUpdate()
{
    player.update();
}
function gameDrawer(context)
{
    context.fillStyle = "999999";
    context.fillRect(0,0,window.innerWidth,window.innerHeight);
	player.draw(context);
    for(var i = 0; i < arrBrick.length; i++)
    {
        arrBrick[i].draw(context);
    }
    for(var i = 0; i < arrSteel.length; i++)
    {
        arrSteel[i].draw(context);
    }
    for(var i = 0; i < arrWater.length; i++)
    {
        arrWater[i].draw(context);
    }
    for(var i = 0; i < arrTrees.length; i++)
    {
        arrTrees[i].draw(context);
    }
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
            player.shoot();
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


