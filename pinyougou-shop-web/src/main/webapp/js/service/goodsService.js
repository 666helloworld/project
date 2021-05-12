//服务层
app.service('goodsService', function ($http) {

    this.add = function (entity) {
        return $http.post('../goods/add.do', entity);
    }

    this.update = function (entity) {
        return $http.post('../goods/update.do', entity);
    }

    //查询出父节点为0的所有总类item_cat
    this.initCategory = function (parentId) {
        return $http.get('../goods/initCategory.do?parentId=' + parentId);
    }

    this.initBrand = function () {
        return $http.get('../goods/initBrand.do');
    }


//更改状态
    this.updateStatus = function (ids, status) {
        return $http.get('../goods/updateStatus.do?ids=' + ids + "&status=" + status);
    }

});
