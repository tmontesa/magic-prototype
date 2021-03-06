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

    // Level and experience.
    this.level = random_int(1,25);
    this.experience = 0;

    // Projectile fire rate timing.
    this.projectile_cooldown = 0;
    this.base_projectile_cooldown = 10;

    // Reloading.
    this.reloading = false;
    this.reload_cooldown = 0;
    this.magazine = 0;

    // Weapon swap speed.
    this.weaponswap_cooldown = 0;
    this.base_weaponswap_cooldown = 25;

    // Equip slots.
    this.equip = new Array(4);
    this.current_equip = this.equip[0];
    this.current_equip_index = 0;

    // Inventory.
    this.max_inventory_slots = 16;
    this.inventory = new Array(this.max_inventory_slots);
}