<template>
  <div>
    <div class="container">
      <div  class="row">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="col-lg-3 post-item"
        >
          <Post :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
    };
  },
  components: {
    Post,
  },
  created() {
    axios
      .get("http://localhost:3000/post/all")
      .then((result) => {
        this.posts = result.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.post-item {
  padding: 30px;
}
</style>