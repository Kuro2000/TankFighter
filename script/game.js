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
function gameStart()
{
	//Tank is as known as the blueprint for building 'player', stored in Tank.js
    player = new Tank(100,100);
}
function gameUpdate()
{
    player.update();
}
function gameDrawer(context)
{
    context.fillStyle = "#C8BBBE";
    context.fillRect(0,0,window.innerWidth,window.innerHeight);
	player.draw(context);
}
window.onkeydown = function(e)
{
    switch (e.keyCode)
    {

        case 65 ://A button, Go Left
            player.move(3);
            break;
        case 68 ://D button, Go Right
            player.move(4);
            break;
        case 83 ://S button, Go Down
            player.move(2);
            break;
        case 87 ://W button, Go Up
            player.move(1);
            break;
    }

};
window.onkeyup = function (e) {
    switch (e.keyCode){
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
        case 83 :// S - Go Down
            if(player.speedY > 0){
                player.speedY = 0;
                player.sprite = player.spriteDown;
            }
            break;
        case 87 ://W - Go Up
            if(player.speedY < 0){
                player.speedY = 0;
                player.sprite = player.spriteUp;
            }
            break;
    }
};
