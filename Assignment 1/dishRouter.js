var express = require('express');
var bodyParser = require('body-parser')

var dishRouter = express.Router();
dishRouter.use(bodyParser.json());


dishRouter.route('/')
    .all(function (req, res, next) {
        res.writeHead(200, {'content-type': 'text/html'});
        next();
    })
    .get(function (req, res, next) {
        res.end("You will get all the dishes");
    })
    .post(function (req, res, next) {
        res.end('Will add the dishes: ' + req.body.name + ' with description: ' + req.body.description);
    })
    .delete(function (req,res,next) {
        res.end("will delete all the dishes")
    });
dishRouter.route('/:dishId')
    .all(function (req,res,next) {
        res.writeHead(200, {'content-type': 'text/html'});
        next();
    })
    .get(function (req,res,next) {
        res.end(`The details of the dish to be sent : ${req.params.dishId}`);
    })
    .put(function (req,res,next) {
        res.write('Updating the dish: ' + req.params.dishId + '\n');
        res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);    })
    .delete(function (req,res,next) {
        res.end(`Will delete the dish ${req.params.dishId}`)
    });

module.exports = dishRouter;