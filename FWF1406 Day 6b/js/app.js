angular.module("MyApp",["ngRoute"])

.config(function($routeProvider){
       
       $routeProvider.when("/home",{
       controller:"HomeController",
       templateUrl:"Home.html"
       }).otherwise({redirectTo:"/home"});
})

http://wddbs.com/ffw/jsapi/students.php=json&jsoncallback=JSON_CALLBACK
    
.controller("HomeController",function($scope,$http){
            
        $scope.dataArray=[];
        
        $http.jsonp("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c46bd326c96f5f96480f1e4ae8536f37&tags=batman&extras=url_l,url_s&per_page=10&page=1&format=json&jsoncallback=JSON_CALLBACK")

        .success(function(data){
        console.log(data.photos.photo);
        $scope.dataArray= data.photos.photo;
            
        }).error(function(data){
        console.log("wrong data");
        });
        
        $scope.addbutton=function(){ 
            var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c46bd326c96f5f96480f1e4ae8536f37&tags="+$scope.userInput+"&extras=url_l,url_s&per_page=10&page=1&format=json&jsoncallback=JSON_CALLBACK"
            $http.jsonp(url)

        .success(function(data){
        console.log(data.photos.photo);
        $scope.dataArray= data.photos.photo;
            
        }).error(function(data){
        console.log("wrong data");
        });
        
        
            
            
        
        
        };
        
        
        
            });
        
        
      
            
        





// https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c46bd326c96f5f96480f1e4ae8536f37&tags=batman&extras=url_l,url_s&per_page=10&page=1&format=json&jsoncallback=JSON_CALLBACK