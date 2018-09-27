<template>
  <div>
    <h5 class="card-title">Who to Follow <small><a @click="getRandom">Refresh</a></small></h5>
    <ul id="recently-followed">
      <li v-if="users.length === 0">No User</li>
      <li v-for="user in users" :key="user._id" v-else>
        <div class="media ">
          <img class="d-flex mr-3 rounded-circle" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
          <span class="media-body twit-status">
            <h6 class="mt-0"> {{user.name}} <small>@{{user.username}}</small></h6>

            <button class="btn btn-outline-info">Follow</button>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'WhoFollow',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'getTweets',
      'getUsers'
    ]),
    getRandom () {
      this.getUsers()
    }
  },
  mounted () {
    this.getUsers()
  },
  computed: {
    ...mapState([
      'tweets',
      'users'
    ])
  }
}
</script>