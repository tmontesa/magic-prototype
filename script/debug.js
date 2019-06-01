var DEBUG = true;
var debug_padding = 12;
ctx.font = "12px Arial";


//
// Debug Functions
//

function debug_player_information() {
    ctx.beginPath();
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillStyle = "#999";

    ctx.fillText("[" + player.x.toFixed(0) + "," + player.y.toFixed(0) + "] (" + player.vx.toFixed(2) + "," + player.vy.toFixed(2) + ")", 
        debug_padding, debug_padding);

    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";

    ctx.fillText(player.projectile_cooldown.toFixed(0) + " (" + player.reload_cooldown.toFixed(0) + ")" + " | " + player.weaponswap_cooldown.toFixed(0), 
        player.x + (player.w/2), player.y - debug_padding);
    ctx.fillText(player.current_equip.magazine + "/" + player.current_equip.magazinesize, 
        player.x + (player.w/2), player.y - debug_padding - 20);

    if (player.current_equip.rarity.rarity_type < 3) {
        ctx.fillStyle = "rgba(0,0,0,0.7)";
        ctx.fillRect(canvas.width - 138, 8, 130, 18);
    }
    

    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillStyle = player.current_equip.rarity.color;
    ctx.fillText(player.current_equip.rarity.name + " " + CASTER_TYPE_NAME[player.current_equip.caster_type], 
        canvas.width - debug_padding, debug_padding);

    ctx.fillStyle = "#999";
    ctx.fillText("Level " + player.current_equip.level, 
        canvas.width - debug_padding, debug_padding + 20);
    ctx.fillText("Damage: " + player.current_equip.damage, 
        canvas.width - debug_padding, debug_padding + 40);
    ctx.fillText("Firerate: " + player.current_equip.firerate, 
        canvas.width - debug_padding, debug_padding + 60);
    ctx.fillText("Accuracy: " + player.current_equip.accuracy, 
        canvas.width - debug_padding, debug_padding + 80);
    ctx.fillText("Reload Speed: " + player.current_equip.reloadspeed, 
        canvas.width - debug_padding, debug_padding + 100);
    ctx.fillText("Magazine Size: " + player.current_equip.magazinesize, 
        canvas.width - debug_padding, debug_padding + 120);

    ctx.closePath();    
}

function debug_enemy_information() {
    ctx.beginPath();
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillStyle = "#f00";

    for (var i = 0; i < enemies.length; i++) {
        ctx.beginPath();
        ctx.fillText(enemies[i].health + "/" + enemies[i].max_health,
            enemies[i].x + (enemies[i].w/2), enemies[i].y - debug_padding);
        ctx.closePath();
    }    

    ctx.closePath();
}

//
// Main
//

function debug() {
    debug_player_information();
    debug_enemy_information();
}