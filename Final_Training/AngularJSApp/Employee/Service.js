//Service to get data from employee mvc controller 
myapp.service('employeeService', function ($http, $location) {


    //read employees
    this.getAllEmployees = function () {
        return $http.get('/Home/GetEmployee');
    }

    //add new employee
    this.save = function (Employee) {
        var request = $http({
            method: 'post',
            url: '/Home/Insert',
            data: Employee
        });
        return request;
    }

    //update Employee records
    this.update = function (Employee) {
        var updaterequest = $http({
            method: 'post',
            url: '/Home/Update',
            data: Employee
        });
        return updaterequest;
    }

    //delete record
    this.delete = function (UpdateEmpNo) {
        var deleterequest = $http({
            method: 'post',
            url: '/Home/Delete/' + UpdateEmpNo
        });
        return deleterequest;

        //return $http.post('/Home/Delete/' + UpdateEmpNo);
        //window.location.pathname = '/Home/About';
    }
});