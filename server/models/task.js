const mongoose = require('mongoose');

const {Schema} =  mongoose;

const taskSchema = new Schema({
    title:{type:String, minLength: 1},
    listId: String,
    createdOn: Date
});


const Task = mongoose.model('List', taskSchema);

module.exports = Task;