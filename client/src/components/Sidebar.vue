<template>
  <div>
    <div class="col-lg-12">
      <div class="other-posts-text">
        <h2>Other Posts</h2>
        <hr>
      </div>
      <div v-for="(otherpost,index) in otherposts" :key="index" class="other-posts-items">
          <OtherPosts :otherpost='otherpost'/>
      </div>
    </div>
  </div>
</template>

<script>
import OtherPosts from "./SidebarOtherPost.vue";
import axios from 'axios'
export default {
  data() {
    return {
      otherposts:[]
    }
  },
  components: {
    OtherPosts,
  },
  created() {
    axios.post('http://localhost:3000/post/other')
      .then((result) => {
        this.otherposts = result.data
      }).catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>

.other-posts-text{
    margin-bottom: 10px;
}
</style>