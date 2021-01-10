const canSum = (target, numbers, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === 0) return true;
    if (target < 0) return false;

    for (let num of numbers) {
        const temp = target - num;
        if (canSum(temp, numbers, memo) === true) {
            memo[target] = true;
            return true;
        }
    }
    memo[target] = false;
    return false;
};
// test

console.log(canSum(7, [2, 3]));  // true
console.log(canSum(7, [5, 3, 4, 7]));  // true
console.log(canSum(7, [2, 4]));  // false
console.log(canSum(8, [2, 3, 5]));  // true
console.log(canSum(30000, [7, 14]));   // false