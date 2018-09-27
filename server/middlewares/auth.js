require('dotenv').config()

const User = require('../models/users'),
  jwt = require('jsonwebtoken')

module.exports = {
  isLogin: function(req, res, next) {
    console.log('masuk middlewares/isLogin')
    let token = req.headers.token
    if (token) {
      jwt.verify(token, process.env.ACCESS_KEY, function(err, decoded) {
        if (!err) {
          User.findOne({
            _id: decoded.id
          })
            .then(function(user) {
              req.user = user
              next()
            })
            .catch(function() {
              res.status(500).json({
                message: `access denied`
              })
            })
        } else {
          res.status(500).json({
            message: `access denied`
          })
        }
      })
    }
  },
  getSelf: function(req, res, next) {
    console.log('masuk middlewares/getSelf')
    let token = req.headers.token
    if (token) {
      jwt.verify(token, process.env.ACCESS_KEY, function(err, decoded) {
        if (!err) {
          User.findOne({
            _id: decoded.id
          })
          .populate('tweetlist')
            .then(function(user) {
              res.status(200).json({
                user
              })
            })
            .catch(function() {
              res.status(500).json({
                message: `access denied`
              })
            })
        } else {
          res.status(500).json({
            message: `access denied`
          })
        }
      })
    }
  }
}
