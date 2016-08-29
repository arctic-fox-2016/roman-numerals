function to_roman_old(n) {
  // your implementation code here0
  var roman_numeral = ["M", "D", "C", "L", "X", "V", "I"];
  var arabic_numeral = [1000, 500, 100, 50, 10, 5, 1];
  var roman_string = "";

  for(var idx = 0; idx < arabic_numeral.length; idx++){
    while (n >= arabic_numeral[idx]){
      roman_string += roman_numeral[idx].toString();
      n -= arabic_numeral[idx];
    }
  }
  return roman_string;
}

function to_roman(n) {
  // your code here
  var roman_numeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL" , "X", "IX", "V", "IV", "I"];
  var arabic_numeral = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman_string = "";

  for(var idx = 0; idx < arabic_numeral.length; idx++){
    if(n == arabic_numeral[idx]){
      roman_string += roman_numeral[idx].toString();
      n -= arabic_numeral[idx];
    } else {
      while (n >= arabic_numeral[idx]){
        roman_string += roman_numeral[idx].toString();
        n -= arabic_numeral[idx];
      }
    }
  }
  return roman_string;
}

// Drive code

console.log("TO ROMAN OLD\n");
console.log("input | expected | actual");
console.log("4     | IIII     | ", to_roman_old(4));
console.log("9     | VIIII    | ", to_roman_old(9));
console.log("13    | XIII     | ", to_roman_old(13));
console.log("1453  | MCCCCLIII  | ", to_roman_old(1453));
console.log("1646  | MDCXXXXVI  | ", to_roman_old(1646));

console.log("TO ROMAN\n");
console.log("input | expected | actual");
console.log("4     | IV       | ", to_roman(4));
console.log("9     | IX       | ", to_roman(9));
console.log("13    | XIII     | ", to_roman(13));
console.log("1453  | MCDLIII  | ", to_roman(1453));
console.log("1646  | MDCXLVI  | ", to_roman(1646));
