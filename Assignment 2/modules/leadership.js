/**
 * Created by amahesh on 5/16/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var leadershipSchema = Schema({

    name: {type:String, required:true, unique:true},
    image: {type:String, required:true},
    designation: {type:String, required:true},
    abbr: {type:String, required:true},
    description: {type:String, required:true}
},{timestamps:true});

var Leaders = mongoose.model('leader',leadershipSchema);

module.exports = Leaders;