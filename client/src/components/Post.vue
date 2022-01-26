<template>
    <div>
        <div class="card" >
            <img src="https://www.dunyaatlasi.com/wp-content/uploads/2018/09/resim-tablo-nasil-okunur.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{post.title}}</h5>
                <p class="card-text">{{post.content}}</p>
                <p class="card-text author">{{post.author}}</p>
                <a href="#" class="btn btn-primary">Read</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:[
            'post'
        ]
    }
</script>

<style scoped>
.card{
    border: 3px solid #35858B;
    box-shadow: 1px 1px 3px #333;
}
.author{
    opacity: 0.8;
}
</style>