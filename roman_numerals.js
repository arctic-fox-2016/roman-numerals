function to_roman_old(n) {
  // your code here
  var angka = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romawi = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (var i=0; i<angka.length; i++){
    if (n < 1)
      return "";
    if (n >= angka[i]){
      return romawi [i] + to_roman_old(n - angka[i]);
    }
  }
}

//   if (n >= 20){
//     return "XX"+ to_roman_old(n-20);
//   }
//   if (n >= 14){
//     return "XIV"+ to_roman_old(n-14);
//   }
//   if (n >= 10){
//     return "X"+ to_roman_old(n-10);
//   }
//   if (n >= 9){
//     return "IX"+ to_roman_old(n-9);
//   }
//   if (n >= 5){
//     return "V"+ to_roman_old(n-5);
//   }
//   if (n >= 4){
//     return "IV"+ to_roman_old(n-4);
//   }
//   if (n>=1){
//      return "I"+ to_roman_old(n-1);
//   }
// }


function to_roman(n) {
  // your implementation code here
  var angka = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romawi = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (var i=0; i<angka.length; i++){
    if (n < 1)
      return "";
    if (n >= angka[i]){
      return romawi [i] + to_roman_old(n - angka[i]);
    }
  }
}

// Drive code
console.log("My totally sweet testing script\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IIII     | ", to_roman_old(4));
console.log("9     | VIIII    | ", to_roman_old(9));
console.log("13    | XIII     | ", to_roman_old(13));
console.log("1453  | MCDLIII  | ", to_roman_old(1453));
console.log("1646  | MDCXLVI  | ", to_roman_old(1646));

console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IV       | ", to_roman(4));
console.log("9     | IX       | ", to_roman(9));
console.log("13    | XIII     | ", to_roman(13));
console.log("1453  | MCDLIII  | ", to_roman(1453));
console.log("1646  | MDCXLVI  | ", to_roman(1646));
