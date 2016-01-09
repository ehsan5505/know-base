var app = angular.module('kB');


app.controller('listArtCntr',['$scope','$http',function($scope,$http){
    $http.get('/articles').success(function(data){
        console.log(data);
        $scope.articles = data;
    }).error(function(err){
        console.log(err);
    })    
}]);

app.controller('detailArtCntr',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
    var article = $routeParams.id;
    $http.get('/articles/'+article).success(function(data){
        console.log(data);
        $scope.article = data;
    })
    
    $scope.removeArticle = function(id){
        // console.log("deleting the info "+id);
        
        $http.delete('/articles/'+$routeParams.id).success(function(data){
            console.log("Successful");
        })
        // $location.path('articles');
    }
}]);

app.controller('addArtCntr',['$scope','$http','$routeParams','$location',function($scope,$http,$routeParams,$location){
    
    $http.get('/categories').success(function(data){
        $scope.categories = data;
    })
    
    $scope.addArticle = function(){
        $scope.data = {
            title       : $scope.title,
            category    : $scope.category,
            body        : $scope.body
        }
        
        $http.post('/articles',$scope.data).success(function(){
            console.log($scope.data);
            $location.path('/articles');
        }).error(function(err){
            console.error(err);
        })
        // console.log($scope.data);
    }
    
    
}])

app.controller('editArtCntr',['$scope','$http','$routeParams','$location',function($scope,$http,$routeParams,$location){
    $http.get('/categories').success(function(data){
        $scope.categories = data;
    });
    
    var article = $routeParams.id;
    $http.get('/articles/'+article).success(function(data){
        $scope.article = data;
        // console.info('param:'+article+"  \n "+data);
    });
    
    $scope.editArticle = function(){
        var updData = {
            title       : $scope.article.title,
            category    : $scope.article.category,
            body        : $scope.article.body,
            id          : article
        }
        
        // console.log(article);
        // console.info($scope.data +" is UPDATE");
        $http.put('/articles/'+article,updData).success(function(data,status){
            // $location.path('/');
            console.info('STATUS:'+status);
            
        })
        $location.path('/articles');
    }
    
    
}]);

// app.controller('removeArtCntr',['$scope','$http','$routeParams','$location',function($scope,$http,$routeParams,$location){
//     var id = $routeParams.id;
//     console.warn("REMOVE: "+id);
// }])