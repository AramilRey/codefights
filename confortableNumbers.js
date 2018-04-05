// Number a feels comfortable with number b if a ≠ b and b lies in the segment [a - s(a), a + s(a)]
// where s(x) is the sum of x's digits.

// How many pairs (a, b) are there, such that a < b, both a and b lie on the segment [l, r], 
// and each number feels comfortable with the other?

function comfortableNumbers(l, r) {
    let pairs = 0;
    const nums = {};
    for (let i = l; i <= r; ++i) {
        for (let j = i + 1; j <= Math.min(i + digitSum(i), r); ++j) {
            if (j - digitSum(j) <= i) ++pairs;
        }
    }
        
    return pairs;
}

const m = new Map();
const digitSum = (n) => {
    if (!m.has(n)) m.set(n, n.toString().split('').map(Number).reduce((a, b) => a + b, 0));
    return m.get(n);
}
