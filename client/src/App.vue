<template>
  <div >
    <Header/>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
  export default {
    components:{
      Header,
      Footer
    }
  }
</script>

<style scoped>

</style>