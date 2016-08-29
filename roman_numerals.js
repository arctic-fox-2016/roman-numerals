function to_roman_old(n) {
  // your code here
  var hasil = ""
  var m = Math.floor(n/1000)
  var ms = n%1000
  var c = Math.floor(ms/100)
  var cs = ms%100
  var x = Math.floor(cs/10)
  var xs = cs%10

  for (var i=0 ; i < m; i++){
    hasil += 'M'
  }
  switch (c) {
    case 9:
      hasil += 'CM'
      break;
    case 8:
      hasil += 'DCCC'
      break;
    case 7:
      hasil += 'DCC'
      break;
    case 6:
      hasil += 'DC'
      break;
    case 5:
      hasil += 'D'
      break;
    case 4:
      hasil += 'CCCC'
      break;
    case 3:
      hasil += 'CCC'
      break;
    case 2:
      hasil += 'CC'
      break;
    case 1:
      hasil += 'C'
    default:
  }

  switch (x) {
    case 9:
      hasil += 'XC'
      break;
    case 8:
      hasil += 'LXXX'
      break;
    case 7:
      hasil += 'LXX'
      break;
    case 6:
      hasil += 'LX'
      break;
    case 5:
      hasil += 'L'
      break;
    case 4:
      hasil += 'XXXX'
      break;
    case 3:
      hasil += 'XXX'
      break;
    case 2:
      hasil += 'XX'
      break;
    case 1:
      hasil += 'X'
    default:
  }

  switch (xs) {
    case 9:
      hasil += 'VIIII'
      break;
    case 8:
      hasil += 'VIII'
      break;
    case 7:
      hasil += 'VII'
      break;
    case 6:
      hasil += 'VI'
      break;
    case 5: 
      hasil += 'V'
      break;
    case 4:
      hasil += 'IIII'
      break;
    case 3:
      hasil += 'III'
      break;
    case 2:
      hasil += 'II'
      break;
    case 1:
      hasil += 'I'
    default:
  }

return hasil;
}

function to_roman(n) {
  // your implementation code here
  var hasil = ""
  var m = Math.floor(n/1000)
  var ms = n%1000
  var c = Math.floor(ms/100)
  var cs = ms%100
  var x = Math.floor(cs/10)
  var xs = cs%10

  for (var i=0 ; i < m; i++){
    hasil += 'M'
  }
  switch (c) {
    case 9:
      hasil += 'CM'
      break;
    case 8:
      hasil += 'DCCC'
      break;
    case 7:
      hasil += 'DCC'
      break;
    case 6:
      hasil += 'DC'
      break;
    case 5:
      hasil += 'D'
      break;
    case 4:
      hasil += 'CD'
      break;
    case 3:
      hasil += 'CCC'
      break;
    case 2:
      hasil += 'CC'
      break;
    case 1:
      hasil += 'C'
    default:
  }

  switch (x) {
    case 9:
      hasil += 'XC'
      break;
    case 8:
      hasil += 'LXXX'
      break;
    case 7:
      hasil += 'LXX'
      break;
    case 6:
      hasil += 'LX'
      break;
    case 5:
      hasil += 'L'
      break;
    case 4:
      hasil += 'XL'
      break;
    case 3:
      hasil += 'XXX'
      break;
    case 2:
      hasil += 'XX'
      break;
    case 1:
      hasil += 'X'
    default:
  }

  switch (xs) {
    case 9:
      hasil += 'IX'
      break;
    case 8:
      hasil += 'VIII'
      break;
    case 7:
      hasil += 'VII'
      break;
    case 6:
      hasil += 'VI'
      break;
    case 5:
      hasil += 'V'
      break;
    case 4:
      hasil += 'IV'
      break;
    case 3:
      hasil += 'III'
      break;
    case 2:
      hasil += 'II'
      break;
    case 1:
      hasil += 'I'
    default:
  }

return hasil;


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
