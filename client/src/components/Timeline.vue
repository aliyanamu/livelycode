<template>
  <div>
    <h1 v-if="tweets.length === 0">No Tweet</h1>
    <div v-for="tweet in tweets" :key="tweet._id" v-else>
      <div class="row">
        <div class="col-lg-12 col-md-12 timeline-wrapper">
          <div class="media ">
            <img class="d-flex mr-3 rounded-circle" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
            <span class="media-body twit-status">
              <h5 class="mt-0"> {{tweet.author.name}} </h5>
              <p>@{{tweet.author.username}}</p>
              {{tweet.tweet}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'timeline',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'getTweets'
    ])
  },
  mounted () {
    this.getTweets()
  },
  computed: {
    ...mapState([
      'tweets'
    ])
  }
}
</script>