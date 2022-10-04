//• Tests for equality and inequality with strings
console.log("danish"=="Danish");
console.log("danish"=="danish");

// • Tests using the lower case function
var str = "danish"
console.log(str ==str.toLowerCase());

var str2 = "Danish"
console.log(str2 ==str2.toLowerCase());


// • Numerical tests involving equality and inequality, 
//  greater than and less than, greater than or equal to, 
//  and less than or equal to

//equality and inequality
console.log(9==10);
console.log(9==9);

//greater than and less than
console.log(9<10);
console.log(9>10);

//greater than or equal to
console.log(10>=12);
console.log(10>=5);

//less than or equal to
console.log(12<=10);
console.log(12<=14);


// • Tests using "and" and "or" operators
const a = 3;
const b = -2;

// And
console.log(a > 0 && b > 0);
console.log(a > 0 && b < 0);

// Or
console.log(a > 0 || b > 0);
console.log(a < 0 || b > 0);

// • Test whether an item is in a array
// • Test whether an item is not in a array

var arr =["summer","winter","spring"," autumn"]

console.log(arr.includes("summer"));
console.log(arr.includes("weather"))
