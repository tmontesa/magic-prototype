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

    ctx.closePath();    
}

//
// Main
//

function debug() {
    debug_player_information();
}