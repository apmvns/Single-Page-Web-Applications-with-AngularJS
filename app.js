(function () {
	'use strict';

angular.module('MsgApp',[])
.controller('MsgContoller',MsgContoller);

MsgContoller.$inject = ['$scope'];
function MsgContoller('$scope') {
	$scope.name = "Singh";
	$scope.stateOfBeing = "evening";
	
	$scope.sayMessage = function () {
		return "I love natures";
	};
	
	$scope.feedSingh = function () {
		$scope.stateOfBeing = "morning";
	};
  }
})();