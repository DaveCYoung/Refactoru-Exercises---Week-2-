// Setting up the module
angular.module('exModule', []);

// Getting the module
angular.module('exModule');

// Setting Controller
angular.module('exModule')
	.controller('mainController', ['$scope', function($scope){
		
		
		$scope.clickdisplay = '';
		$scope.clickdisplay2 = [];
		$scope.show = true;
		$scope.show2 = false;
		$scope.mousedover2 = '';

		$scope.click = function(event){
			$scope.clickdisplay = 'Clicked!';
		}

		$scope.click2 = function(event) {
			$scope.clickdisplay2 = ['Item 1', 'Item 2', 'Item 3'];
		}

		$scope.mouseover1 = function(event) {
			if ($scope.mousedover2 === ''){
				$scope.mousedover2 = 'mousedover';
			}
			else {$scope.mousedover2 = '';}	

		}
		
		$scope.locationChange = function(event) {
    var answer = confirm("Are you sure you want to leave this page?")
    if (!answer) {
        event.preventDefault();
        $scope.show = false;
    }

    }
	
		$scope.click3 = function (event) {
			$scope.show2 = true;
		}

			$scope.click4 = function (event) {
			$scope.show2 = false;
		}



	}])










angular.module('breakoutModule')
	.controller('otherController', ['$scope', function($scope){
		
	}])


// var myObj = {
// 	name : {
// 		firstName : 'bill'
// 		lastName : 'kksksks'
// 	}
// }

// myObj.name.firstName

// var something = (10 < 11) ? 'alright!' : 'Noooo'
