function random_int(min, max) {
    return min + (Math.floor(Math.random() * Math.floor(max)));
}

function contain_number(n, min, max) {
    if (n < min) { return min; }
    if (n > max) { return max; }
    return n;
}

function collision(ax, ay, aw, ah, bx, by, bw, bh) {
    return ax < bx + bw &&
            ax + aw > bx &&
            ay < by + bh &&
            ah + ay > by;
}