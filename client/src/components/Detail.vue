<template>
  <div class="container">
    <DetailPost :postDetail='postDetail'/>
  </div>
</template>

<script>
import DetailPost from "./DetailPost.vue";
import axios from 'axios'

export default {
    data() {
        return {
            postDetail:[]
        }
    },
  components: {
    DetailPost,
  },
  created() {
    const slug = this.$route.params.slug
    
    axios.get(`http://localhost:3000/post/${slug}`)
        .then((result) => {
            this.postDetail = result.data
        }).catch((err) => {
            console.log(err);        
        });
        
  },
};
</script>

<style lang="scss" scoped>
</style>