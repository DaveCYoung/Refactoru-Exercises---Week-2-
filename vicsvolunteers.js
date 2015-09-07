var vics = prompt("How many victims do you wish to enter?")
var volunteers = prompt("How many volunteers do you wish to enter?")
var names = []
var numbers = []
var streets = []
var volnames = []
var volnumbers = []
var volstreets = []

console.log("hello")


for (var i = 1; i<= vics; i++)
{
	names.push (prompt("Enter name"))
	numbers.push (prompt("Enter phone number"))
	streets.push (prompt("Enter street address"))
}

for (var i = 1; i<=volunteers; i++)
{
	volnames.push (prompt("Enter name"))
	volnumbers.push (prompt("Enter phone number"))
	volstreets.push (prompt("Enter street address"))
}

alert("There are " + vics + " people in need.  There are "+ volunteers + " people volunteering their help.  People in need include "+ names + ".  People volunteering include "+ volnames + ".")