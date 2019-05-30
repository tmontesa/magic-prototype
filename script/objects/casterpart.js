//
// Casterpart Object
//

function CasterPart(casterpart_type, damage_modifier, firerate_modifier, accuracy_modifier, 
    reloadspeed_modifier, magazinesize_modifier) {

    this.casterpart_type        = casterpart_type;
    this.damage_modifier        = damage_modifier;
    this.firerate_modifier      = firerate_modifier;
    this.accuracy_modifier      = accuracy_modifier;
    this.reloadspeed_modifier   = reloadspeed_modifier;
    this.magazinesize_modifier  = magazinesize_modifier;
}

//
// Casterpart Pool
//

const CASTERPART_TYPE_COUNT = 5;
const CASTERPART_TYPE = {
    "FLAME" : 0,
    "SMOKE" : 1,
    "EYES"  : 2,
    "MOUTH" : 3,
    "LEGS"  : 4
}

var CASTERPARTS = [[],[],[],[],[]];
// casterpart_type, damage_modifier, firerate_modifier, accuracy_modifier, reloadspeed_modifier, magazinesize_modifier

CASTERPARTS[CASTERPART_TYPE.FLAME] = [
    new CasterPart(CASTERPART_TYPE.FLAME, 1, 1, 1, 1, 1),
    new CasterPart(CASTERPART_TYPE.FLAME, 1.20, 0.90, 0.90, 1, 1),
    new CasterPart(CASTERPART_TYPE.FLAME, 0.90, 1.30, 0.95, 1, 1),
    new CasterPart(CASTERPART_TYPE.FLAME, 1.05, 0.95, 1.30, 1, 1)
];

CASTERPARTS[CASTERPART_TYPE.SMOKE] = [
    new CasterPart(CASTERPART_TYPE.SMOKE, 1, 1, 1, 1, 1),
    new CasterPart(CASTERPART_TYPE.SMOKE, 1, 1, 1, 0.80, 0.90),
    new CasterPart(CASTERPART_TYPE.SMOKE, 1, 1, 1, 1.10, 1.20),
    new CasterPart(CASTERPART_TYPE.SMOKE, 1.15, 1, 1, 1.05, 0.90)
];

CASTERPARTS[CASTERPART_TYPE.EYES] = [
    new CasterPart(CASTERPART_TYPE.EYES, 1, 1, 1, 1, 1),
    new CasterPart(CASTERPART_TYPE.EYES, 1, 0.90, 1.20, 0.95, 1),
    new CasterPart(CASTERPART_TYPE.EYES, 1, 1.30, 0.85, 1, 1),
    new CasterPart(CASTERPART_TYPE.EYES, 1.05, 1.50, 0.80, 1.05, 0.95)
];

CASTERPARTS[CASTERPART_TYPE.MOUTH] = [
    new CasterPart(CASTERPART_TYPE.MOUTH, 1, 1, 1, 1, 1),
    new CasterPart(CASTERPART_TYPE.MOUTH, 1.20, 1, 1, 1.10, 0.90),
    new CasterPart(CASTERPART_TYPE.MOUTH, 1.05, 1, 1, 0.80, 1.05),
    new CasterPart(CASTERPART_TYPE.MOUTH, 0.85, 1.25, 0.90, 1.15, 1)
];

CASTERPARTS[CASTERPART_TYPE.LEGS] = [
    new CasterPart(CASTERPART_TYPE.LEGS, 1, 1, 1, 1, 1),
    new CasterPart(CASTERPART_TYPE.LEGS, 1, 1.30, 0.85, 1, 1.10),
    new CasterPart(CASTERPART_TYPE.LEGS, 1, 1.15, 1, 1, 1.20),
    new CasterPart(CASTERPART_TYPE.LEGS, 1, 0.85, 1.05, 0.80, 1.25)
];

//
// Generate
//

function generate_casterpart(casterpart_type) {
    return CASTERPARTS[casterpart_type][random_int(0, CASTERPARTS[casterpart_type].length)];
}

function generate_casterpart_set() {
    var cp = [];
    for (var i = 0; i < CASTERPART_TYPE_COUNT; i++) {
        cp.push(generate_casterpart(i));
    }
    return cp;
}