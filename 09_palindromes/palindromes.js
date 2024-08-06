const palindromes = function (str) {
    const cleanStr = str
        .split("")
        .map((letter) => letter.toLowerCase())
        .filter((letter) => "abcdefghijklmnopqrstuvwxyz0123456789".includes(letter))
        .join("");
    
    const reverseStr = cleanStr.split('').reverse().join('');

    return cleanStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
