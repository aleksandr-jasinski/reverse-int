module.exports = function reverse(n) {
    if (n < 0) {
        n = -n;
        let reverseInt = parseInt(n.toString().split('').reverse().join(''));
        return reverseInt;
    } else {
        let reverseInt = parseInt(n.toString().split('').reverse().join(''));
        return reverseInt;
    }
}
