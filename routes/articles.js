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
    console.log("NEXT");
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



module.exports = router;
