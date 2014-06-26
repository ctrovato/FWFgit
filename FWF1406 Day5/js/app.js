angular.module("LocalStorageDemoApp", [])

.service("StorageServ", function(){



        this.saveItem=function(pItem){
         localStorage.setItem("lsString",pItem);

        }

        this.loadItem=function(){

            return localStorage.getItem("lsString");
        }

         })


.controller("LocalController",function($scope,StorageServ){

        var items= [
            { name:"asdf", height:"33" },
            { name:"fdsa", height:"109"}
        ]


    $scope.inputString = StorageServ.loadItem();

    $scope.saveString = function(){

        StorageServ.saveItem($scope.inputString)

    }

    $scope.gimmieString = function(){

        var str = JSON.stringify(items);
        console.log("As A String");
        console.log(str);
        console.log("As A Parsed JSON Object");
        var obj =JSON.parse(str);
        console.log(obj);
        console.log("And finally, the original...");
        console.log(items);



    }


});