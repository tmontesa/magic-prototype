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

    ctx.textAlign = "right";
    ctx.textBaseline = "bottom";

    ctx.fillText(player.reload_cooldown.toFixed(0) + " (" + player.projectile_cooldown.toFixed(0) + ")", 
        canvas.width - debug_padding, canvas.height - debug_padding);
    ctx.fillText(player.magazine + "/" + player.equip[player.current_equip].magazinesize, 
        canvas.width - debug_padding, canvas.height - debug_padding - 20);

    if (player.equip[player.current_equip].rarity.rarity_type < 3) {
        ctx.fillStyle = "rgba(0,0,0,0.7)";
        ctx.fillRect(canvas.width - 138, 8, 130, 18);
    }
    

    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillStyle = player.equip[player.current_equip].rarity.color;
    ctx.fillText(player.equip[player.current_equip].rarity.name + " " + CASTER_TYPE_NAME[player.equip[player.current_equip].caster_type], 
        canvas.width - debug_padding, debug_padding);

    ctx.fillStyle = "#999";
    ctx.fillText("Level " + player.equip[player.current_equip].level, 
        canvas.width - debug_padding, debug_padding + 20);
    ctx.fillText("Damage: " + player.equip[player.current_equip].damage, 
        canvas.width - debug_padding, debug_padding + 40);
    ctx.fillText("Firerate: " + player.equip[player.current_equip].firerate, 
        canvas.width - debug_padding, debug_padding + 60);
    ctx.fillText("Accuracy: " + player.equip[player.current_equip].accuracy, 
        canvas.width - debug_padding, debug_padding + 80);
    ctx.fillText("Reload Speed: " + player.equip[player.current_equip].reloadspeed, 
        canvas.width - debug_padding, debug_padding + 100);
    ctx.fillText("Magazine Size: " + player.equip[player.current_equip].magazinesize, 
        canvas.width - debug_padding, debug_padding + 120);

    ctx.closePath();    
}

//
// Main
//

function debug() {
    debug_player_information();
}