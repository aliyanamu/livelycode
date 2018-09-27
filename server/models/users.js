let hashPass = require('../helpers/hashPass');

const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const userScheme = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password:{
      type: String,
      required: true
    },
    tweetlist: [{
      type: Schema.Types.ObjectId,
      ref: 'Tweet'
    }],
  },
  {
    timestamps: true
  }
);

userScheme.pre('save', function(next) {
  this.password = hashPass(this.password);
  next();
});

const User = mongoose.model('User', userScheme);
module.exports = User;
