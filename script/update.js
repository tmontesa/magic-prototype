function game_update_player_movement() {
    player.vx /= 1.60;
    player.vy /= 1.60;
    
    if (key.LEFT) { player.vx = -player.s; }
    if (key.RIGHT) { player.vx = player.s; }
    if (key.UP) { player.vy = -player.s; }
    if (key.DOWN) { player.vy = player.s; }

    player.x += player.vx;
    player.y += player.vy;
    player.xm = player.x + player.w/2;
    player.ym = player.y + player.h/2;
    player.x2 = player.x + player.w;
    player.y2 = player.y + player.h;
}

function game_update_bullet_spawn() {
    if (!key.SPACE) { return; }

    var dx = mouse.X - player.xm;
    var dy = mouse.Y - player.ym;
    var l  = Math.sqrt(dx * dx + dy * dy);

    bullets.push(new Bullet(4, 4, player.xm, player.ym,
        dx/l * 32, dy/l * 32
    ));
}

function game_update_bullet_movement() {
    for (var i = 0; i < bullets.length;  i++) {
        bullets[i].x += bullets[i].vx;
        bullets[i].y += bullets[i].vy;
    }
}

//
// Main Update
//

function game_update() {
    game_update_player_movement();
    game_update_bullet_spawn();
    game_update_bullet_movement();
}