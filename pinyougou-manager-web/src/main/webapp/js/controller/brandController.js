app.controller('brandController',function ($scope,$controller,brandService) {

    $controller('baseController',{$scope:$scope}); //伪继承  ---实现$scope的共享
    //增加+修改  进行判断是哪一个
    $scope.save = function (){

        brandService.save($scope.entity).success(function (data) {
            if(data.success){
                $scope.reloadList();
            }else{
                alert(data.message);
            }
        })
    }

    //删除
    $scope.delete = function (){
        // console.log("delete");
        brandService.delete($scope.selectIds).success(function (data) {
            if(data.success){
                $scope.reloadList();
            }else{
                alert(data.message);
            }
        })
    }
    //数据回显
    $scope.findOneById = function (id){
        brandService.findOneById(id).success(function (data) {
            $scope.entity = data;
        })
    }

    $scope.searchEntity = {};
    //查询
    $scope.search = function (page,rows){
        brandService.search(page,rows,$scope.searchEntity)
            .success(function (data){
                $scope.brandList = data.rows;
                $scope.paginationConf.totalItems = data.total;
            })
    }
})