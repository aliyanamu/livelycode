const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const tweetScheme = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    tweet: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Tweet = mongoose.model('Tweet', tweetScheme);
module.exports = Tweet;
