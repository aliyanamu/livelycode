<template>
  <div>
    <div class="card  mb-3" style="max-width: 18rem;">
      <div class="card-body">
        <input type="text" v-model="input" placeholder="Search...">
        <button class="btn-info" @click="getTweets(input)">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'search',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    ...mapActions([
      'getTweets'
    ])
  },
  computed: {
    ...mapState([
      'tweets'
    ])
  },
  watch: {
  }
}
</script>