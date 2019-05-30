//
// Caster Object
//

function Caster(level, rarity, caster_type, casterpart_set,
    damage, firerate, accuracy, reloadspeed, magazinesize) {

    this.level = level;
    this.rarity = rarity;
    this.caster_type = caster_type;
    this.casterparts = casterpart_set;

    this.damage         = damage;
    this.firerate       = firerate;
    this.accuracy       = accuracy;
    this.reloadspeed    = reloadspeed;
    this.magazinesize   = magazinesize;
}

function CasterBase(caster_type,
    base_damage, base_firerate, base_accuracy, base_reloadspeed, base_magazinesize) {

    this.caster_type = caster_type;

    this.base_damage         = base_damage;
    this.base_firerate       = base_firerate;
    this.base_accuracy       = base_accuracy;
    this.base_reloadspeed    = base_reloadspeed;
    this.base_magazinesize   = base_magazinesize;
}

//
// Caster Pool
//

const CASTER_TYPE_COUNT = 5;
const CASTER_TYPE = {
    "PEWPEW" :      0,
    "RATATAT":      1,
    "DERTDERT":     2,
    "BLAMBLAM":     3,
    "KABOOMER":     4
}

var CASTERBASES = new Array(CASTER_TYPE_COUNT);
// caster_type, base_damage, base_firerate, base_accuracy, base_reloadspeed, base_magazinesize

CASTERBASES[CASTER_TYPE.PEWPEW] = 
    new CasterBase(CASTER_TYPE.PEWPEW, 10, 0.90, 0.90, 1, 10);

CASTERBASES[CASTER_TYPE.RATATAT] = 
    new CasterBase(CASTER_TYPE.RATATAT, 5, 1.75, 0.85, 0.85, 30);

CASTERBASES[CASTER_TYPE.DERTDERT] = 
    new CasterBase(CASTER_TYPE.DERTDERT, 3, 3.00, 0.80, 0.90, 20);

CASTERBASES[CASTER_TYPE.BLAMBLAM] = 
    new CasterBase(CASTER_TYPE.BLAMBLAM, 30, 0.70, 0.70, 0.80, 6);

CASTERBASES[CASTER_TYPE.KABOOMER] = 
    new CasterBase(CASTER_TYPE.KABOOMER, 100, 0.10, 0.85, 0.50, 3);

//
// Generate
//

// level, caster_type, casterpart_set, damage, firerate, accuracy, reloadspeed, magazinesize
function generate_caster(level) {
    var caster_type     = random_int(0, CASTER_TYPE_COUNT);
    var rarity          = generate_rarity();
    var casterpart_set  = generate_casterpart_set();
    var damage          = (CASTERBASES[caster_type].base_damage * level * rarity.modifier);
    var firerate        = CASTERBASES[caster_type].base_firerate;
    var accuracy        = CASTERBASES[caster_type].base_accuracy;
    var reloadspeed     = CASTERBASES[caster_type].base_reloadspeed;
    var magazinesize    = CASTERBASES[caster_type].base_magazinesize;

    for (var i = 0; i < casterpart_set.length; i++) {
        damage          *= casterpart_set[i].damage_modifier;
        firerate        *= casterpart_set[i].firerate_modifier;
        accuracy        *= casterpart_set[i].accuracy_modifier;
        reloadspeed     *= casterpart_set[i].reloadspeed_modifier;
        magazinesize    *= casterpart_set[i].magazinesize_modifier;
    }

    damage = Math.floor(contain_number(damage, 1, 999999999));
    firerate = parseFloat(contain_number(firerate, 0.05, 100).toFixed(2));
    accuracy = parseFloat(contain_number(accuracy, 0.10, 1).toFixed(2));
    reloadspeed = parseFloat(contain_number(reloadspeed, 0.05, 100).toFixed(2));
    magazinesize = Math.floor(contain_number(magazinesize, 1, 999));

    return new Caster(level, rarity, caster_type, casterpart_set,
        damage, firerate, accuracy, reloadspeed, magazinesize);
}