//控制层
app.controller('itemCatController', function ($scope, $controller, itemCatService) {

    $controller('baseController', {$scope: $scope});//继承

    //读取列表数据绑定到表单中  
    $scope.findAll = function () {
        itemCatService.findAll().success(
            function (response) {
                $scope.list = response;
            }
        );
    }

    //分页
    $scope.findPage = function (page, rows) {
        itemCatService.findPage(page, rows).success(
            function (response) {
                $scope.list = response.rows;
                $scope.paginationConf.totalItems = response.total;//更新总记录数
            }
        );
    }

    //查询实体
    $scope.findOne = function (id) {
        itemCatService.findOne(id).success(
            function (response) {
                $scope.entity = response;
            }
        );
    }

    //保存
    $scope.save = function () {
        var serviceObject;//服务层对象
        if ($scope.entity.id != null) {//如果有ID
            serviceObject = itemCatService.update($scope.entity); //修改
        } else {
            serviceObject = itemCatService.add($scope.entity);//增加
        }
        serviceObject.success(
            function (response) {
                if (response.success) {
                    //重新查询
                    $scope.reloadList();//重新加载
                } else {
                    alert(response.message);
                }
                $scope.hideModal();
            }
        );
    }


    //批量删除
    $scope.dele = function () {
        //获取选中的复选框
        itemCatService.dele($scope.selectIds).success(
            function (response) {
                if (response.success) {
                    $scope.reloadList();//刷新列表
                    $scope.selectIds = [];
                }
            }
        );
    }

    $scope.searchEntity = {};//定义搜索对象

    //搜索
    $scope.search = function (page, rows) {
        itemCatService.search(page, rows, $scope.searchEntity).success(
            function (response) {
                $scope.list = response.rows;
                $scope.paginationConf.totalItems = response.total;//更新总记录数
            }
        );
    }

    //改变查询条件，然后搜索
    $scope.changeSearch = function (parentId){
        $scope.searchEntity = {
            parentId:parentId
        };
        $scope.reloadList();
    }


    //初始化面包屑数组
    $scope.loafMenu = [{name:"顶级分类列表",id: 0}];

  /*  $scope.initTopLoaf = function(){
        $scope.topLoaf = {parentId:0};
        itemCatService.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage,$scope.topLoaf).success(
            function (res) {
                $scope.loafMenu.push(res.rows);  //放入顶级节点
            }
        )
    }*/
    //删除面包屑中的选项
    $scope.delLoaf = function(entity){
        var index = $scope.loafMenu.indexOf(entity);
        if(index+1<$scope.loafMenu.length){
            $scope.loafMenu.splice(index+1,$scope.loafMenu.length);
        }
    }
    //获取子级菜单
    $scope.findSonLevel = function (p_entity) {
        $scope.loafMenu.push(p_entity);
        //进行查询
        $scope.changeSearch(p_entity.id);
    }

    $scope.showModal = function (){
        $('#editModal').modal('show');
    }

    $scope.hideModal = function (){
        $('#editModal').modal('hide');
    }
});	
