var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./db');
var app = express();
var port = process.env.PORT || 3000;

app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extender: false}));
app.set('view engine', 'html');
app.engine('html',nunjucks.render);
nunjucks.configure('views', {noCache: true});
app.use(require('method-override')('_method'));

app.get('/', function(req, res){
    var cat = db.getCategoryNames();
    res.render('index', {categories: cat});
});

app.use('/categories', require('./routes/categories'));

app.listen(port, function(){
    console.log('listening on port ' + port);
});