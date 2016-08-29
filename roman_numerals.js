function to_roman_old(n) {
    // your code here
    var textOutput = "";
    var number = n;
    var romArray = ["M", "D", "C", "L", "X", "V", "I"];
    var numArray = [1000, 500, 100, 50, 10, 5, 1];

    for(var i = 0; i < romArray.length; i++) {

        // Get number of times numerator repeated
        var numRepeat = Math.floor(number / numArray[i]);

        // Get roman numeral array
        for(var j = 0; j < numRepeat; j++) {
            textOutput += romArray[i];
        }

        // Update number
        number = number % numArray[i];
    }

    return textOutput;
}

function to_roman(n) {
    // Return value from to_roman_old, with replacements
    return to_roman_old(n).replace("DCCCC", "CM").replace("CCCC", "CD").replace("LXXXX", "XC").replace("XXXX", "XL").replace("VIIII", "IX").replace("IIII", "IV");
}

// Drive code
console.log("My totally sweet testing script\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IIII       | ", to_roman_old(4));
console.log("9     | VIIII      | ", to_roman_old(9));
console.log("13    | XIII       | ", to_roman_old(13));
console.log("1453  | MCCCCLIII  | ", to_roman_old(1453));
console.log("1646  | MDCXXXXVI  | ", to_roman_old(1646));

console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IV         | ", to_roman(4));
console.log("9     | IX         | ", to_roman(9));
console.log("13    | XIII       | ", to_roman(13));
console.log("1453  | MCDLIII    | ", to_roman(1453));
console.log("1646  | MDCXLVI    | ", to_roman(1646));
