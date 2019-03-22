<template>
    <div class="d-i">
        <a href="##"><img src="../../../static/syxg/img/tx.png" alt="" width="100%"/><p class="s-as"><span class="s-asa">GITHUB查看源码</span></p></a>
        <a href="##"><img src="../../../static/syxg/img/qqyd.png" alt="" width="100%"/><p class="s-as"><span class="s-asa">GITHUB查看源码</span></p></a>
        <a href="##"><img src="../../../static/syxg/img/dangdang.jpg" alt="" width="100%"/><p class="s-as"><span class="s-asa">GITHUB查看源码</span></p></a>
        <a href="##"><img src="../../../static/syxg/img/dang.jpg" alt="" width="100%"/><p class="s-as"><span class="s-asa">GITHUB查看源码</span></p></a>
        <a href="##"><img src="../../../static/syxg/img/qqyx.png" alt="" width="100%"/><p class="s-as"><span class="s-asa">GITHUB查看源码</span></p></a>
        <a href="##"><img src="../../../static/syxg/img/jd.jpg" alt="" width="100%"/><p class="s-as"><span class="s-asa">GITHUB查看源码</span></p></a>
    </div>
</template>

<script>
    export default {
        name: "allimo"
    }
</script>

<style scoped>
    .d-i{
        background: #5ec0ff;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0 150px;

    }
    .d-i a{
        position: relative;
        width: 335px;
        height: 594px;
        display: block;
        margin: 20px 30px;
        border-radius: 20px;
    }
    .d-i a img{
        border-radius: 10px;
    }
    .d-i a:hover .s-as{
        opacity: .7;
        transition:.5s;
    }
    .s-as{
        width: 335px;
        height: 594px;
        background: #666;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        text-align:center;
        color: #fff;
        border-radius: 10px;
    }
    .s-asa{
        display: block;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #000;
        z-index: 999;
        position: absolute;
        opacity: 1;
        top: 50%;
        margin-top: -25px;
    }
</style>