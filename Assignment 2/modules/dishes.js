var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);

var Currency = mongoose.Types.Currency;

var commentSchema = Schema({
    rating: {type: Number, min: 1, max: 5, required: true},
    comment: {type: String, required: true},
    author: {type: String, required: true}
});


var dishesSchema = Schema({
        name: {type: String, required: true, unique: true},
        image: {type: String, required: true},
        category: {type: String, required: true},
        label: {type: String, default: ""},
        price: {type: Currency},
        comments :[commentSchema],
        description: {type: String, required: true},
    },
    {timestamps: true});

var Dishes = mongoose.model('dish', dishesSchema);

module.exports = Dishes;