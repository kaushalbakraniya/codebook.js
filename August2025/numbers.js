console.log(Number(97));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number('hello'))

let myNum = new Number(97);
console.log(myNum === 97);
console.log(typeof(myNum))
myNum = Number(97);
console.log(myNum === 97);
myNum = 97;
console.log(myNum === 97);
console.log(typeof(myNum))

let floatNum = parseFloat(97.0);
console.log(floatNum);

console.log(8+1);
console.log(10-1);
console.log(9*1);
console.log(18/2);
let num = 8;
console.log(++num);
num=10;
console.log(--num);
num=3;
console.log(num**2);
num=19;
console.log(num%10);

console.log(10/0)

console.log(10 / "two")