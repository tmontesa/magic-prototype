// 
// Initialize
//

// Set up canvas.
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
console.log("Good to go!");

// Add event listeners for key/mouse presses and mouse location.
canvas_offset_x = canvas.getBoundingClientRect().left;
canvas_offset_y = canvas.getBoundingClientRect().top;
document.addEventListener("mousemove", handlerMousePosition, false);
document.addEventListener("mousedown", handlerMouseDown, false);
document.addEventListener("mouseup", handlerMouseUp, false);
document.addEventListener("keydown", handlerKeyDown, false);
document.addEventListener("keyup", handlerKeyUp, false);


// Instances of objects.
var player = new Player();

var projectiles = [];

var enemies = [];
for (var i = 0; i < 8; i++) {
    enemies.push(generate_enemy());
}

player.equip[0] = generate_caster(player.level);
player.equip[1] = generate_caster(player.level);
player.equip[2] = generate_caster(player.level);
player.equip[3] = generate_caster(player.level);
player.current_equip = player.equip[0];

// 
// Main
//

function main() {
    game_update();
    game_render();
    if (DEBUG) { debug(); }
}

setInterval(main, 24);