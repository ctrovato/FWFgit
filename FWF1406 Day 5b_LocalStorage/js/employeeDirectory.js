angular.module("MyApp")

.service("EmpService",function(){

    // This is the array that stores all of our data.
    // It acts as the "master copy"
    var employeeArray = [];

    // This method makes the MovieArray available externally.
    this.getEmpName = function(){

        var gotString = localStorage.getItem('lsEmployee');
        employeeArray = JSON.parse(gotString) || employeeArray;


        return employeeArray;
    }

    // This method allows external callers to insert a movie
    // into the array.
    this.addEmployee = function(pName,pNumber,pEmail){
         var obj = {};
            obj.name = pName;
            obj.number = pNumber;
            obj.email = pEmail;
        employeeArray.push(obj);

        // Local Stroage goodness
        var asString = JSON.stringify(employeeArray);
        localStorage.setItem("lsEmployee", asString);
    }

    this.removeEmployeeAt=function(employeeIndex){
        employeeArray.splice(employeeIndex,1);


        var asString = JSON.stringify(employeeArray);
        localStorage.setItem("lsEmployee", asString);

    }


});