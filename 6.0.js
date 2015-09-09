// Setting up the module
angular.module('exModule', []);

// Getting the module
angular.module('exModule');

// Setting Controller
angular.module('exModule')
	.controller('mainController', ['$scope', function($scope){

	$scope.input1show = false;
	

	$scope.paragraph1 = "David Young";
	$scope.paragraph2 = "I am just a guy";
	$scope.paragraph3 = "Slaughter House 5";
	$scope.paragraph4 = "github?  Is this a trick question?";
	$scope.buttoncontent = "Edit"
	$scope.buttoncounter = 0;



	$scope.editclick = function(event){
		$scope.buttoncounter++;
		if (($scope.buttoncounter%2)!=0){
			$scope.input1show = true;
			$scope.buttoncontent = "Finished";
		}
		else {
			$scope.input1show = false;
			$scope.buttoncontent = "Edit";}
	}
	


	}])