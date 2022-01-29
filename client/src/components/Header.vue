<template>
  <div class="head">
    <Topbar/>   
    <div class="container header">
        <div class="row">
        </div>
      <div class="row">
        <div class="col-lg-3 logo"><h1><a @click="goToHome">MEVN Blog</a></h1></div>
        <div class="col-lg-6 search">
            <div class="">
                <input class="search-bar" type="text" placeholder="Searching...">
            </div>
        </div>
        <div class="col-lg-3 account">
            <ul>
                <li>
                    <button @click="addPost" class="addPost"><i class="fa fa-plus"></i> Add Post</button>
                </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from './TopBar.vue'
export default {
    components:{
        Topbar
    },
    methods: {
        goToHome(){
            this.$router.push('/')
        },
        addPost(){
            this.$router.push('/add')
        }
    },
};
</script>

<style scoped>
.head{
    background-color: #35858B;
}
.logo{
    cursor: pointer;
}

.search-bar{
    padding: 5px;
    margin: 10px;
    width: 100%;
    border: none;
        display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0.5px 0.5px 3px #333;
}
.account ul{
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
}
.account ul li{
    list-style: none;
    margin-left: 25px;
}


.addPost{
    background-color: #4FBDBA;
    text-align: center;
    border: 2px solid #072227;
    padding: 5px 10px;
    color: #fff;
}
</style>