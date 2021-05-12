//服务层
app.service('itemCatService',function($http){
	this.findByParentId = function (parentId) {
		return $http.get('../itemCat/findByParentId.do?parentId='+parentId);
	}

	this.findOne = function (id) {
		return $http.get('../itemCat/findOne.do?id='+id);
	}
});
