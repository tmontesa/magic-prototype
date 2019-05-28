function game_render_player() {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y, player.w, player.h);
    ctx.closePath();
}

//
// Main Render
//

function game_render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game_render_player();
}