function to_roman_old(n) {
  // your code here
  //defining variable
  let m = Math.floor(n/1000);
  let m_rem = n%1000;
  let d = Math.floor(m_rem/500);
  let d_rem = m_rem%500;
  let c = Math.floor(d_rem/100);
  let c_rem = d_rem%100;
  let l = Math.floor(c_rem/50);
  let l_rem = c_rem%50;
  let x = Math.floor(l_rem/10);
  let x_rem = l_rem%10;
  let v = Math.floor(x_rem/5);
  let v_rem = x_rem%5;
  let i = Math.floor(v_rem/1);
  let i_rem = v_rem%1;


  let word = "";
   for (mc = 1; mc<=m; mc++){
     word = word + "M";
   }
   for (dc = 1; dc<=d; dc++){
     word = word + "D";
   }
   for (cc = 1; cc<=c; cc++){
     word = word + "C";
   }
   for (lc = 1; lc<=l; lc++){
     word = word + "L";
   }
   for (xc = 1; xc<=x; xc++){
     word = word + "X";
   }
   for (vc = 1; vc<=v; vc++){
     word = word + "V";
   }
   for (ic = 0; ic <= (i-1); ic++){
     word = word + "I";
   }

   return word;

}

let letters = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
let angka = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
let numbers = [];
let rem = [];


function to_roman(n) {
  // your implementation code here
  let word = ""
  let remainder = n;
  for (i = 0; i<=12;i++){
    numbers[i] = Math.floor(remainder/angka[i]);
    remainder = remainder - numbers[i]*angka[i];
  }
  // return numbers;
  for (i=0; i<=12; i++){
    for (t=0; t<=(numbers[i]-1); t++){
      word = word + letters[i];
    }
  }
  return word;
}

//   let word = "";
//    for (mc = 1; mc<=m; mc++){
//      word = word + "M";
//    }
//    if (m_rem < 1000 && m_rem >=900){
//       word = word +"CM";
//    }else{
//      for (dc = 1; dc<=d; dc++){
//        word = word + "D";
//      }
//    }
//    if (d_rem <500 && d_rem >= 400){
//     word = word +"CD";
//    } else{
//      for (cc = 1; cc<=c; cc++){
//        word = word + "C";
//      }
//    }
//    if (c_rem <100 && c_rem >=90){
//      word = word + "XC";
//    } else {
//      for (vc = 1; vc<=v; vc++){
//        word = word + "L";
//      }
//    }
//    if (l_rem < 50 && l_rem >=40){
//      word = word + "XL";
//    } else {
//      for (lc = 1; lc<=l; lc++){
//        word = word + "X";
//      }
//    }
//
//    if (x_rem <10 && x_rem >=9){
//      word = word +"IX";
//    } else {
//      for (xc = 1; xc<=x; xc++){
//        word = word + "X";
//      }
//    }
//
//    if (v_rem <5 && v_rem >= 4){
//      word = word +"IV";
//    } else {
//      for (vc = 1; vc<=v; vc++){
//        word = word + "I";
//      }
//    }
//
//    for (ic = 0; ic <= (i-1); ic++){
//      word = word + "I";
//    }
//
//    return word;
// }

// Drive code
console.log("My totally sweet testing script\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IIII     | ", to_roman_old(4));
console.log("9     | VIIII    | ", to_roman_old(9));
console.log("13    | XIII     | ", to_roman_old(13));
console.log("1453  | MCDLIII  | ", to_roman_old(1453));
console.log("1646  | MDCXLVI  | ", to_roman_old(1646));
// //
console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IV       | ", to_roman(4));
console.log("9     | IX       | ", to_roman(9));
console.log("13    | XIII     | ", to_roman(13));
console.log("1453  | MCDLIII  | ", to_roman(1453));
console.log("1646  | MDCXLVI  | ", to_roman(1646));
