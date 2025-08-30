console.log(1 == "1") //loosy ==
console.log(1 != "1") //loosy !=
console.log(1 === "1") //strict ===
console.log(1 !== "1") //strict !==
console.log(1 >= "1") 
console.log(1 <= "1")
console.log("1" == true)
console.log(NaN == true)

console.log(2 == 3 || 2 == 2)
console.log(2 == 3 && 2 == 2)
console.log(!!0)
console.log(true && "mystr")
console.log(1 || false)
console.log(null ?? false)

var MyVar = false; // true -> 4
MyVar &&= 2+2;
console.log(MyVar);

var MyVar = true; // false -> 4
MyVar ||= 2+2;
console.log(MyVar);