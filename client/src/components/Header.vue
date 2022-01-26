<template>
  <div class="head">
    <div class="container header">
      <div class="row">
        <div class="col-lg-3 logo"><h1>MEVN Blog</h1></div>
        <div class="col-lg-6 search">
            <div class="">
                <input class="search-bar" type="text" placeholder="Searching...">
            </div>
        </div>
        <div class="col-lg-3 account">
            <ul>
                <li>
                    <div class="login"><i class="fa fa-user"></i> Login</div>
                </li>
                <li>
                    <div class="register"><i class="fa fa-user-plus"></i> Register</div>
                </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.head{
    background-color: #35858B;
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


.login{
    background-color: #4FBDBA;
    text-align: center;
    border: 2px solid #072227;
    padding: 5px 10px;
    color: #fff;
}

.register{
    background-color: #4FBDBA;
    text-align: center;
    border: 2px solid #072227;
    padding: 5px 10px;
    color: #fff ;
}
</style>