<template>
  <div>
    <!-- http://via.placeholder.com/1000  920675-070A0560.jpg -->
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">
          {{
            !post.content.length > 500
              ? post.content
              : post.content.slice(0, 20) + "..."
          }}
        </p>
        <p class="card-text author">{{ post.author }}</p>
        <a @click="goToDetail" class="btn btn-primary">Read</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post",'url'],
  methods: {
    goToDetail() {
      this.$router.push(`/${this.post.slug}`);
    },
    created() {
      
    },
  },
};
</script>

<style scoped>
.card {
  border: 3px solid #35858b;
  box-shadow: 1px 1px 3px #333;
}
.author {
  opacity: 0.8;
}
</style>