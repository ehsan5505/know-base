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
})

.post('/',function(req,res,next){
    // var title = req.body.title;
    // console.dir(req.body);
    var title = req.body.type;
    var desc = req.body.description;
    
    var newCat = new Category({
        title        : title,
        description : desc
    });
    
    Category.createCategory(newCat,function(err,data){
        if(err){
            console.error(err);
        }
        res.location('/categories');
        res.redirect('/categories');
    })
    // console.warn("Type:"+title);
    // console.warn("Category: "+desc);
    
})

module.exports = router;
