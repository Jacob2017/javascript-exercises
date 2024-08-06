const fibonacci = function (num, memory = {}) {
    num = Number(num);
    if (num < 0) {
        return "OOPS";
    } else if (num === 0) {
        memory[num] = 0;
        return 0;
    } else if (num === 1) {
        memory[num] = 1;
        return 1;
    } else if (num in memory) {
        return memory[num];
    }
    memory[num] = fibonacci(num - 1, memory) + fibonacci(num - 2, memory);
    // console.log(num, arr);
    return fibonacci(num - 1, memory) + fibonacci(num - 2, memory);
};

// Do not edit below this line
module.exports = fibonacci;
