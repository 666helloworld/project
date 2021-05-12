//页控制器
app.controller('indexController',function($scope,loginService){
    $scope.showName=function(){
        loginService.showName().success(
            function(response){
                $scope.loginName=response.loginName;
            }
        );
    }


//    判断是否登录
    $scope.isLogin = function(){
        if($scope.loginName==null||$scope.loginName.size==0){
            return false;
        }else{
            return true;
        }

    }
});
