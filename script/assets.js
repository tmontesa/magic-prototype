//
// Image Assets
//

function image_constructor(path) {
    i = new Image();
    i.src = path;
    return i;
}

const IMAGE = {
    "PROJECTILE": image_constructor("assets/image/projectile/projectile.png"),
    "PLAYER"    : image_constructor("assets/image/player/player.gif"),
    "ENEMY"     : image_constructor("assets/image/enemy/enemy.png")
};

//
// Audio Assets
//

const AUDIO = {
    "SHOT":         new Audio("assets/audio/projectile/shot.wav"),
    "ENEMY_DEATH":  new Audio("assets/audio/enemy/death.wav")
};

