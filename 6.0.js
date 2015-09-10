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
	
	$scope.paragraph1edit = "David Young";
	$scope.paragraph2edit = "I am just a guy";
	$scope.paragraph3edit = "Slaughter House 5";
	$scope.paragraph4edit = "github?  Is this a trick question?";




	$scope.buttoncontent = "Show Form"
	$scope.buttoncounter = 0;



	$scope.editclick = function(event){
		$scope.buttoncounter++;
		if (($scope.buttoncounter%2)!=0){
			$scope.input1show = true;
			$scope.buttoncontent = "Hide Form";
		}	
		else {
			$scope.input1show = false;
			$scope.buttoncontent = "Show Form";
			$scope.paragraph1edit = $scope.paragraph1
			$scope.paragraph2edit = $scope.paragraph2
			$scope.paragraph3edit = $scope.paragraph3
			$scope.paragraph4edit = $scope.paragraph4



		}
	}
	


	}])