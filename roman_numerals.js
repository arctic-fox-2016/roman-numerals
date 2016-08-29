function to_roman_old(n) {
  let array_of_roman = ["M", "CM", "D", "CD", "C", "L", "XL", "XVI", "X", "VIIII", "V", "IIII", "I"];
  let array_of_decimal = [1000, 900, 500, 400, 100, 50, 40, 16, 10, 9, 5, 4, 1];

  let result = ''
  // n = 16
  for(let i = 0; i < array_of_decimal.length; i++) {
    while(n >= array_of_decimal[i]) {
      result += array_of_roman[i]
      n -= array_of_decimal[i]
    }
  }
  return result;

}

function to_roman(n) {
  let array_of_roman = ["M", "CM", "D", "CD", "C", "L", "XL", "XIV", "X", "IX", "V", "IV", "I"];
  let array_of_decimal = [1000, 900, 500, 400, 100, 50, 40, 14, 10, 9, 5, 4, 1];

  let result = ''
  // n = 16
  for(let i = 0; i < array_of_decimal.length; i++) {
    while(n >= array_of_decimal[i]) {
      result += array_of_roman[i]
      n -= array_of_decimal[i]
    }
  }
  return result;
}

// Drive code
console.log("My totally sweet testing script\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IIII     | ", to_roman_old(4));
console.log("9     | VIIII    | ", to_roman_old(9));
console.log("16     | XVI    | ", to_roman_old(16));
console.log("1453  | MCCCCCLIII  | ", to_roman_old(1453));
console.log("1646  | MDCXLVI  | ", to_roman_old(1646));

console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IV       | ", to_roman(4));
console.log("9     | IX       | ", to_roman(9));
console.log("13    | XIII     | ", to_roman(13));
console.log("1453  | MCDLIII  | ", to_roman(1453));
console.log("1646  | MDCXLVI  | ", to_roman(1646));
