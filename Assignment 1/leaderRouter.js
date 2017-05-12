/**
 * Created by amahesh on 5/11/17.
 */

var express = require('express');
var bodyParser = require('body-parser');

var leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());


leaderRouter.route('/')
    .all(function (req, res, next) {
        res.writeHead(200, {'content-type': 'text/html'});
        next();
    })
    .get(function (req, res, next) {
        res.end("You will get all the leaderships")
    })
    .post(function (req, res, next) {
        res.end('Will add the leader: ' + req.body.name + ' with description: ' + req.body.description);
    })
    .delete(function (req, res, next) {
        res.end("you will delete all the leaderships")
    });
leaderRouter.route('/:leadershipId')
    .all(function (req, res, next) {
        res.writeHead(200, {'content-type': 'text/html'});
        next();
    })
    .get(function (req, res, next) {
        res.end(`Will return the leadership with ID ${req.params.leadershipId}`)
    })
    .put(function (req, res, next) {
        res.write('Updating the leader: ' + req.params.leadershipId + '\n');
        res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete(function (req, res, next) {
        res.end(`Will delete the leadership with ID ${req.params.leadershipId}`)
    });

module.exports = leaderRouter;