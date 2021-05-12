app.controller('loginNameController',function ($scope,loginNameService) {
    $scope.getLoginName = function (){
        loginNameService.getLoginName().success(function (data){
            $scope.loginName = data.loginName;
        })
    }
})