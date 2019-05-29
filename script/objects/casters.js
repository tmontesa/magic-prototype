// A caster is a player/enemy weapon.
// They exist with multiple properties, that are affected by parts.

function Caster(caster_type, casterpart_set, level) {
    this.caster_type = caster_type;
    this.level = level;

    this.damage;
    this.firerate;
    this.accuracy;
    this.reloadspeed;
    this.magazinesize;
}

function CasterPart(casterpart_type, damage_modifier, firerate_modifier, accuracy_modifier, 
    reloadspeed_modifier, magazinesize_modifier) {

    this.casterpart_type        = casterpart_type;
    this.damage_modifier        = damage_modifier;
    this.firerate_modifier      = firerate_modifier;
    this.accuracy_modifier      = accuracy_modifier;
    this.reloadspeed_modifier   = reloadspeed_modifier;
    this.magazinesize_modifier  = magazinesize_modifier;
}

const CASTERPART_TYPE = {
    "FLAME" : 0,
    "SMOKE" : 1,
    "EYES"  : 2,
    "MOUTH" : 3,
    "LEGS"  : 4
}

var CASTERPARTS = [[],[],[],[],[]];

CASTERPARTS[CASTERPART_TYPE.FLAME].push([
    new CasterPart(CASTERPART_TYPE.FLAME, 1, 1, 1, 1, 1)
]);

CASTERPARTS[CASTERPART_TYPE.SMOKE].push([
    new CasterPart(CASTERPART_TYPE.SMOKE, 1, 1, 1, 1, 1)
]);

CASTERPARTS[CASTERPART_TYPE.EYES].push([
    new CasterPart(CASTERPART_TYPE.EYES, 1, 1, 1, 1, 1)
]);

CASTERPARTS[CASTERPART_TYPE.MOUTH].push([
    new CasterPart(CASTERPART_TYPE.MOUTH, 1, 1, 1, 1, 1)
]);

CASTERPARTS[CASTERPART_TYPE.LEGS].push([
    new CasterPart(CASTERPART_TYPE.LEGS, 1, 1, 1, 1, 1)
]);
