// var keyword scope is global scope

console.log("VARRRRRRRRR");
var x = 10;
{
	var x = 50;
	console.log(x);
}
console.log(x);

console.log("LETTTTTTTTTT");

let y = 10;
{
	let y = 50;
	console.log(y);
}
console.log(y);

console.log("CONSTTTTTTTTT");

const z = 10;
{
	const z = 50;
	console.log(z);
}
console.log(z);

console.log("notmal function");

var a = function(x,y){
	document.writeln(x+y);
}

console.log("arrow function");

a(45,5);

var a =(x,y)=>{
	document.writeln(x*y);
}

a(45,5);