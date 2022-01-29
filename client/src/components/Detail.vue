<template>
  <div class="container">
    <div class="row page-box">
      <div class="col-lg-9">
        <DetailPost :postDetail="postDetail" />
      </div>
      <div class="col-lg-3">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import DetailPost from "./DetailPost.vue";
import Sidebar from "./Sidebar.vue";
import axios from "axios";

export default {
  methods: {
    goToBack() {
      this.$router.push("/");
    },
    fetchData() {
      const slug = this.$route.params.slug;

      axios
        .get(`http://localhost:3000/post/${slug}`)
        .then((result) => {
          this.postDetail = result.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  data() {
    return {
      postDetail: [],
    };
  },
  watch: {
      '$route' : 'fetchData'
  },
  components: {
    DetailPost,
    Sidebar,
  },
  created() {
      this.fetchData()
  },
};
</script>

<style scoped>
.page-box {
  padding: 20px;
}

.back {
  padding-top: 30px;
  padding-left: 30px;
}
</style>