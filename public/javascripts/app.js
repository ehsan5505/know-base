var app = angular.module('kB',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        // routes for the categories
        .when('/categories',{
            templateUrl: 'view/category/listCategory.view.html',
            controller: 'listCatCntr'
        })
        .when('/categories/:category',{
            templateUrl: 'view/category/category.detail.view.html',
            controller: 'detailCatCntr'
        })
        
        //routes for the articles
        .when('/articles',{
            templateUrl: 'view/article/listArticle.view.html',
            controller: 'listArtCntr'
        })
        
        .when('/articles/:id',{
            templateUrl: 'view/article/detailArticle.view.html',
            controller: 'detailArtCntr'
        })
        
        //default route
        .otherwise( directTo='/categories')
}])