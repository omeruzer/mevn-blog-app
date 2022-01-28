<template>
    <div>
        <div class="post-box">
            <div class="row">
                <div class="col-lg-3">
                    <a @click="goToBack" class="btn btn-primary"><i class="fa fa-arrow-left"></i> Geri</a>
                </div>
            </div>
            <div class="row post-detail">
                <div class="col-lg-8 box">
                    <img class="post-img" src="https://www.dunyaatlasi.com/wp-content/uploads/2018/09/resim-tablo-nasil-okunur.jpg" >
                    <div class="title">
                        <h1>{{postDetail[0].title}} </h1>
                    </div>
                    <div class="author">
                        <span>{{postDetail[0].author}}</span>
                    </div>
                    <div class="content">
                        <p>
                            {{postDetail[0].content}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:[
            'postDetail'
        ],
        methods: {
            goToBack(){
                this.$router.push('/')
            }
        },
    }
</script>

<style scoped>
.post-img{
    width: 100%;
    height: 450px;
    
}

.post-detail{
    margin-top: 20px;
}

.post-box{
    padding: 20px;
}

.box{
    margin: auto;
}

.author span{
    color: #777777;
}

</style>