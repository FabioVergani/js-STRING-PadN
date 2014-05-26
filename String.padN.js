
String.padN=function(s,l,t){while(s.length<l){s=t+s};return s}



/*


function zfill(number, size) {
  number = number.toString();
  while (number.length < size) number = "0" + number;
  return number;
}



String.padN=function(s,l,t){return s.length>=l?s:String.padN(t+s,l,t)};

console.log(String.padN("11",5,'0'))



*/
