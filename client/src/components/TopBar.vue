<template>
    <div>
        <nav>
            <div class="container">
                <nav>
                    <div class="top-bar">
                        <h3>News</h3>
                        <p>Mevn Blog</p>
                        <ul> 
                            <li><i class="fab fa-facebook"></i></li>
                            <li><i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-youtube"></i></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </nav>
        <Header/>
    </div>
</template>

<script>
  import Header from './Header.vue'

    export default {
        components:{
            Header
        }
    }
</script>

<style scoped>
nav{
    background-color: #072227;
}
.top-bar{   
    display: flex;
    justify-content: space-between;
}

.top-bar p{   
    color: #fff;
}

.top-bar h3{
    color: #fff;
}
i{
    color: white;
}
.top-bar ul{
    display: flex;
    
}
.top-bar ul li{
    list-style: none;
    margin-right: 15px;
}
</style>