// console.log('stuff')

// angular.module('myApp', []) //array specifies dependencies, must be included empy if no dependencies

// var myController=function($scope){  //$scope is built into angular.  
// 	$scope.greeting ='Hello World!'
// 		var excitement = 0
// 	$scope.excite = function(){		
// 		excitement ++
// 		if (excitement <5){
// 			$scope.greeting += '!'
// 		}
// 	}

// 	var citizenKane = {
// 		title: 'Citizen Kane',
// 		genre: 'Sled Based Comedic Thriller',
// 	}

// 	var silenceOfTheLambs = {
// 		title: "Silence of the Lambs",
// 		genre: "Musical Cooking Show",
// 	}

// 	var jackAndJill = {
// 		title: 'Jack and Jill',
// 		genre: 'Pychological Mystery',
// 	}
// 	$scope.movies = [citizenKane, silenceOfTheLambs, jackAndJill]
// }







// //get the module, use it to create a controller.
// //controller needs a name, and an array of dependencies.  the last item in the dependency array is the controller itself. 



// angular.module('myApp').controller('myController',['$scope', myController]) 

//scope - piece of model accessible to view.  bridge between model and view.  


// ----------------- Sep 10 Notes-----------------

// Setting up the module
angular.module('myApp', []);

// Getting the module
angular.module('myApp');

// Setting Controller
angular.module('myApp')
	.controller('myController', ['$scope', function($scope){
console.log("Huh?")
$scope.party = "Hotdog Eating Contest!";


}])


//ng-class: lets you dynamically set classes on your elements based on scope variables
	// -
