var app = angular.module('kB',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        // routes for the categories
        .when('/categories',{
            templateUrl: 'view/category/listCategory.view.html',
            controller: 'listCatCntr'
        })
        .when('/categories/add',{
            templateUrl: 'view/category/addCategory.view.html',
            controller: 'addCatCntr'
        })
        .when('/categories/:category',{
            templateUrl: 'view/category/category.detail.view.html',
            controller: 'detailCatCntr'
        })
        
        //routes for the articles
        // show all the articles
        .when('/articles',{
            templateUrl: 'view/article/listArticle.view.html',
            controller: 'listArtCntr'
        })
        //add the article
        .when('/articles/add',{
            templateUrl: 'view/article/addArticle.view.html',
            controller: 'addArtCntr'
        })
        //edit the article
        .when('/articles/edit/:id',{
            templateUrl: 'view/article/editArticle.view.html',
            controller: 'editArtCntr'
        })
        //remove the article
        // .when('/articles/delete/:id',{
        //     controller: 'removeArtCntr'
        // })
        // show detail article
        .when('/articles/:id',{
            templateUrl: 'view/article/detailArticle.view.html',
            controller: 'detailArtCntr'
        })
        
        //default route
        .otherwise( directTo='/categories')
}])