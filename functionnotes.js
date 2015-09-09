// console.log("Hello Dave")


// //variable pointing to ANONYMOUS function
// var calculateArea = function(width, height){
// 	return width*height
// }

// console.log('Box Area '+calculateArea(4, 5))


// // NAME FUNCTION
// function calculateVolume(width, height, depth){
// 	return width*height*depth
// }

// console.log('Rectangular Prism Area ' +calculateVolume(3,4,5))

// // Naming convention for functions should remain consistent 

// var myArray= []
// myArray.push('hello')

// console.log(myArray)

// var myString = "I'm so quiet..."

// console.log(myString.toUpperCase())

// var stringArray = myString.split(' ')	

// console.log(stringArray.join(' '))

// var pluralize = function(thing, number){  // MULTIPLE RETURN STATEMENTS DO NOT WORK, STOPS FUNCTION
// 	if (number === 1){
// 		return thing
// 	}
// 	else{
// 		return thing+ "s"
// 		//  no code will execute after a return statement
// 	}
// }  

// console.log(pluralize('cat', 5))

var concat = function (word1, word2){
	return word1+' '+word2
}



console.log (concat("Dave", "Young"))
// console.log (word1)  // does not work because word1 does NOT exist outside scope of the function. variables defined outside of the function are considered "global" in scope

// within the function, a global variable may be impacted or reassigned 

// if you declare a LOCAL variable with the same name as a GLOBAL variable within the function, changes to the variable will only impact the LOCAL copy of that variable


