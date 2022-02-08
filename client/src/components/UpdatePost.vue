<template>
  <div>
    <div class="container addpost">
      <div class="row">
        <div class="col-lg-12">
          <h1>Update Post</h1>
        </div>
        <hr />
        <div class="col-lg-12 form">
          <div>
            <div class="container addform">
              <div class="row">
                <div class="col-lg-6">
                  <form @submit.prevent="updatePost" action="">
                    <div class="form">
                      <label for="">Title</label>
                      <input type="text" class="form-control" v-model="title" />
                    </div>
                    <div class="">
                      <label for="">Author</label>
                      <input
                        type="text"
                        v-model="author"
                        class="form-control"
                      />
                    </div>
                    <div class="">
                      <label for="">Content</label>
                      <input
                        type="text"
                        v-model="content"
                        class="form-control"
                      />
                    </div>
                    <div class="">
                      <input
                        type="submit"
                        class="btn btn-primary addbtn"
                        value="Edit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      author: "",
      content: "",
    };
  },

  methods: {

    async fetchData() {
      const slug = this.$route.params.slug;
      await axios
        .get(`http://localhost:3000/post/${slug}`)
        .then((result) => {
          this.title = result.data[0].title;
          this.author = result.data[0].author;
          this.content = result.data[0].content;
          //console.log(this.post);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    updatePost() {
      const slug = this.$route.params.slug;

      const post = {
        title: this.title,
        author: this.author,
        content: this.content,
      };

      axios.put(`http://localhost:3000/post/${slug}`, post)
        .then(() => {
          this.$router.push('/')
        }).catch((err) => {
          console.log(`!!!!!!!${err}!!!!!!`);
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

.addform {
  padding: 20px;
}

.addbtn {
  float: right;
  margin-top: 20px;
}
</style>