var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    title: {
        type: String,
        index: true,
        required: true
    },
    description: {
        type: String,
        // required: true
    }
});

var Category = module.exports = mongoose.model('Category',categorySchema);

//get all the articles
module.exports.getCategories = function(callback){
    Category.find(callback);
}

//get category by id

module.exports.getCategoryById = function(id,callback){
    Category.findById(id,callback);
}

module.exports.getCategory = function(category,callback){
    var query = {title: category }
    Category.find(query,callback);
}

module.exports.createCategory = function(newCategory,callback){
    // console.dir(newCategory);
    newCategory.save(callback);
}