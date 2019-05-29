var canvas_offset_x = 0;
var canvas_offset_y = 0;

var mouse = {
	X:	0,
	Y: 	0,
	ABS_X: 0,
	ABS_Y: 0
};

var key = {
    UP:     false,
    DOWN:   false,
    LEFT:   false,
    RIGHT:  false,
    SPACE:  false
};

function handlerMousePosition(e) {
	mouse.X = e.clientX - canvas_offset_x;
	mouse.Y = e.clientY - canvas_offset_y;
	mouse.ABS_X = e.clientX;
	mouse.ABS_Y = e.clientY;
}

function handlerKeyDown(e) {
	switch(e.keyCode) {
		case 37:
		case 65:
			key.LEFT	= true;
			break;
		case 38:
		case 87:
			key.UP 	    = true;
			break;
		case 39:
		case 68:
			key.RIGHT 	= true;
			break;
		case 40:
		case 83:
            key.DOWN  	= true;
			break;
		case 32:
			key.SPACE   = true;
			break;
        default:
            break;
    }
}

function handlerKeyUp(e) {
	switch(e.keyCode) {
		case 37:
		case 65:
			key.LEFT	= false;
			break;
		case 38:
		case 87:
			key.UP 	    = false;
			break;
		case 39:
		case 68:
			key.RIGHT 	= false;
			break;
		case 40:
		case 83:
            key.DOWN  	= false;
			break;
		case 32:
			key.SPACE   = false;
			break;
        default:
            break;
	}
}



