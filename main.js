// console.log(
// 5+38
// 	)

// //displays in console - see dev tools.

// console.log(typeof "value")  // reports type as a STRING

// var result = 10/3

// console.log (result) //NOT a literal number but it is a reference to a number 

// 'hello' 
// "hello" //open and close with same manner of quotation marks.  use DOUBLE if you ever have to use apostrophes
// 'I can\'t let you do that, Dave' // avoid syntax issues with a backslash to tell js that it's a normal character, not the end of a string

// var eleven = "1"+"1"	
// console.log(eleven)
// console.log(typeof eleven) // STRING

// var coercion = 1+"1"
// console.log(coercion)
// console.log(typeof coercion) // also a STRING

// var greeting = 'hello '+'world'
// // console.log (greeting)
// // console.log (greeting.length) // dot notation used to access property by name 

// console.log(greeting[0])  // bracket notation 

// console.log(greeting[greeting.length-1])

// console.log(typeof parseInt('20'))  //yeilds NUMBER 
// console.log(typeof +'20ffddss') // also yeilds number.  
// console.log(+'cat') // yeilds "NaN" - not a number.  
// console.log(10=='10') // yeilds TRUE

// for (var i=1; i <= 20; i++)
// {
//     if (i % 15 == 0)
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }

// IF ELSE statements 



// var canDrink

// var country = "Mexico"

// var age = prompt("How old are you?")

// if(+age>= 21){
// 	canDrink=true
// }
// else if (((country === "Mexico")||(country==="mexico")) && (+age >= 18)){	
// 	canDrink=true
// }
	

// var name = prompt("What is your name?")
// console.log("Hello " + name)

// var string = prompt("Type in any word")
// console.log("Your word it "+string + ". ")
// console.log(string + " has " + string.length + "characters.")
// console.log(string + "'s third character is " + string.charAt(2))
// console.log("Your word in lower case is "+ string.toLowerCase())
// console.log("Your string in upper case is " + string.toUpperCase())
// console.log("Sentence Example: I have always wanted a " + string +". ")
// console.log("The subword from the 3rd to 5th characters is "+ string.substring(2, 5)+".")



// var digits = prompt("Please type in your phone number in the following format: XXX-XXX-XXXX.  This website will spam you until the day you die.")
// var digitsvalid = false
// if ((digits.charAt(3) === "-")&&(digits.charAt(7) === "-")){
// 	digitsvalid=true
// }

// var dob = prompt("Please type in your date of birth in the following format: xx/xx/xx)")
// var dobvalid = false
// if ((dob.charAt(2) === "/")&&(dob.charAt(5) === "/")){
// 	dobvalid=true
// }

// var postalcode = prompt("Please type in your postal code in the following format: xxxxx OR xxxxx-xxxx")
// var postalcodevalid = false
// if ((postalcode.length === 5)||((postalcode.charAt(4) === "-")&&(postalcode.length === 10))){
// 	postalcodevalid=true
// }

// var stateabr = prompt("Please type in your state abbreviation in caps.")
// var stateabrvalid = false
// if ((stateabr.length === 2)&&(stateabr === stateabr.toUpperCase())){
// 	stateabrvalid=true
// }

// var married = prompt("Please type in your marriage status in a yes or no format")
// var marriedvalid = false
// if (married.toUpperCase() === "YES"){
// 	marriedvalid=true
// }


// console.log("Phone number valid: "+ digitsvalid)
// console.log("DoB valid: "+ dobvalid)
// console.log("Postal Code Valid: "+ postalcodevalid)
// console.log("State Valid: "+stateabrvalid)
// console.log(" Married: "+ marriedvalid)


// var myArray = []

// var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// console.log(days.length)  //seven elements in the array


// console.log(days[0])

// var greeting = 'hello'
// greeting[0] = 'H' // does not change the strong - strings are IMMUTABLE - cannot be changed

// days[0] = "Mondaaayyyy...."

// console.log(days[0])


// days.push('DaveDay') // all arrays have push property.  function to add value to end of array. 
// console.log(days)

// days.pop() // 
// console.log(days) // removes last value from end of array



// for (var i = 2; i<=1000; i++)
// 	{
// 		var prime = true;

// 		for (var j=2; j<i; j++)
// 		{
// 			if(i%j === 0)
// 			{
// 				var prime = false
// 			}
// 		}

// 		if (prime === true)
// 			console.log(i+"is prime.")
// 	}


var myObj = {}
var topGun = {
	title: 'Top Gun',
	genre: 'Historical autobiography',
	rating: 6.8,
	year: 1986,
}

for (var key in topGun){   // for loop notation for objects.  iterates over every key.
	console.log('The '+ key + ' of the movie is '+ topGun[key])  // topGun.title or topGun[title] both access 'Top Gun'
}



var which = prompt('Which property do you want to know about?')

console.log(topGun[which])

var meanGirls = {
	rating: 'fetch',
	genre: "Inspirational Documentary",
	year: "he doens't even go here",
	title: "Mean Girls",
}



topGun.rating= 6.9;

console.log(topGun)

var movies =[]

movies.push(topGun)
movies.push(meanGirls)

console.log(movies)



















