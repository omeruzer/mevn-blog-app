<template>
  <div>
    <TopBar/>
    <Home/>
    <Footer/>
  </div>
</template>

<script>
  import TopBar from './components/TopBar.vue'
  import Footer from './components/Footer.vue'
  import Home from './components/Home.vue'
  export default {
    components:{
      TopBar,
      Home,
      Footer
    }
  }
</script>

<style lang="scss" scoped>

</style>