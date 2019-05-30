function Projectile(w, h, x, y, vx, vy, damage) {
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

    // Damage.
    this.damage = damage;
}