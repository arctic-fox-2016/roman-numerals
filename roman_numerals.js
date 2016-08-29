function to_roman_old(n) {
  // your code here
  var textOutput = "";

  // Get M numerator
  var romanM = Math.floor(n / 1000);
  for (i = 0; i < romanM; i++) { textOutput += "M"; }
  n = n % 1000;

  // Get D numerator
  var romanD = Math.floor(n / 500);
  for (i = 0; i < romanD; i++) { textOutput += "D"; }
  n = n % 500;

  // Get C numerator
  var romanC = Math.floor(n / 100);
  for (i = 0; i < romanC; i++) { textOutput += "C"; }
  n = n % 100;

  // Get L numerator
  var romanL = Math.floor(n / 50);
  for (i = 0; i < romanL; i++) { textOutput += "L"; }
  n = n % 50;

  // Get X numerator
  var romanX = Math.floor(n / 10);
  for (i = 0; i < romanX; i++) { textOutput += "X"; }
  n = n % 10;

  // Get V numerator
  var romanV = Math.floor(n / 5);
  for (i = 0; i < romanV; i++) { textOutput += "V"; }
  n = n % 5;

  // Get I numerator
  var romanI = n;
  for (i = 0; i < romanI; i++) { textOutput += "I"; }

  return textOutput;
}

function to_roman(n) {
  // your implementation code here
  var textOutput = to_roman_old(n);

  var newTextOutput = textOutput.replace("DCCCC", "CM").replace("CCCC", "CD").replace("LXXXX", "XC").replace("XXXX", "XL").replace("VIIII", "IX").replace("IIII", "IV");

  return newTextOutput;
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
