function game_render_player() {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y, player.w, player.h);
    ctx.closePath();
}

function game_render_bullets() {
    for (var i = 0; i < bullets.length; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.fillRect(bullets[i].x, bullets[i].y, bullets[i].w, bullets[i].h);
        ctx.closePath();
    }    
}

//
// Main Render
//

function game_render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game_render_player();
    game_render_bullets();
}