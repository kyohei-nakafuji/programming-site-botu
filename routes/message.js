var express = require('express');
var router = express.Router();
var Message = require('../models/message');
 
router.get('/', function (req, res, next) {
  Message.find(function(err, doc) {
    if (err) {
      return res.send('Error!');
    } else {
      return res.status(200).json({messages: doc});
    }
  });
});
 
router.post('/', function (req, res, next) {
  var message = new Message({
      message: req.body.message
  });
  message.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    return res.status(200).json({
      message: 'Saved message',
      obj: result
    });
  });
});
 
module.exports = router;