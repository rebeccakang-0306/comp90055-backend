// Receipt data schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var submitSchema = new Schema({
    username:  {type: String, required: true, unique: true},
    usertype:String,
    photo1:Number,
    photo2:Number,
    photo3:Number,
    photo4:Number,
    photo5:Number,
    photo6:Number,
    photo7:Number,
    photo8:Number,
    photo9:Number,
}, {collection: 'Submit'});

mongoose.model('submit', submitSchema)

