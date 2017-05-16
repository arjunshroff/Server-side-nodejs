var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leadRouter = require('./leaderRouter');


var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));




app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leadership',leadRouter);
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});