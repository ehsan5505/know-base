var app = angular.module('kB',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/categories',{
            templateUrl: 'view/category/listCategory.view.html',
            controller: 'listCatCntr'
        })
        .when('/categories/:category',{
            templateUrl: 'view/category/category.detail.view.html',
            controller: 'detailCatCntr'
        })
}])