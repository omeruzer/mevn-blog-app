<template>
  <div>
    <div class="container addform">
      <div class="row">
        <div class="col-lg-6">
          <form action="">
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
              <input type="text" v-model="content" class="form-control" name="" id="" />
            </div>
            <div class="">
              <input type="submit" class="btn btn-primary addbtn" value="Edit"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';

export default {
    props:["post"],
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