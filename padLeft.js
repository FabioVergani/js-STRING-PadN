function padLeft(nr, n, str){
    return Array(n-String(nr).length+1).join(str||'0')+nr;
}
//or as a Number prototype method:
Number.prototype.padLeft = function (n,str){
    return Array(n-String(this).length+1).join(str||'0')+this;
}
//examples
console.log(padLeft(23,5));       //=> '00023'
console.log((23).padLeft(5));     //=> '00023'
console.log((23).padLeft(5,' ')); //=> '   23'
console.log(padLeft(23,5,'>>'));  //=> '>>>>>>23'
If you want to use this for negative numbers also:

Number.prototype.padLeft = function (n,str) {
    return (this < 0 ? '-' : '') + 
            Array(n-String(Math.abs(this)).length+1)
             .join(str||'0') + 
           (Math.abs(this));
}
console.log((-23).padLeft(5));     //=> '-00023'
Alternative if you don't want to use Array:

number.prototype.padLeft = function (len,chr) {
 var self = Math.abs(this)+'';
 return (this<0 && '-' || '')+
         (String(Math.pow( 10, (len || 2)-self.length))
           .slice(1).replace(/0/g,chr||'0') + self);
}
