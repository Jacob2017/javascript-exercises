const removeFromArray = function(arr, ...removals) {
    let finalArr = [];

    for (i = 0; i < arr.length; i++) {
        if (removals.includes(arr[i])) {
            continue
        }

        finalArr.push(arr[i])
    }

    return finalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
