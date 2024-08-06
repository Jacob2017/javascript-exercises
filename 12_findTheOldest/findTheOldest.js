const findTheOldest = function(arr) {
    let indexOfOldest = arr
        .map((person) => {
            let age = person.yearOfDeath - person.yearOfBirth;
            if (isNaN(age)) {
                age = 2024 - person.yearOfBirth;
            }
            return age;
        })
        .reduce((maxIndex, currentValue, currentIndex, arr) =>
            currentValue > arr[maxIndex] ? currentIndex : maxIndex, 0);
        
    return arr[indexOfOldest];
};

// Do not edit below this line
module.exports = findTheOldest;
