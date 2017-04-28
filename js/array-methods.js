console.log("i am here");

var colors = ["red", "blue","green","orange","teal"];


//forEach gives you an item and index for the array
//it is a method that is available on arrays
colors.forEach(function(item){
	var newColorString = "I like this color: " +item;
	console.log(newColorString);
	//newColorString is only available within this forEach unless you return it and assign it to a variable
})

for (var i=0; i<colors.length; i++){
	var newColorString = "I like this color: " + colors[i];
	console.log(newColorString);

}



//map makes it an individual item
var reversedColors = colors.map(function(color){
	return color.split("").reverse().join("");
});

console.log(reversedColors);

var newColors = colors.reverse();
console.log("newColors", newColors);

var fourLetters = colors.filter(function(color){
	return color.length === 4;
})

console.log("fourLetters", fourLetters);

var numbers = [51, 40, 4, 98, 3];

//when we use reduce, utomatically two numbers prev and current are passed
var sum = numbers.reduce(function(prev, curr){
	console.log("prev", prev);
	console.log("curr", curr);
	console.log("numbers", numbers);
	return prev + curr;
});

console.log("numbers", numbers);

console.log("sum", sum);

var integers = [13, 25, 4, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
/* sort numbers in descending order
	remove any greater than 19
	multiply each remaining number by 1.5 and then subtract 1
	output (console) the sum of all resulting numbers
*/

var chainingResult = integers.sort(function(a,b){
	return a-b;
})
.reverse()
.filter(function(num){
	return num <= 19;
})
.map(function(num){
	return num*1.5 -1;
})
.reduce(function(prev,curr){
	return prev + curr;
})
console.log("chainingResult", chainingResult);


































