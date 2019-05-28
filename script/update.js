function game_update_player_movement() {
    player.vx /= 1.60;
    player.vy /= 1.60;
    
    if (key.LEFT) { player.vx = -player.s; }
    if (key.RIGHT) { player.vx = player.s; }
    if (key.UP) { player.vy = -player.s; }
    if (key.DOWN) { player.vy = player.s; }

    player.x += player.vx;
    player.y += player.vy;
    player.x2 = player.x + player.w;
    player.y2 = player.y + player.h;
}

//
// Main Update
//

function game_update() {
    game_update_player_movement();
}