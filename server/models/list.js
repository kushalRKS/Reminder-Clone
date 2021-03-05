const mongoose = require('mongoose');

const {Schema} =  mongoose;

const listSchema = new Schema({
    title:{type:String, minLength: 1},
    createdOn: Date
});


const List = mongoose.model('List', listSchema);

module.exports = List;