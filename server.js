
var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./db');
var port = process.env.PORT || 3000;
var app = express();

app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extender: false}));
app.use(require('method-override')('_method'));

app.set('view engine', 'html');
app.engine('html',nunjucks.render);
nunjucks.configure('views', {noCache: true});


app.get('/', function(req, res){
    var cat = db.getCategoryNames();
    res.render('index', {categories: cat});
});

app.use('/categories', require('./routes/categories'));

app.use(function(err, req, res, next){
    res.render('error', {categories: db.getCategoryNames(), error: err});
})

app.listen(port, function(){
    console.log('listening on port ' + port);
});