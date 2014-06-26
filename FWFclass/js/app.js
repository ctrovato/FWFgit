

angular.module("AjaxDemoApp", ['ngRoute'])

.config(function($routeProvider){


	$routeProvider.when('/home',{
		controller:"HomeController",
		templateUrl:"home.html"
	}).otherwise({redirectTo:"/home"});
})

.controller("HomeController", function($scope, $http){

$scope.dataArray = [];


$http.jsonp("http://wddbs.com/ffw/jsapi/mlp.php?callback=JSON_CALLBACK")
				.success(function(data,status,headers,config){
								console.log(data);
								$scope.dataArray = data.ponies;
				}).error(function(data,status,headers,config){
								console.log("DOING IT WRONG");

				});
});


// https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d452baef55e6e715e7fa9ddf2797ccdetags=Batman&extras=url_l%2Curl_s&per_page=10&page=1&format=rest&auth_token=72157645220166926-3fdfe37c6c402811&api_sig=97753cd35725d251587c2059d9d4ce25

