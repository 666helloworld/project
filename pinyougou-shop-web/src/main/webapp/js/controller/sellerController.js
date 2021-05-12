 //控制层 
app.controller('sellerController' ,function($scope,$controller   ,sellerService){	
	
	$controller('baseController',{$scope:$scope});//继承
	//保存 
	$scope.save=function(){				
		sellerService.save($scope.entity).success(function (data){
			if(data.success){
				location.href = 'shoplogin.html';
			}else{
				alert(data.message);
			}
		})
	}

});	
