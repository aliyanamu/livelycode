import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tweets: [],
    users: [],
    self: {}
  },
  mutations: {
    setTweets (state, payload) {
      state.tweets = payload
    },
    setUsers (state, payload) {
      state.users = payload
    },
    setSelf (state, payload) {
      state.self = payload
    }
  },
  actions: {
    getSelf (context) {
      axios
        .get('http://localhost:3000/users/self', {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          console.log('diri sendiri', response.data)
          context.commit('setSelf', response.data.user)
        })
        .catch(err => {
          console.log('get error', err.response)
        })
    },
    getTweets (context, input) {
      axios
        .get('http://localhost:3000/tweets/')
        .then(response => {
          response.data.tweets.sort(function (a, b) {
            let keyA = a.createdAt
            let keyB = b.createdAt
            if (keyA > keyB) return -1
            if (keyA < keyB) return 1
            return 0
          })

          if (input) {
            let arr = []
            response.data.tweets.forEach(elem => {
              if ((elem.tweet.toLowerCase()).match(input.toLowerCase())) {
                arr.push(elem)
              }
            })
            context.commit('setTweets', arr)
          } else {
            context.commit('setTweets', response.data.tweets)
          }
        })
        .catch(err => {
          console.log('get error', err.response)
        })
    },
    getUsers (context) {
      axios
        .get('http://localhost:3000/users/')
        .then(response => {
          let shuffled = response.data.users.sort(() => 0.5 - Math.random())
          let selected = shuffled.slice(0, 4)

          context.commit('setUsers', selected)
        })
        .catch(err => {
          console.log('get error', err.response)
        })
    },
    addTweet (context, tweet) {
      axios({
        method: 'POST',
        url: `http://localhost:3000/tweets/add`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          tweet: tweet
        }
      })
        .then(response => {
          context.dispatch('getTweets')
        })
        .catch(err => {
          console.log('get error', err.response)
        })
    }
  }
})
