const Tweet = require('../models/tweets'),
      User = require('../models/users')

module.exports = {
  add: (req, res) => {
    console.log('masuk controllers/tweets -> add')
    Tweet.create({
      tweet: req.body.tweet,
      author: req.user.id
    })
      .then(data => {
        User.findByIdAndUpdate({
          _id: req.user.id
        }, {
            $push: { tweetlist: data.id }
          })
          .then(tweet => {
            res.status(200).json({
              tweet
            })
          })
          .catch(err => {
            res.status(500).json({
              message: err.message
            })
          })
        // res.status(200).json({
        //   message: 'create tweet success'
        // })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  },

  list: (req, res) => {
    console.log('masuk controllers/tweets -> all')
    Tweet.find()
      .populate('author')
      .then(tweets => {
        res.status(200).json({
          tweets
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }
}
