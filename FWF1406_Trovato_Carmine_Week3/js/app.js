var dataArray = [];


angular.module("MyApp",["ngRoute"])

.config(function($routeProvider){

       $routeProvider.when("/home",{
       controller:"HomeController",
       templateUrl:"Home.html"
       })
       .when("/details/:index",{
       controller:"DetailsController",
       templateUrl:"details.html"
       }).otherwise({redirectTo:"/home"});

})

.controller("HomeController",function($scope,$http){

        $http.jsonp("http://wddbs.com/ffw/jsapi/students.php?callback=JSON_CALLBACK")

        .success(function(data){
        console.log(data);
        dataArray = data;

        $scope.dataArray=dataArray;

        }).error(function(data){
        console.log("wrong data");
        });
})


.controller("DetailsController",function($scope,$routeParams){

        console.log("YO");
        $scope.person = dataArray[$routeParams.index];

});



