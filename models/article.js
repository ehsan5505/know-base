var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
    title: {
        type: String,
        index: true,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        index:true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var Article = module.exports = mongoose.model('Article',articleSchema);

//get all the articles
module.exports.getArticles = function(callback){
    Article.find(callback);
}

//get article by id

module.exports.getArticleById = function(id,callback){
    Article.findById(id,callback);
}

module.exports.getArticleByCategory = function(category,callback){
    var query = {category: category }
    Article.find(query,callback);
}

//create new article
module.exports.createArticle = function(newArticle,callback){
    newArticle.save(callback);
}

module.exports.updateArticle = function(id,data,callback){
    var title       = data.title;
    var category    = data.category;
    var body        = data.body;
    // var id          = data.id;
    // console.log("id"+id+" | title: "+title+" category: "+category+" body:"+body);
    
    Article.findById(id,function(err,article){
        
        if(article){
            article.title       = title;
            article.category    = category;
            article.body        = body;
            article.save(callback);
        }

    });
}

module.exports.delete = function(id,callback){
    Article.find({_id:id}).remove(callback);

}
    
    