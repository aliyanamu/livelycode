<template>
  <!-- Navigation -->
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Victwitter</a>
        <div class="header-right" v-if="isLogin === false">
          <input type="text" v-model="emailOrPass" placeholder="username / email">
          <input type="password" v-model="password" placeholder="password">
          <button class="btn-info" @click="login">Login</button>
        </div>
        <div v-else>
          <button class="btn-info" @click="logout">Logout</button>
        </div>
      </div>
    </nav>
    <div class="container" style="position: fixed; right: 5%; z-index: 1000">
      <div class="alert alert-success" v-if="logSuccess">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Success!</strong> Login Success
      </div>
      <div class="alert alert-danger" v-if="logFail">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Failed!</strong> Login Failed : {{this.notif}}
      </div>
    </div>
  </div>  
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginForm',
  props: ['isLogin'],
  data () {
    return {
      logSuccess: false,
      logFail: false,
      emailOrPass: '',
      password: '',
      notif: '',
      baseUrl: 'http://localhost:3000'
    }
  },
  methods: {
    login () {
      console.log('coba login')
      let self = this
      self.notif = ''
      let data = {
        email: self.emailOrPass,
        username: self.emailOrPass,
        password: self.password
      }
      axios({
        method: 'POST',
        url: self.baseUrl + `/users/login`,
        data
      })
        .then(function (response) {
          console.log(response)
          self.logSuccess = true
          let token = response.data.token
          localStorage.setItem('token', token)
          self.$emit('logStat', true)
          self.$router.go()
        })
        .catch(function (err) {
          if (!self.emailOrPass) {
            self.notif = 'email/username is required'
          } else if (!self.password) {
            self.notif = 'password is required'
          } else if (!self.emailOrPass && !self.password) {
            self.notif = 'email/username and password are required'
          } else {
            self.notif = 'Oops, ' + err.response.data.message
          }
          self.logFail = true
          self.$router.go()
          console.log('failed login')
        })
    },
    logout () {
      console.log('You are now disconnected')
      localStorage.clear()
      this.$emit('logStat', false)
      this.$router.push('/')
    }
  }
}
</script>