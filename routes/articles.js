var express = require('express');
var router = express.Router();
var Article = require('../models/article');

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'This is Articles' });
    // res.send("This is it");
    Article.getArticles(function(err,data){
        if(err){
            console.log(err);
        }
        res.json(data);
    });
    
})
.get('/:id',function(req,res,next) {
    // console.log("NEXT");
    var id = req.params.id;
    // res.send("ID : "+id);
    // console.log(id);
    Article.getArticleById(id,function(err,data){
        if(err){
            console.log(err);
        }
        res.json(data);
    });
})
.get('/category/:category',function(req,res,next){
    var category = req.params.category;
    Article.getArticleByCategory(category,function(err,data){
        if(err){
            console.log(err);
        }
        res.json(data);
    })
})

.post('/',function(req,res,next){
    var title       = req.body.title;
    var category    = req.body.category;
    var body        = req.body.body;
    
    var newArticle  = new Article({
        title       : title,
        category    : category,
        body        : body
    }); 
    
    Article.createArticle(newArticle,function(err,data){
        if(err){
            console.error(err);
        }
        res.location('/articles');
        res.redirect('/articles');
    });
    
})

.put('/:id',function(req,res,next){
    var title       = req.body.title;
    var category    = req.body.category;
    var body        = req.body.body;
    var id          = req.params.id;
    
    var data = {
        title       : title,
        category    : category,
        body        : body
    }
    
    // console.info(data);
    var article = Article.findById(id);
    // console.warn(article);
    
    article.title       = title;
    article.category    = category;
    article.body        = body;
    
    // console.error("ID >>>> "+id);
    Article.updateArticle(id,article,function(err,data){
        if(err){
            console.error(err);
        }
        res.location('/articles');
        res.redirect('/articles');
    })
    // console.error(article);
    
})

.delete('/:id',function(req,res,next){
    var id = req.params.id;
    // console.log("REMOVE :"+req.body.id+"| "+req.params.id);
    Article.delete(id,function(err,data){
        console.error(err);
    });
})
module.exports = router;
