<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <!-- Profile -->
          <Status/>
          <!-- Search Zone -->
          <Search/>

          <div class="card  mb-3" style="max-width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Recently Followed</h5>
              <ul id="recently-followed">
                <li>
                  <a href="#">infobandung</a>
                </li>
                <li>
                  <a href="#">pramborsfm</a>
                </li>
                <li>
                  <a href="#">thebalibible</a>
                </li>
                <li>
                  <a href="#">threewisemonkeys</a>
                </li>
                <li>
                  <a href="#">sushitei</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <!-- /.col-lg-3 -->

        <div class="col-lg-6">

          <!-- Create Area -->
          <PostTweet/>
          <hr>

          <!-- Timeline Zone -->
          <Timeline/>
          <!-- /.row -->

        </div>
        <!-- /.col-lg-6 -->

        <!-- Who to Follow -->
        <div class="col-lg-3">
          <div class="card  mb-3" style="max-width: 18rem;">
            <div class="card-body who-to-follow">
            <WhoFollow/>
            </div>
          </div>
        </div>
        <!-- /.col-lg-3 -->

      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->
  </div>
</template>

<script>
// @ is an alias to /src
import Timeline from '@/components/Timeline.vue'
import Search from '@/components/Search.vue'
import WhoFollow from '@/components/WhoFollow.vue'
import PostTweet from '@/components/PostTweet.vue'
import Status from '@/components/Status.vue'

export default {
  name: 'home',
  components: {
    Timeline,
    Search,
    WhoFollow,
    PostTweet,
    Status
  }
}
</script>
