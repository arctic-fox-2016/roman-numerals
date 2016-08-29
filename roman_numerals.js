function to_roman_old(n) {
      if (n>=1000) {
          console.log('b');
    var sisa_M = n % 1000;
    var hasil="";
    var berapa_M = (n - sisa_M) / 1000;
    for(var i =0 ;i<berapa_M ;i++){
        hasil = hasil + "M";
    }
  }


    if (500<=n<1000) {
    var sisa_D = n % 500;
    var hasil="";
    var berapa_D = (n - sisa_D) / 500;
    for(var i =0 ;i<berapa_D ;i++){
        hasil = hasil + "D";
        n = sisa_D;
  }
  }
  if (n>=100 && n<500) {
      console.log('satu');
    var sisa_C = n % 100;
    var hasil="";
    var berapa_C = (n - sisa_C) / 100;
    for(var i =0 ;i<berapa_C ;i++){
        hasil = hasil + "C";
        n=sisa_C;

  }
  }
  else if (n>=50 && n<100) {
      console.log('a');
    var sisa_L = n % 50;
    var hasil="";
    var berapa_L = (n - sisa_L) / 50;
    for(var i =0 ;i<berapa_L ;i++){
        hasil = hasil + "L";
        n=sisa_L;
  }
  }
  else if (n>=10 && n<50) {
    var sisa_X = n % 10;
    var hasil="";
    var berapa_X = (n - sisa_X) / 10;
    for(var i =0 ;i<berapa_X ;i++){
        hasil = hasil + "X";
        n=sisa_X;
  }
  }
  else  {
      //console.log('bawah');
    var sisa_I = n % 1;
    var hasil="";
    var berapa_I = (n - sisa_I) / 1;
    for(var i =0 ;i<berapa_I ;i++){
        hasil = hasil + "I";
  }
  }



  return hasil;
  }


function to_roman(n) {
    // your implementation code here
}

// Drive code
console.log("My totally sweet testing script\n");
console.log("input | expected | actual");
console.log("1     |    I     | ", to_roman_old(1));
console.log("4     | IIII     | ", to_roman_old(4));
console.log("9     | VIIII    | ", to_roman_old(9));
console.log("13    | XIII     | ", to_roman_old(13));
console.log("1453  | MCCCCLIII  | ", to_roman_old(1453));
console.log("1646  | MDCXLVI  | ", to_roman_old(1646));

console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("1     | I        | ", to_roman(1));
console.log("4     | IV       | ", to_roman(4));
console.log("9     | IX       | ", to_roman(9));
console.log("13    | XIII     | ", to_roman(13));
console.log("1453  | MCDLIII  | ", to_roman(1453));
console.log("1646  | MDCXLVI  | ", to_roman(1646));
