console.log(String() == String());
console.log(Symbol() == Symbol());
let MySymbol = Symbol("XYZ");
console.log(MySymbol.description);
console.log(Symbol("XYZ") == MySymbol);
MySymbol = Symbol.for("XYZ");
console.log(Symbol.keyFor(MySymbol));
console.log(Symbol.for("XYZ") == MySymbol);