<template>
  <div>
    <div class="container addform">
      <div class="row">
        <div class="col-lg-6">
          <form @submit.prevent="addPost" action="" enctype="multipart/form-data"> 
            <!-- <div class="form">
              <label for="">Image</label>
              <input type="file" v-on:change='imageUploads()' class="form-control" name="" id="" />
            </div> -->
            <div class="form">  
              <label for="">Title</label>
              <input type="text" v-model="title" class="form-control" name="" id="" />
            </div>
            <div class="">
              <label for="">Author</label>
              <input type="text" v-model="author" class="form-control" name="" id="" />
            </div>
            <div class="">  
              <label for="">Content</label>
              <textarea name="" v-model="content" class="form-control" id="" rows="6"></textarea>
            </div>
            <div class="">
              <input type="submit" class="btn btn-success addbtn" value="Add"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            title:'',
            author:'',
            content:'',
        }
    },
    methods: {
        async addPost(){
            const post = {
                title : this.title,
                author : this.author,
                content : this.content,
            }
            
            await axios.post('http://localhost:3000/post/add',post)
                .then(() => {
                  this.$router.push('/')
                }).catch((err) => {
                    console.log(err)
                });
        }
    },

};
</script>

<style scoped>
.addform{
    padding: 20px;
}

.addbtn{
    float: right;
    margin-top: 20px;
}

</style>