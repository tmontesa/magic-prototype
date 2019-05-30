function random_int(min, max) {
    return min + (Math.floor(Math.random() * Math.floor(max)));
}

function contain_number(n, min, max) {
    if (n < min) { return min; }
    if (n > max) { return max; }
    return n;
}
  