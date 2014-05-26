String.padN=function(s,l,t){return s.length>=l?s:String.padN(t+s,l,t)};

console.log(String.padN("11",5,'0'))
