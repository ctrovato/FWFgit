// $http.jsonp("http://wddbs.com/ffw/jsapi/mlp.php?callback=JSON_CALLBACK")

var dataArray = [];


angular.module("MyApp",["ngRoute"])


.config(function($routeProvider){
				$routeProvider
				.when('/home',{
				controller:'HomeController',
				templateUrl:'home.html'
				})
				.when('/details/:index',{
				controller:'DetailsController',
				templateUrl:'details.html'})
				.otherwise({redirectTo:"/home"});

})


.controller("HomeController", function($scope,$http){

												$http.jsonp("http://wddbs.com/ffw/jsapi/mlp.php?callback=JSON_CALLBACK")

												.success(function(data){
													console.log(data);
													dataArray = data.ponies;
													$scope.dataArray = dataArray;
												}).error(function(data){
													console.log("wrong data");
												});
		})

.controller("DetailsController", function($scope,$routeParams,$http){
												if (dataArray.length == 0){
													 $http.jsonp("http://wddbs.com/ffw/jsapi/mlp.php?callback=JSON_CALLBACK")

												.success(function(data){
													console.log(data);
													dataArray = data.ponies;
													$scope.dataArray = dataArray;

													$scope.current = dataArray[$routeParams.index];

												}).error(function(data){
													console.log("wrong data");
												});
												}
													console.log(dataArray);
													$scope.current = dataArray[$routeParams.index];







});
