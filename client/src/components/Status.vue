<template>
  <div>
    <div class="twPc-div">
      <a class="twPc-bg twPc-block bg-info"></a>
      <div>
        <a title="Mert S. Kaplan" href="https://twitter.com/mertskaplan" class="twPc-avatarLink">
          <img alt="Mert S. Kaplan" src="https://mertskaplan.com/wp-content/plugins/msk-twprofilecard/img/mertskaplan.jpg" class="twPc-avatarImg">
        </a>

        <div class="twPc-divUser">
          <div class="twPc-divName">
            <a href="https://twitter.com/mertskaplan"> {{self.name}} </a>
          </div>
          <span>
            <a href="https://twitter.com/mertskaplan">@<span> {{self.username}} </span></a>
          </span>
        </div>

        <div class="twPc-divStats">
          <ul class="twPc-Arrange">
            <li class="twPc-ArrangeSizeFit">
              <a href="https://twitter.com/mertskaplan" title="9.840 Tweet">
                <span class="twPc-StatLabel twPc-block">Tweets</span>
                <span class="twPc-StatValue"> {{self.tweetlist.length}} </span>
              </a>
            </li>
            <li class="twPc-ArrangeSizeFit">
              <a href="https://twitter.com/mertskaplan/following" title="885 Following">
                <span class="twPc-StatLabel twPc-block">Following</span>
                <span class="twPc-StatValue">885</span>
              </a>
            </li>
            <li class="twPc-ArrangeSizeFit">
              <a href="https://twitter.com/mertskaplan/followers" title="1.810 Followers">
                <span class="twPc-StatLabel twPc-block">Followers</span>
                <span class="twPc-StatValue">1.810</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Status',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    ...mapActions([
      'getTweets',
      'getUsers',
      'addTweet',
      'getSelf'
    ])
  },
  mounted () {
    this.getSelf()
  },
  computed: {
    ...mapState([
      'tweets',
      'users',
      'self'
    ])
  },
  watch: {
    tweets () {
      this.getSelf()
    }
  }
}
</script>