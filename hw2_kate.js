function pow(x, y) {
    if (y === 0) return 1;
    let number_x = 1;
    let number_y = Math.abs(y);
    for (let i = 0; i < number_y; i++) {
        number_x *= x;
    }

    return y > 0 ? number_x : 1 / number_x;
}

console.log(pow(2, 3));
console.log(pow(2, 0));
console.log(pow(2, -3));
console.log(pow(5, 10));
console.log(pow(5, -2));
console.log(pow(5, 0));