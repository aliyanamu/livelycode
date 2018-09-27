<template>
  <div>
    <div class="row">
      <div class="col-lg-12 col-md-12 mb-12 form-horizontal">
        <div class="form-group">
          <textarea class="form-control" v-model="input" placeholder="What's happening?" rows="3"></textarea>
        </div>
        <div class="form-group">
          <button class="btn-info" @click="addTweet(input)">Post</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PostTweet',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    ...mapActions([
      'getTweets',
      'getUsers',
      'addTweet'
    ])
  },
  computed: {
    ...mapState([
      'tweets',
      'users'
    ])
  }
}
</script>