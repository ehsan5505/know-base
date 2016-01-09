var express = require('express');
var router = express.Router();
var Category = require('../models/category');

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'This is |categories|' });
    Category.getCategories(function(err,data){
        if(err){
            console.log(err);
        }
        res.json(data);
    })
})
.get('/:category',function(req,res,next){
    var category = req.params.category;
    Category.getCategory(category,function(err,data){
        if(err){
            console.log(err);
        }
        res.json(data);
    })
});

module.exports = router;
