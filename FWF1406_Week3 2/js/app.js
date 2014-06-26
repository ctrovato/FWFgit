angular.module("AjaxDemoApp",['ngRoute'])

.config(function($routeProvider){
    $routeProvider.when('/home',{
    controller:"HomeController",
    templateUrl:"home.html"
    }).otherwise({redirectTo:"/home"});
})

.controller("HomeController",function($scope,$http){
$scope.dataArray=[];
    
    $http.jsonp("http://wddbs.com/ffw/jsapi/mlp.php?callback=JSON_CALLBACK")
    .success(function(data,status,header,config){
        console.log(data);
        $scope.dataArray=data.ponies;
        }).error(function(data,status,header,config){
        console.log("You're doing it wrong");
    });
});