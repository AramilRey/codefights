// We define the weakness of number x as the number of positive integers smaller than x that have more divisors than x.

// let A be the weakness of the weakest numbers in the range [1, n]
// let B be the amount of numbers in the range [1, n] with this weakness

// returns [A, B]
function weakNumbers(n) {
    const nums = Array.from(Array(n), (_, i) => i + 1), d = [], w = [];
    
    for (let n of nums) {
        d.push(nums.filter(v => n % v === 0).length);
        w.push(d.filter(v => v > d[n - 1]).length);
    }
    
    const weakest = Math.max(...w);
    return [weakest, w.reduce((t, v) => t += +(v === weakest), 0)]
}
