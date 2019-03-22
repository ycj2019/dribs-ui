<template>
    <div class="bigData">
        <headers> </headers>
        <div class="imgs">
            <h1>大数据实例 ：</h1>
            <div class="tupian">
                <a href="https://huoguoquan.github.io/dashuju/bigdata/tubiao-1/quota.html" target="_blank"><img src="../../../static/syxg/img/biao-3.png"	alt=""><</a>
                <a href="https://huoguoquan.github.io/dashuju/bigdata/tubiao-1/trend.html" target="_blank"><img src="../../../static/syxg/img/biao-1.png" alt=""></a>
            </div>
            <div class="tupian">
                <a href="https://huoguoquan.github.io/dashuju/bigdata/tubiao-2/demo.html" target="_blank"><img src="../../../static/syxg/img/biao-6.png" alt=""></a>
                <a href="https://huoguoquan.github.io/dashuju/bigdata/tubiao-4/index.html" target="_blank"><img src="../../../static/syxg/img/biao-4.png" alt=""></a>
            </div>
            <div class="tupian">
                <a href="https://huoguoquan.github.io/dashuju/bigdata/tubiao-3/index.html" target="_blank"><img src="../../../static/syxg/img/biao-5.png" alt=""></a>
                <a href="https://huoguoquan.github.io/dashuju/bigdata/tubiao-1/NCDindex.html" target="_blank"><img src="../../../static/syxg/img/biao-2.png" alt=""></a>
            </div>
        </div>
        <div class="foo">
            &copy; 2018 - 2020 drib 版权所有 隐私政策 | 联系我们 QQ:76212031
        </div>
    </div>
</template>

<script>
    import headers from "../commons/headers";
    export default {
        name: "bigData",
        components:{
            headers
        }
    }
</script>

<style scoped>
    .bigData{
        background: linear-gradient(270deg,#1a1999,#3992d0,#1a1999);
    }
    .bigData .header{
        padding: 0 50px;
    }
    .imgs{
        padding:0 50px;
    }
    .imgs h1{
        font-size: 20px;
        padding:30px 20px 0 ;
        color: #ffffff;
    }
    .tupian{
        width:100%;
        display: flex;
    }
    .tupian a img{
        display: block;
    }
    .imgs a{
        margin:20px;
        overflow:hidden ;
        width:949px;
        height:430px;
    }
    .imgs img{
        display: block;
        width:100%;
        height:100%;

    }
</style>