var categories = angular.module('kB');

categories.controller('listCatCntr',['$scope','$http',function($scope,$http){
    $http.get('/categories').success(function(data){
        console.log(data);
        $scope.categories = data;
    })
}])

categories.controller('detailCatCntr',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
    var category = $routeParams.category;
    $http.get('/categories/'+category).success(function(data){
        console.log(data[0]);
        $scope.category = data[0];
    })
    $http.get('/articles/category/'+category).success(function(data){
        $scope.articles = data;
        console.log(data);
    })
    
}])

categories.controller('addCatCntr',['$scope','$http','$location',function($scope,$http,$location){
    // console.log(title+" | "+description);
    
    $scope.addCategory = function(){
        var title = $scope.type;
        var description = $scope.description;
        
        var newCat = {
            type        : title,
            description : description
        }
        
        $http.post('/categories',newCat).success(function(data){
            $location.path('/categories');
        }).error(function(err){
            console.error(err);
        })
        
        
        // console.log(title +" | "+description);
        // console.warn($scope);
    }
    
}])
