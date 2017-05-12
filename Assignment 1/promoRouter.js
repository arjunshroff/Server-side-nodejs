/**
 * Created by amahesh on 5/11/17.
 */

var express = require('express');
var bodyParser = require('body-parser')


var promoRouter = express.Router();
promoRouter.use(bodyParser.json());


promoRouter.route('/')
    .all(function (req, res, next) {
        res.writeHead(200, {'content-type': 'text/html'});
        next();
    })
    .get(function (req, res, next) {
        res.end("You will get all the promotions")
    })
    .post(function (req, res, next) {
        res.end('Will add the promotions: ' + req.body.name + ' with description: ' + req.body.description);
    })
    .delete(function (req, res, next) {
        res.end("you will delete all the promotions")
    });
promoRouter.route('/:promoId')
    .all(function (req, res, next) {
        res.writeHead(200, {'content-type': 'text/html'});
        next();
    })
    .get(function (req, res, next) {
        res.end(`Will return the promotion with ID ${req.params.promoId}`)
    })
    .put(function (req, res, next) {
        res.write('Updating the promotion: ' + req.params.leadershipId + '\n');
        res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete(function (req, res, next) {
        res.end(`Will delete the promotion with ID ${req.params.promoId}`)
    });

module.exports = promoRouter;