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
}])