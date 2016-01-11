var app = angular.module('kB');

app.filter('newlines',function($sce){
    
    return function(data){
        var txt;
        if(!data){ txt= data; }
        else{ txt = data.replace(/\n\r?/g,'<br/>'); }
        return $sce.trustAsHtml(txt);
    }
})