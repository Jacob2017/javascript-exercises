const sumAll = function(min, max) {
    if ((typeof min !== "number") ||
        (typeof max !== "number")) {
        return "ERROR";
    } else if (
        (min < 0) || (max < 0) 
    ) {
        return "ERROR";
    } else if (
        (Math.round(min) !== min) ||
        (Math.round(max) !== max)
    ) {
        return "ERROR";
    } else if (min > max) {
        return sumAll(max, min);
    }

    let sum = 0;
    
    for (i = min; i <= max; i++) {
        sum += i;
    }

    return sum

};

// Do not edit below this line
module.exports = sumAll;
