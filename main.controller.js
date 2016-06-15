
//Initializing angular module and creating main controller to retrieve JSON data

var myApp = angular.module('myApp',[]);

	myApp.controller('MainController', ['$scope','$http', function($scope, $http){
	
	$http({
		method: 'GET',
		url: 'topspots.json'
	}).then(function(response){
		$scope.topspots = response.data;

	});
}])