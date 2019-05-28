// 
// Initialize
//

var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
console.log("Good to go!");

//
// Objects
//

function Player() {
    // Dimensions of player.
    this.w = 32;
    this.h = 32;

    // Location of player at the top-left and bottom-right respectively.
    this.x = 0;
    this.y = 0;
    this.x2 = this.x + this.w;
    this.y2 = this.y + this.h;

    // The max speed of manual movement and the velocities.
    this.s = 8;
    this.vx = 0;
    this.vy = 0;
}

var player = new Player();

// 
// Main
//

function main() {
    game_update();
    game_render();
}

setInterval(main, 24);