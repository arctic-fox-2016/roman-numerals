
let roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
let angka = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
let romanold = ["M","D","C","L","X","V","I"];
let angkaold = [1000,500,100,50,10,5,1];



function to_roman_old(value) {
    if (value <= 0 || value >=  4000 )
      return value;


      var romanNumeral = "";
      for (var i=0; i<romanold.length; i++) {
        while (value >= angkaold[i]) {
          value -= angkaold[i];
          romanNumeral += romanold[i];
        }
      }
      return romanNumeral;
  }


function to_roman(value) {

    if (value <= 0 || value >=  4000 )
      return value;
      // jika value lebih kecil dari 0 atau lebih besar dari 4000, akan mengembalikan value

      var romanNumeral = "";
      for (var i=0; i<roman.length; i++) {
        while (value >= angka[i]) {
          value -= angka[i];
          romanNumeral += roman[i];
        }
      }
      return romanNumeral;
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




console.log(to_roman(4));
