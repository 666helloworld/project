//控制层
app.controller('typeTemplateController', function ($scope, $controller, brandService, specificationService, typeTemplateService) {

    $controller('baseController', {$scope: $scope});//继承

    //读取列表数据绑定到表单中  
    $scope.findAll = function () {
        typeTemplateService.findAll().success(
            function (response) {
                $scope.list = response;
            }
        );
    }

    //分页
    $scope.findPage = function (page, rows) {
        typeTemplateService.findPage(page, rows).success(
            function (response) {
                $scope.list = response.rows;
                $scope.paginationConf.totalItems = response.total;//更新总记录数
            }
        );
    }

    //查询实体
    $scope.findOne = function (id) {
        typeTemplateService.findOne(id).success(
            function (response) {
                $scope.entity.brandIds = JSON.parse(response.brandIds);
                $scope.entity.specIds = JSON.parse(response.specIds);
                $scope.entity.customAttributeItems = JSON.parse(response.customAttributeItems);
                $scope.entity.name = response.name;
            }
        );
    }

    //保存
    $scope.save = function () {
        var serviceObject;//服务层对象
        if ($scope.entity.id != null) {//如果有ID
            serviceObject = typeTemplateService.update($scope.entity); //修改
        } else {
            serviceObject = typeTemplateService.add($scope.entity);//增加
        }
        serviceObject.success(
            function (response) {
                if (response.success) {
                    //重新查询
                    $scope.reloadList();//重新加载
                } else {
                    alert(response.message);
                }
            }
        );
    }


    //批量删除
    $scope.dele = function () {
        //获取选中的复选框
        typeTemplateService.dele($scope.selectIds).success(
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
        typeTemplateService.search(page, rows, $scope.searchEntity).success(
            function (response) {
                $scope.list = response.rows;

                $scope.paginationConf.totalItems = response.total;//更新总记录数
            }
        );
    }


    //初始化entity
    $scope.entity = {
        customAttributeItems: [],
        brandIds: [],
        specIds: []
    }

    //定义品牌列表
    $scope.getBrandList = function () {
        brandService.getBrandList().success(function (data) {
            $scope.brandList = {data: data};
        })
    }
    // $scope.brandList = {data:[{"id":23,"text":"小米"},{"id":89,"text":"华为"}]}
    //定义制式列表
    $scope.getSpecList = function () {
        specificationService.getSpecList().success(function (data) {
            $scope.specList = {data: data};
        })
    }

    //增加扩展属性
    $scope.addAtt = function () {
        $scope.entity.customAttributeItems.push({});
    }

    //删除扩展属性
    $scope.delAtt = function (att) {
        var index = $scope.entity.customAttributeItems.indexOf(att);
        $scope.entity.customAttributeItems.splice(index, 1);
    }


    //json字符串转换
    $scope.jsonToString = function (jsonStr, key) {
        var obj = JSON.parse(jsonStr);
        var resultStr = "";
        for (var i = 0; i < obj.length; i++) {
            if (i > 0) {
                resultStr += ",";
            }
            resultStr = resultStr + obj[i][key] + "";
        }
        return resultStr;
    }
});	
