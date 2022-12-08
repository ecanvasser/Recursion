// Iteration approach to fibbonacci function
let fib = (n) => {
    let arr = [0, 1];

    if (n >= 2) {
        for (let i = 0; i < n-2; i++) {
            let lastTwo = arr.slice(-2);
            let nextNum = lastTwo.reduce((total, int) => {
                return total + int
            }, 0);
            arr.push(nextNum);
        }
    } else {
        return
    }

    return arr
}

//Recursive approach to fibbonacci function
let fibRecursive = (n, arr = [0, 1]) => {
    let result = arr.slice();

    if (result.length == n) {
        return result
    }
    
    let newNum = result.slice(-2).reduce((total, num) => {
        return total + num
    }, 0);
    result.push(newNum);
    return fibRecursive(n, result);
}