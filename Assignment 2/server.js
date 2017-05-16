var mongoose = require('mongoose');
var assert = require('assert');

var Dishes = require('./modules/dishes');
var Promotions = require('./modules/promotions');
var Leaders = require("./modules/leadership")
var url = 'mongodb://localhost:27017/conFusion';

mongoose.connect(url);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function () {
    console.log("succesfully connected");

});
Dishes.create({
    name: "Uthapizza",
    image: "images/uthapizza.png",
    category: "mains",
    label: "Hot",
    price: "4.99",
    description: "A unique . . .",
    comments: [
        {
            rating: 3,
            comment: 'This is insane',
            author: 'Matt Daemon'
        }
    ]
}, function (err, dish) {
    if (err) throw err;
    console.log('Dish created!');
    console.log(dish);

    var id = dish._id;

    setTimeout(function () {
        Dishes.findByIdAndUpdate(id, {
            $set: {
                description: 'Updated Test'
            }
        }, {
            new: true
        })
            .exec(function (err, dish) {
                if (err) throw err;
                console.log('Updated Dish!');
                console.log(dish);
            });
    }, 3000);
});

Promotions.create({
    name: "Weekend Grand Buffet",
    image: "images/buffet.png",
    label: "New",
    price: "19.99",
    description: "Featuring . . ."
}, function (err, promotion) {
    if (err) {
        console.log("Error while adding the new promotion");
        throw err;
    }
    console.log("promotion added")
    console.log(promotion);
    var id = promotion._id;

    setTimeout(function () {
        Promotions.findByIdAndUpdate(id, {
            $set: {
                description: "The description of the promotion is updated"
            }
        }, {
            new: true
        }).exec(function (err, promotion) {
            if (err) {
                console.log("Error while updating the description of the promotion");
                throw err;
            }
            console.log("Updated description of the promotion");
            console.log(promotion);

        })
    }, 3000);
});


Leaders.create({
    name: "Peter Pan",
    image: "images/alberto.png",
    designation: "Chief Epicurious Officer",
    abbr: "CEO",
    description: "Our CEO, Peter, . . ."
}, function (err, leader) {
    if (err) {
        console.log("throws an error while creating a leader");
        throw err;
    }
    console.log("New leader is added");
    console.log(leader);

    var id = leader._id;

    setTimeout(function () {
        Leaders.findByIdAndUpdate(id, {
                $set: {
                    description: "The description of the leader is updated from CEO to VP"
                }
            },
            {new: true})
            .exec(function (err,leader) {
                if(err){
                    console.log("Error while updating the description of the leader");
                    throw err;
                }

                console.log("The description of the leader is update");
                console.log(leader);

                db.collection('dishes').drop();
                db.collection('promotions').drop();
                db.collection('leaders').drop(
                function () {
                    db.close();
                })
            })
    }, 3000)

});