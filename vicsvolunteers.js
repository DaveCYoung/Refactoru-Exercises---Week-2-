// var vics = prompt("How many victims do you wish to enter?")
// var volunteers = prompt("How many volunteers do you wish to enter?")
// var names = []
// var numbers = []
// var streets = []
// var volnames = []
// var volnumbers = []
// var volstreets = []

// console.log("hello")


// for (var i = 1; i<= vics; i++)
// {
// 	names.push (prompt("Enter name"))
// 	numbers.push (prompt("Enter phone number"))
// 	streets.push (prompt("Enter street address"))
// }

// for (var i = 1; i<=volunteers; i++)
// {
// 	volnames.push (prompt("Enter name"))
// 	volnumbers.push (prompt("Enter phone number"))
// 	volstreets.push (prompt("Enter street address"))
// }

// alert("There are " + vics + " people in need.  There are "+ volunteers + " people volunteering their help.  People in need include "+ names + ".  People volunteering include "+ volnames + ".")



// function myFunction(a, b) {
//     return a * b;
// 
// function tripleFive (a){
// 	for (i = 1; i<= a; i++){
// 		console.log("Five!")
// 	}
// }

// tripleFive(3)	

// function lastLetter(a){
// 	console.log(a[(a.length-1)])
// }

// lastLetter("Dog")

// function square(a){
// 	console.log(a*a)
// }
// square(6)

// function negate(a){
// 	console.log(-a)
// }

// negate(25)
// var array = []
// function toArray(a, b, c){
//  array.push(a)
//  array.push(b)
//  array.push(c)

//  console.log(array)
// }

// toArray(1, 3, 5)


// function startsWithA(a){
// 	if ((a[0] === 'A')||(a[0]==='a')){
// 		console.log ("Starts with A")
// 	}
// 	else {
// // 		console.log("Doesn't start with A")
// 	}
// }

// startsWithA("alpha")


// function excite(a){
// 	console.log(a+"!!!")
// }

// excite("yes")



// var suntruth = false
// function sun(a){
// 	a = a.toUpperCase()
// 	for(i=0; i<(a.length); i++){
// 		console.log(a.substring(i, i+3))
// 		if (a.substring(i, i+3)==="SUN"){
// 			suntruth = true;
// 		}
// 	}
// 	console.log(suntruth)
// }

// sun("pacsunasdfasd")

// function tiny(a){
// 	if ((a<1)&&(a>0)){
// 		console.log("Your number is tiny")
// 	}
// 	else{ console.log("Your number is not tiny")}
// }

// tiny(2)


function getSecond(a){
	var array = a.split(':') 
	console.log(array)
	var minutes = parseFloat(array[0])
	var seconds = parseFloat(array[1])
	console.log((minutes*60)+seconds)
}

getSecond("4:45")





