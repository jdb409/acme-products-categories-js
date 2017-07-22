var router = require('express').Router();
var db = require('../db');

router.get('/:name/products',function(req, res, next){
    res.render('products', {name: req.params.name, categories: db.getCategoryNames(), products: db.getProductName(req.params.name)});
});

router.post('/', function(req, res, next){
    db.createCategory(req.body.name);
    res.redirect('/categories/'+req.body.name+'/products');
});

router.post('/:name/products', function(req, res, next){
    db.createProduct(req.params.name, req.body.product, req.body.price);
    res.redirect('/categories/' + req.params.name + '/products');
});

router.delete('/:name', function(req, res, next){
   db.deleteCategory(req.params.name);
   res.redirect('/');
});


router.delete('/:name/products/:id', function(req, res, next){
    db.deleteProduct(req.params.name, req.params.id * 1);
    res.redirect('/categories/'+req.params.name+'/products');
});

module.exports = router;