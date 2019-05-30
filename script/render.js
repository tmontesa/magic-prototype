function game_render_player() {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y, player.w, player.h);
    ctx.closePath();
}

function game_render_projectiles() {
    for (var i = 0; i < projectiles.length; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.fillRect(projectiles[i].x, projectiles[i].y, projectiles[i].w, projectiles[i].h);
        ctx.closePath();
    }    
}

//
// Main Render
//

function game_render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game_render_player();
    game_render_projectiles();
}