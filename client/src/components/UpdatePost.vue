<template>
  <div>
    <div class="container addpost">
      <div class="row">
        <div class="col-lg-12">
          <h1>Update Post</h1>
        </div>
        <hr />
        <div class="col-lg-12 form">
          <UpdateForm :post='post' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UpdateForm from "./UpdateForm.vue";
import axios from "axios";
export default {
  data() {
    return {
      post: {
        title: "",
        author: "",
        content: "",
      },
    };
  },
  components: {
    UpdateForm,
  },
  methods: {
    async fetchData() {
      const slug = this.$route.params.slug;

      await axios
        .get(`http://localhost:3000/post/${slug}`)
        .then((result) => {
          this.post = result.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style  scoped>
.addpost {
  padding: 20px;
}
</style>