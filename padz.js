function padLeft(a,b,c){a=String(a);(b=Array(Math.max(b-a.length,0))).push(a);return b.join(c)};




function padz(a,b,c){
 a=String(a);
 (b=Array(b-a.length)).push(a);
 
 return b.join(c);
}

console.log(padz("abc",5,'-'));
