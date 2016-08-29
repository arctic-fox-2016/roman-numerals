

function to_roman_old(n) {
  // your code here
  let hasil = "";
  let I = 1,
      V = 5,
      X = 10,
      L = 50,
      C = 100,
      D = 500,
      M = 1000;

  let sisa = 0;
  let bulat = 0;

  bulat = Math.floor(n/M);
  sisa  = n % M;
  for(var i=0 ; i<bulat ; i++){
    hasil+='M';
  }

  bulat = Math.floor(sisa/D);
  sisa  = sisa % D;
  for(var i=0 ; i<bulat ; i++){
    hasil+='D';
  }

  bulat = Math.floor(sisa/C);
  sisa  = sisa % C;
  for(var i=0 ; i<bulat ; i++){
    hasil+='C';
  }

  bulat = Math.floor(sisa/L);
  sisa  = sisa % L;
  for(var i=0 ; i<bulat ; i++){
    hasil+='L';
  }

  bulat = Math.floor(sisa/X);
  sisa  = sisa % X;
  for(var i=0 ; i<bulat ; i++){
    hasil+='X';
  }

  bulat = Math.floor(sisa/V);
  sisa  = sisa % V;
  for(var i=0 ; i<bulat ; i++){
    hasil+='V';
  }

  bulat = Math.floor(sisa/I);
  sisa  = sisa % I;
  for(var i=0 ; i<bulat ; i++){
    hasil+='I';
  }
  return hasil;
}

function to_roman(n) {
  // your implementation code here
   let I = 1,
       V = 5,
       X = 10,
       L = 50,
       C = 100,
       D = 500,
       M = 1000;

   let sisa = 0;
   let bulat = 0;

   let sisaV = n % V;
   let bulatV = Math.floor(n/V);
   let sisaX = n % X;
   let bulatX = Math.floor(n/X);
   let sisaL = n % L;
   let bulatL = Math.floor(n/L);
   let sisaC = n % C;
   let bulatC = Math.floor(n/C);
   let sisaD = n % D;
   let bulatD = Math.floor(n/D);
   let sisaM = n % M;
   let bulatM = Math.floor(n/M);
   let hasil = "";
   let status = "Y";


  bulat = Math.floor(n/M);
  sisa  = n % M;
  for(var i=0 ; i<bulat ; i++){
    hasil+='M';
  }

  bulat = Math.floor(sisa/D);
  sisa  = sisa % D;
  for(var i=0 ; i<bulat ; i++){
    hasil+='D';
  }

  bulat = Math.floor(sisa/C);
  sisa  = sisa % C;
  for(var i=0 ; i<bulat ; i++){
    hasil+='C';
  }

  bulat = Math.floor(sisa/L);
  sisa  = sisa % L;
  for(var i=0 ; i<bulat ; i++){
    hasil+='L';
  }

  bulat = Math.floor(sisa/X);
  sisa  = sisa % X;
  if(bulat==4) hasil+='XL';
  else{
        for(var i=0 ; i<bulat ; i++){
          hasil+='X';
        }
        if(sisa==9) hasil+='IX';
        else{
          bulat = Math.floor(sisa/V);
          sisa  = sisa % V;
          for(var i=0 ; i<bulat ; i++){
            hasil+='V';
          }

          bulat = Math.floor(sisa/I);
          sisa  = sisa % I;
          if(bulat==4)hasil+='IV';
          else for(var i=0 ; i<bulat ; i++){
            hasil+='I';
          }
      }
    }
  return hasil;

}


console.log("My totally sweet testing script\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IIII     | ", to_roman_old(4));
console.log("9     | VIIII    | ", to_roman_old(9));
console.log("13    | XIII     | ", to_roman_old(13));

console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("———|—————|———");

console.log("53    | LIII     | ", to_roman(53));
console.log("2     | II       | ", to_roman(2));
console.log("3     | III      | ", to_roman(3));
console.log("4     | IV       | ", to_roman(4));
console.log("7     | VII      | ", to_roman(7));
console.log("9     | IX       | ", to_roman(9));
console.log("11    | XI       | ", to_roman(11));
console.log("12    | XII      | ", to_roman(12));
console.log("13    | XIII     | ", to_roman(13));
console.log("14    | XIV      | ", to_roman(14));
console.log("21    | XXI      | ", to_roman(21));
console.log("24    | XXIV     | ", to_roman(24));
console.log("33    | XXXIII   | ", to_roman(33));
console.log("39    | XXXIX    | ", to_roman(39));

console.log("40    | XL       | ", to_roman(40));
console.log("1646  | MDCXLVI  | ", to_roman(1646));
