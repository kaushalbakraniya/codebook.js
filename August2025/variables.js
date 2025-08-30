perfectGloablVar = 97;

{
    let myLocalVar = "I am a local variable";
    var anotherTypeOfDeclaration = "created using var";
    console.log(perfectGloablVar);
    console.log(myLocalVar);
    localGlobalVar = "Locally defined global variable";
    console.log(anotherTypeOfDeclaration);
}

console.log(localGlobalVar);
console.log(anotherTypeOfDeclaration);