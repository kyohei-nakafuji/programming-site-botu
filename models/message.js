var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var schema = new Schema({
  message: {type: String}
});
 
module.exports = mongoose.model('messages', schema);