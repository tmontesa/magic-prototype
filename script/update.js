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

function game_update_player_reload() {
    if (player.magazine <= 0 && !player.reloading) {
        player.reloading = true;
        player.reload_cooldown = 50 / player.equip[player.current_equip].reloadspeed;
    }

    if (player.reloading && player.reload_cooldown <= 0) {
        player.reloading = false;
        player.magazine = player.equip[player.current_equip].magazinesize;
    }

    if (player.reloading) {
        player.reload_cooldown--;
    }
    
}

function game_update_projectile_spawn() {
    if (player.projectile_cooldown > 0) {
        player.projectile_cooldown--;
    }
    
    if (!key.MOUSE_1) { return; }
    if (player.projectile_cooldown > 0) { return; }
    if (player.reloading) { return; }

    var dx = mouse.X - player.xm;
    var dy = mouse.Y - player.ym;
    var l  = Math.sqrt(dx * dx + dy * dy);
    var spread = ((random_int(0,32) - 16) * (1 - player.equip[player.current_equip].accuracy));

    dx = (dx/l * 32) + spread;
    dy = (dy/l * 32) + spread;

    projectiles.push(new Projectile(4, 4, player.xm, player.ym,
        dx, dy, player.equip[player.current_equip].damage));

    // TODO: Porjectiles are (not supposed to be) steering to the top-right, adjust formula.

    player.projectile_cooldown = player.base_projectile_cooldown / player.equip[player.current_equip].firerate;
    player.magazine--;
}

function game_update_projectile_movement() {
    for (var i = 0; i < projectiles.length;  i++) {
        projectiles[i].x += projectiles[i].vx;
        projectiles[i].y += projectiles[i].vy;
    }
}

//
// Main Update
//

function game_update() {
    game_update_player_movement();
    game_update_player_reload();
    game_update_projectile_spawn();
    game_update_projectile_movement();
}