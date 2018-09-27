require('dotenv').config();
let hashPass = require("../helpers/hashPass");

const User = require("../models/users"),
  jwt = require('jsonwebtoken'),
  ObjectId = require("mongodb").ObjectId;

module.exports = {
  list: (req, res) => {
    User.find()
      .then(users => {
        res.status(200).json({
          users: users
        });
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        });
      });
  },

  register: (req, res) => {
    User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(user => {
        User.findOne({
          email: req.body.email,
          password: hashPass(req.body.password)
        })
          .then(user => {
            jwt.sign({
              id: user._id
            }, process.env.ACCESS_KEY,
              function (err, token) {
                res.status(200).json({
                  name: user.name,
                  token: token
                })
              }
            )
          })
          .catch(function () {
            res.status(500).json({
              message: `email and password didn't match`
            })
          })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  },

  login: function (req, res) {
    console.log('masuk controllers/users -> login')
    User.findOne({
      $or: [
        {email: req.body.email},
        {username: req.body.username}
      ],
      password: hashPass(req.body.password)
    })
      .then(user => {
        jwt.sign({
          id: user._id
        }, process.env.ACCESS_KEY,
          function (err, token) {
            res.status(200).json({
              name: user.name,
              token: token
            })
          }
        )
      })
      .catch(function () {
        res.status(500).json({
          message: `email and password didn't match`
        })
      })
  }
};
