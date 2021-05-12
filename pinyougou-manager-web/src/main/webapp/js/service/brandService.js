app.service('brandService',function ($http) {
    //增加
    this.save = function (entity){
        var tmp = 'add';
        if(entity.id!=null){
            tmp = 'update'
        }
        return $http.post('../brand/'+tmp+'.do',entity);
    }
    //删除
    this.delete = function (deleteIdList){
       return $http.get('../brand/delete.do?ids='+deleteIdList);
    }
    //数据回显
    this.findOneById = function (id){
        return $http.get('../brand/findOneById.do?id='+id);
    }
    //条件查询  根据searchEntity
    this.search = function (page,rows,searchEntity){
        return $http.post('../brand/findEntityPage.do?page='+page+'&rows='+rows,searchEntity);
    }

    //查询所有
    this.findAll = function(){
        return $http.get('../brand/findAll.do');
    }

    this.getBrandList = function(){
        return $http.get('../brand/getBrandList.do');
    }
})