angular.module("OurRoutyApp",["ngRoute"])

.config(function($routeProvider){
    $routeProvider.when("/home",{
        templateUrl: 'home.html',
        controller:  "ControllerStuff",
    }).when("/not",{
        templateUrl: "notHome.html",
        controller:"OtherController"
    }).otherwise({
        redirectTo: "/home"
    });


})

.controller("OtherStuff",function($scope){
    $scope.test= "This is not the Blargh you seek";
})


.controller("ControllerStuff",function($scope){
    $scope.test= "Blargh";


});