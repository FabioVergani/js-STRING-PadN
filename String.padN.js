

String.repeat=function(s,n){var t='';if(n>1){while(n>0){if(n%2===1){t+=s};s+=s;n>>=1}}else{t=n<=0?'':s};return t};


String.padN=function(s,i,t){return i===0||t.length===0?s:String.repeat(t,i-s.length)+s};

console.log(String.padN("1",0));
console.log(String.padN("1",2,'-'));
console.log(String.padN("1",1,'x'));
console.log(String.padN("1",2,'x'));
var test=String.padN("1",23,'x');
console.log(test,test.length);



//String.padN=function(s,i,t){return t?i?String.repeat(t,i-s.length)+s:s:s};

//String.padN=function(s,l,t){while(s.length<l){s=t+s};return s}



/*


function zfill(number, size) {
  number = number.toString();
  while (number.length < size) number = "0" + number;
  return number;
}



String.padN=function(s,l,t){return s.length>=l?s:String.padN(t+s,l,t)};

console.log(String.padN("11",5,'0'))



*/
