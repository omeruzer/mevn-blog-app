<template>
  <div>
    <div class="post-box">
      <div class="row post-detail">
        <div class="col-lg-12 box">
          <div class="row titleAndDelete">
            <div class="trash">
              <button @click="editPost" class="btn btn-primary"><i class="fa fa-edit"></i> Edit</button>
              <button @click="removePost" class="btn btn-danger"><i class="fa fa-trash"></i> Delete</button>
            </div>
            <div class="">
              <div class="title">
                <h1>{{ postDetail[0].title }}</h1>
              </div>
              <div class="author">
                <span>{{ postDetail[0].author }}</span>
              </div>
            </div>
          </div>
          <hr />
          <br />
          <div class="content">
            <p>
              {{ postDetail[0].content }}
            </p>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  props: ["postDetail"],
  methods: {
    async removePost(){
      await axios.delete(`http://localhost:3000/post/${this.postDetail[0].slug}`)
      this.$router.push('/')
    },
    editPost(){
      this.$router.push(`/edit/${this.postDetail[0].slug}`) 
    }
  },
      mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isLoadimg = true;
      }
    };
  },
};
</script>

<style scoped>
.post-img {
  width: 100%;
  height: 450px;
}

.author span {
  color: #777777;
}
.titleAndDelete {
  display: flex;
  justify-content: space-between;
}
.trash button{
  float: right;
  margin-right:10px;
}

.post-box{
  scroll-behavior: smooth;
  overflow:scroll;
  height:auto;
    overflow-y: hidden;
  overflow-x: hidden; 
}
</style>