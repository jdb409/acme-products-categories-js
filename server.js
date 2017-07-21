var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var port = process.env.PORT || 3000;

app.use('/public', express.static(path.join(__dirname, '/public')));

app.set('view engine', 'html');
app.engine('html',nunjucks.render);
nunjucks.configure('views', {noCache: true});



app.use('/', function(req, res){
    res.render('index');
});

app.listen(port, function(){
    console.log('listening on port ' + port);
});