function to_roman_old(n) {
  var a,b,c,d,e,f
  var result = ""
  // your code here
  if (n>= 1000){
    var nstring = n.toString()
    var thousand = parseInt(nstring[0])
    var a = ""
    for (var i=0; i<thousand; i++){
      a += 'M'
    }
    var n = n % 1000
    result += a
    to_roman_old(n)
  }
  if (n>=500 && n<1000){
    var nstring = n.toString()
    var fvhundred = parseInt(nstring[0])
    var b = ""
    for(var i=0; i<nstring[0].length; i++){
      b += 'D'
    }
    var n = n % 500
    result += b
    to_roman_old(n)
  }

  if (n>=400 && n<500){
    var nstring = n.toString()
    var frhundred = parseInt(nstring[0])
    var bc = ""
    for(var i=0; i<nstring[0].length; i++){
      bc += 'CD'
    }
    var n = n % 400
    result += bc
    to_roman_old(n)
  }

  if (n>=100 && n<400){
    var nstring = n.toString()
    var hundred = parseInt(nstring[0])
    var c = ""
    for(var i=0; i<hundred; i++){
      c += 'C'
    }
    var n = n % 100
    result += c
    to_roman_old(n)
  }
  if (n>=50 && n<100){
    var nstring = n.toString()
    var fvty = parseInt(nstring[0])
    var d = ""
    for(var i=0; i<nstring[0].length; i++){
      d += 'L'
    }
    var n = n % 50
    result += d
    to_roman_old(n)
    }

    if (n>=40 && n<50){
      var nstring = n.toString()
      var frty = parseInt(nstring[0])
      var de = ""
      for(var i=0; i<nstring[0].length; i++){
        de += 'XL'
      }
      var n = n % 40
      result += de
      to_roman_old(n)
      }

    if (n>=10 && n<40){
      var nstring = n.toString()
      var ten = parseInt(nstring[0])
      var e = ""
      for(var i=0; i<ten; i++){
        e += 'X'
      }
      var n = n % 10
      result += e
      to_roman_old(n)
    }
    if (n>=5 && n<10){
      // console.log(n);
      var nstring = n.toString()
      var fv = parseInt(nstring[0])
      var f = ""
      for(var i=0; i<nstring.length; i++){
        f += 'V'
      }
      var n = n % 5
      result += f
      to_roman_old(n)
    }
    if (n>=1 && n<5){
      var nstring = n.toString()
      var one = parseInt(nstring[0])
      var g = ""
      for(var i=0; i<one; i++){
        g += 'I'
      }
      var n = n % 1
      result += g
    }
    return result
  }

function to_roman(n) {
  // your implementation code here
  var a,b,c,d,e,f
  var result = ""
  // your code here
  if (n>= 1000){
    var nstring = n.toString()
    var thousand = parseInt(nstring[0])
    var a = ""
    for (var i=0; i<thousand; i++){
      a += 'M'
    }
    var n = n % 1000
    result += a
    to_roman_old(n)
  }
  if (n>=500 && n<1000){
    var nstring = n.toString()
    var fvhundred = parseInt(nstring[0])
    var b = ""
    for(var i=0; i<nstring[0].length; i++){
      b += 'D'
    }
    var n = n % 500
    result += b
    to_roman_old(n)
  }

  if (n>=400 && n<500){
    var nstring = n.toString()
    var frhundred = parseInt(nstring[0])
    var bc = ""
    for(var i=0; i<nstring[0].length; i++){
      bc += 'CD'
    }
    var n = n % 400
    result += bc
    to_roman_old(n)
  }

  if (n>=100 && n<400){
    var nstring = n.toString()
    var hundred = parseInt(nstring[0])
    var c = ""
    for(var i=0; i<hundred; i++){
      c += 'C'
    }
    var n = n % 100
    result += c
    to_roman_old(n)
  }
  if (n>=50 && n<100){
    var nstring = n.toString()
    var fvty = parseInt(nstring[0])
    var d = ""
    for(var i=0; i<nstring[0].length; i++){
      d += 'L'
    }
    var n = n % 50
    result += d
    to_roman_old(n)
    }

    if (n>=40 && n<50){
      var nstring = n.toString()
      var frty = parseInt(nstring[0])
      var de = ""
      for(var i=0; i<nstring[0].length; i++){
        de += 'XL'
      }
      var n = n % 40
      result += de
      to_roman_old(n)
      }

    if (n>=10 && n<40){
      var nstring = n.toString()
      var ten = parseInt(nstring[0])
      var e = ""
      for(var i=0; i<ten; i++){
        e += 'X'
      }
      var n = n % 10
      result += e
      to_roman_old(n)
    }
    if (n>=9 && n<10){
      var nstring = n.toString()
      var nn = parseInt(nstring[0])
      var ef = ""
      for(var i=0; i<nstring[0].length; i++){
        ef += 'IX'
      }
      var n = n % 9
      result += ef
    }
    if (n>=5 && n<9){
      // console.log(n);
      var nstring = n.toString()
      var fv = parseInt(nstring[0])
      var f = ""
      for(var i=0; i<nstring.length; i++){
        f += 'V'
      }
      var n = n % 5
      result += f
      to_roman_old(n)
    }

    if (n>=4 && n<5){
      var nstring = n.toString()
      var fr = parseInt(nstring[0])
      var gh = ""
      for(var i=0; i<nstring[0].length; i++){
        gh += 'IV'
      }
      var n = n % 4
      result += gh
    }

    if (n>=1 && n<4){
      var nstring = n.toString()
      var one = parseInt(nstring[0])
      var g = ""
      for(var i=0; i<one; i++){
        g += 'I'
      }
      var n = n % 1
      result += g
    }
    return result
}




// Drive code
console.log("My totally sweet testing script\n");
console.log("input | expected | actual");
console.log("——---—|—-----————|—-----——");
console.log("4     | IIII     | ", to_roman_old(4));
console.log("9     | VIIII    | ", to_roman_old(9));
console.log("13    | XIII     | ", to_roman_old(13));
console.log("1453  | MCDLIII  | ", to_roman_old(1453));
console.log("1646  | MDCXLVI  | ", to_roman_old(1646));
console.log('=============================================');
console.log("My totally sweet testing script for new roman");
console.log("input | expected | actual");
console.log("——---—|——-----———|—-----——");
console.log("4     | IV       | ", to_roman(4));
console.log("9     | IX       | ", to_roman(9));
console.log("13    | XIII     | ", to_roman(13));
console.log("1453  | MCDLIII  | ", to_roman(1453));
console.log("1646  | MDCXLVI  | ", to_roman(1646));
