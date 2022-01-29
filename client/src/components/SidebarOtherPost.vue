<template>
  <div>
    <div class="other-posts">
      <div @click="goToDetail" class="row other-post-link">
        <div class="col-lg-5 other-post-img">
          <img
            src="https://via.placeholder.com/1000"
            alt=""
          />
        </div>
        <div class="col-lg-7">
          <div class="row">
            <div class="col-lg-12 other-post-title">
              <h5>{{otherpost.title}}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 other-post-author">
              <small>{{otherpost.author}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'otherpost'
  ],
  methods: {
    goToDetail(){
      this.$router.push(`${this.otherpost.slug}`)
        .then((result) => {
          console.log(result);
        }).catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>

<style scoped>

.other-posts img{
    width: 100%;
    height: 70%;

}
.other-post-link{
  cursor: pointer;
}
</style>