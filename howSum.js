const howSum = (target, numbers, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === 0) return [];
    if (target < 0) return null;

    for (let num of numbers) {
        const temp = target - num;
        const tempResult = howSum(temp, numbers, memo);
        if (tempResult !== null) {
            memo[target] = [...tempResult, num];
            return memo[target];
        }
    }
    memo[target] = null;
    return null;

};


console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));