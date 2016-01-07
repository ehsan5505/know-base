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
    })    
});

module.exports = router;
