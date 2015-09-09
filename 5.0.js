// Setting up the module
angular.module('exModule', []);

// Getting the module
angular.module('exModule');

// Setting Controller
angular.module('exModule')
	.controller('mainController', ['$scope', function($scope){
		
		
		$scope.paragraph1show = true;
		$scope.paragraph2show = true;
		$scope.paragraph3show = true;

		$scope.input1show = false;
		$scope.input2show = false;
		$scope.input3show = false;

		$scope.paragraph1 = "Lorem ipsum dolor sit amet, sed augue, sed nulla in et nec lectus. Dui ultricies, aliquam et pede ut. Aenean etiam, augue libero, tincidunt sem velit vitae, fermentum nisl, porttitor ut sollicitudin wisi neque justo. Sit donec aliquam nonummy, vitae suscipit sed dictum eget, luctus dui nullam corrupti, felis consequatur fringilla ad velit vestibulum. Euismod ac venenatis ut, pede sapien eget nam mauris arcu, sed rhoncus magna enim metus. Suspendisse dui morbi, arcu sit quis in duis ut integer, urna nulla habitasse egestas mus morbi wisi, vitae posuere nullam purus, ut blandit. Velit id sit vitae quis in, sed metus in pellentesque ligula, hendrerit natoque laoreet ipsum suspendisse ultrices placerat, maecenas ut."	

		$scope.paragraph2 = "Ea odio viverra sit donec. Velit imperdiet, lorem lobortis mauris volutpat cursus eros, ligula accumsan egestas, lacinia odio in varius donec iaculis cursus, taciti neque. Parturient eget, in egestas facilisis id tincidunt, eget auctor vel odio quam. Proin sagittis integer, pede tempus, nunc cras vehicula pede enim, per pretium dictumst vestibulum donec elementum. Rutrum tortor nibh odio nibh, est ornare suspendisse mauris maecenas vel quis, lacus dolor quis fusce risus tempus, ac adipiscing morbi vitae ac non eleifend, sagittis lacus. Error et erat nulla quam dictum sed, donec aliquam auctor nunc justo lorem ultricies, lectus odio sodales, tempus suspendisse leo nibh, tortor nunc senectus ullamcorper. Sit porttitor."

		$scope.paragraph3 = "Lectus nunc mauris, tempor ante adipiscing enim sociis neque in, placerat suspendisse sodales, lacus libero nihil ac mattis euismod iste. Mauris eget ultricies a dolor inceptos interdum. Dui quis neque ut, dolor rutrum mauris tellus praesent nibh, aliquam lectus tempor rutrum, metus wisi bibendum lectus feugiat, varius donec mi luctus integer. Dictum lorem eros lorem duis tristique in, feugiat malesuada vestibulum, vel ultricies eu mattis sed nullam, risus maecenas. Non in pellentesque arcu nonummy, cras modi sed blandit qui platea eros, diamlorem litora varius auctor lacus amet. Arcu at lorem luctus dictumst vivamus, adipiscing vestibulum, hac augue blandit ullamcorper in ac enim, odio nonummy molestie ullamcorper, eget in pede euismod et etiam nibh. Etiam ipsum wisi ultrices ultricies laoreet diam, gravida velit vestibulum quisque dui suspendisse. Morbi commodo nulla egestas habitant pellentesque, sapien pede consequat, donec nunc, in aut donec tincidunt. Quisque libero in. Tristique elit enim magnam eget, ad sodales vivamus. Morbi quis laoreet lorem, ac elementum, magna ligula sit integer, consequat in, donec montes rhoncus et quam."

		$scope.clickcounter = 0;

		$scope.paragraph1click = function(event){
			$scope.clickcounter++
			if($scope.clickcounter === 2){
			$scope.paragraph1show = false;
			$scope.input1show = true;
			$scope.clickcounter = 0}
		}
		$scope.paragraph2click = function(event){
			$scope.clickcounter++
			if($scope.clickcounter === 2){
			$scope.paragraph2show = false;
			$scope.input2show = true;
			$scope.clickcounter = 0}
		}
		$scope.paragraph3click = function(event){
			$scope.clickcounter++
			if($scope.clickcounter === 2){
			$scope.paragraph3show = false;
			$scope.input3show = true;
			$scope.clickcounter = 0}
		}


		$scope.input1click = function(event){
			$scope.clickcounter++
			if($scope.clickcounter === 2){
			$scope.input1show = false;
			$scope.paragraph1show = true;
			$scope.clickcounter = 0}
		}
		$scope.input2click = function(event){
			$scope.clickcounter++
			if($scope.clickcounter === 2){
			$scope.input2show = false;
			$scope.paragraph2show = true;
			$scope.clickcounter = 0}
		}
		$scope.input3click = function(event){
			$scope.clickcounter++
			if($scope.clickcounter === 2){
			$scope.input3show = false;
			$scope.paragraph3show = true;
			$scope.clickcounter = 0}
		}
}])
	// 	$scope.clickdisplay2 = [];
	// 	$scope.show = true;
	// 	$scope.show2 = false;
	// 	$scope.mousedover2 = '';

	// 	$scope.click = function(event){
	// 		$scope.clickdisplay = 'Clicked!';
	// 	}

	// 	$scope.click2 = function(event) {
	// 		$scope.clickdisplay2 = ['Item 1', 'Item 2', 'Item 3'];
	// 	}

	// 	$scope.mouseover1 = function(event) {
	// 		if ($scope.mousedover2 === ''){
	// 			$scope.mousedover2 = 'mousedover';
	// 		}
	// 		else {$scope.mousedover2 = '';}	

	// 	}
		
	// 	$scope.locationChange = function(event) {
 //    var answer = confirm("Are you sure you want to leave this page?")
 //    if (!answer) {
 //        event.preventDefault();
 //        $scope.show = false;
 //    }

 //    }
	
	// 	$scope.click3 = function (event) {
	// 		$scope.show2 = true;
	// 	}

	// 		$scope.click4 = function (event) {
	// 		$scope.show2 = false;
	// 	}



	// }])










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
