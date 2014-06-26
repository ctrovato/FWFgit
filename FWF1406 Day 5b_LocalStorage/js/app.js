angular.module("MyApp",["ngRoute"])

.config(function($routeProvider){
    $routeProvider.when("/details",{
    templateUrl:"partials/details.html",
    controller: "EmployeeDetailsController"
    }) .when("/form",{
    templateUrl:"partials/form.html",
    controller: "EmployeeFormController"
    }) .when("/list",{
    templateUrl:"partials/list.html",
    controller: "EmployeeListController"
    }).otherwise({

    redirectTo:"/form"

   });

})



.controller("EmployeeListController", function($scope, EmpService){
    $scope.employeeArray= EmpService.getEmpName();

    $scope.removeEmployeeAt = function(pIndex){
    EmpService.removeEmployeeAt(pIndex);
};


})
.controller("EmployeeFormController", function($scope, EmpService){
    $scope.addEmployee=function(){
    // Clear obsolete Error Message
    $scope.errorMsg = '';

    // THIS IS CALLED FORM VALIDATION!!!!!
    // Test that the three pieces of data have been entered.
    if($scope.EmployeeName.length == 0 || $scope.EmployeeNumber.length == 0 || $scope.EmployeeEmail.length == 0){
        // If nothing has been entered, display message, and abort.
        $scope.errorMsg = "You have to fill-in all text fields!";
        return;
    }


    // Uses the Movie Service to insert the movie into our array.
    EmpService.addEmployee($scope.EmployeeName,$scope.EmployeeNumber,$scope.EmployeeEmail);

    $scope.EmployeeName = '';
    $scope.EmployeeNumber = '';
    $scope.EmployeeEmail = '';

    document.location.hash="/list";
}


    $scope.employeeArray= EmpService.getEmpName();

    // initializing our variables for later use.
    $scope.EmployeeName = '';
    $scope.EmployeeNumber = '';
    $scope.EmployeeEmail = '';
    $scope.errorMsg = '';

})
.controller("EmployeeDetailsController", function($scope, EmpService, $routeParams){

})


