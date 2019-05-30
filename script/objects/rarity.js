//
// Rarity Object
//

function Rarity(rarity_type, modifier, chance, name, color) {
    this.rarity_type = rarity_type;
    this.modifier = modifier;
    this.chance = chance;
    this.name = name;
    this.color = color;
}

//
// Rarity Pool

const RARITY_TYPE_COUNT = 8;
const RARITY_TYPE = {
    "BASIC":        0,
    "VALUED":       1,
    "CHERISHED":    2,
    "PRIZED":       3,
    "TREASURED":    4,
    "IDOLIZED":     5,
    "WORSHIPPED":   6,
    "BEATIFIED":    7
};

const RARITY = [
    new Rarity(RARITY_TYPE.BASIC,       0.93, 0.50,         "Basic",        "rgb(255,255,255)"),
    new Rarity(RARITY_TYPE.VALUED,      1.00, 0.25,         "Valued",       "rgb(204, 255, 51)"),
    new Rarity(RARITY_TYPE.CHERISHED,   1.10, 0.125,        "Cherished",    "rgb(255, 204, 0)"),
    new Rarity(RARITY_TYPE.PRIZED,      1.21, 0.0625,       "Prized",       "rgb(255, 102, 0)"),
    new Rarity(RARITY_TYPE.TREASURED,   1.33, 0.03125,      "Treasured",    "rgb(204, 0, 102)"),
    new Rarity(RARITY_TYPE.IDOLIZED,    1.50, 0.015625,     "Idolized",     "rgb(153, 51, 255)"),
    new Rarity(RARITY_TYPE.WORSHIPPED,  1.70, 0.0104166,    "Worshipped",   "rgb(102, 153, 255)"),
    new Rarity(RARITY_TYPE.BEATIFIED,   2.00, 0.0052084,    "Beatified",    "rgb(0, 0, 102)")
]

//
// Generate
//

function generate_rarity() {
    var roll = random_int(0, 1000000000) / 1000000000;
    console.log(roll);
    for (var i = RARITY_TYPE_COUNT-1; i > 0; i--) {
        if (roll <= RARITY[i].chance) {
            return RARITY[i];
        }
    }
    return RARITY[0];
}
