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
document.addEventListener("keydown", handlerKeyDown, false);
document.addEventListener("keyup", handlerKeyUp, false);
document.addEventListener("mousemove", handlerMousePosition, false);

//
// Objects
//

function Player() {
    // Dimensions of player.
    this.w = 32;
    this.h = 32;

    // Location of player at the top-left, middle, and bottom-right respectively.
    this.x = 0;
    this.y = 0;
    this.xm = this.x + this.w/2;
    this.ym = this.y + this.h/2;
    this.x2 = this.x + this.w;
    this.y2 = this.y + this.h;

    // The max speed of manual movement and the velocities.
    this.s = 8;
    this.vx = 0;
    this.vy = 0;
}

function Bullet(w, h, x, y, vx, vy) {
    // Dimensions of bullet.
    this.w = w;
    this.h = h;

    // Location of player at the top-left, middle, and bottom-right respectively.
    this.x = x;
    this.y = y;
    this.xm = this.x + this.w/2;
    this.ym = this.y + this.h/2;
    this.x2 = this.x + this.w;
    this.y2 = this.y + this.h;

    // The velocity of the bullet.
    this.vx = vx;
    this.vy = vy;
}

// Instances of objects.
var player = new Player();
var bullets = [];

// 
// Main
//

function main() {
    game_update();
    game_render();
}

setInterval(main, 24);