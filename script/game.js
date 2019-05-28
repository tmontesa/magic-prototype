// 
// Initialize
//

var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
console.log("Good to go!");

//
// Objects
//

// 
// Main
//

function main() {
    game_update();
    game_render();
}

setInterval(main, 24);