function Enemy(w, h, x, y, max_health) {
   // Position and dimensions of the enemy.
    this.w = w;
    this.h = h; 
    this.x = x;
    this.y = y;
    
    // Health.
    this.health = max_health;
    this.max_health = max_health;
}

function generate_enemy() {
    return new Enemy(
        random_int(16, 32),
        random_int(16, 32),
        random_int(0, canvas.width),
        random_int(0, canvas.height),
        random_int(50, 500)
    )
}