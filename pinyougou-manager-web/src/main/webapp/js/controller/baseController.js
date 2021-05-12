app.controller('baseController',function ($scope) {


    //切换页码
    $scope.reloadList = function () {
        $scope.search($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    }

    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function () {
            $scope.reloadList();//重新加载
        }
    }

    //定义删除的ID数据
    $scope.selectIds = [];
    //动态修改装id的数组
    $scope.dynamicIdArray = function ($event,id){
        // console.log("choice");
        if($event.target.checked){
            //选中 添加
            $scope.selectIds.push(id);
        }else{
            //没选中  删除
            var index = $scope.selectIds.indexOf(id);
            //从第几个开始  删除几个
            $scope.selectIds.splice(index,1);
        }
    }

})