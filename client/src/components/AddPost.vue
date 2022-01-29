<template>
  <div>
    <div class="container addpost">
      <div class="row">
        <div class="col-lg-12">
          <h1>Add Post</h1>
        </div>
        <hr />
        <div class="col-lg-12 form">
          <AddForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddForm from "./AddForm.vue";
export default {
  components: {
    AddForm,
  },
};
</script>

<style  scoped>
.addpost{
    padding: 20px;
}
</style>