<template>
    <div id="s-a">
        <div class="box" id="box">
            <ul id="list" class="list">
                <li class="li"><a href="https://msstry.github.io/case/hq/index.html"><img src="/static/syxg/img/qh.png" alt=""></a></li>
                <li class="li"><a href="https://msstry.github.io/case/chinajade/index.html"><img src="/static/syxg/img/hty.png" alt=""></a></li>
                <li class="li"><a href="https://msstry.github.io/case/dhlc/index.html"><img src="/static/syxg/img/dhlc.png" alt=""></a></li>
                <li class="li"><a href="https://msstry.github.io/case/sn/sony1.html"><img src="/static/syxg/img/sn.png" alt=""></a></li>
                <li class="li"><a href="https://msstry.github.io/case/okbuy/index.html"><img src="/static/syxg/img/haole.png" alt=""></a></li>
            </ul>
            <div class="prev"></div>
            <div class="next"></div>
        </div>
    </div>
</template>

<script>
    import  "../../../static/syxg/js/slide"
    export default {
        name: "anlipc",
        mounted(){
            $("#box").swiper({time:3000,base:false,ratio:290/163,easeType:"rotateInUpRight"})
        }
    }
</script>

<style scoped>
    #s-a{
        background: #5ec0ff;
        height: 100%;
        width: 100%;
        padding-top: 20px;
    }
    .box{
        overflow: hidden;
        position: relative;
        width:100%;
        margin: 0 auto 5% auto;
        border-radius: 20px;
    }
    .box{
        max-width: 1000px;  /***   这里的max-width值就是图片的宽度，暂不支持百分比   ***/
    }
    li{
        float: left;
        list-style: none;
    }
    ul{
        position: relative;
        left: 0;
    }
    .next{
        cursor:pointer;
        opacity: 0;
        position: absolute;
        right: 0;
        background: url("../../../static/syxg/img/shutter_nextBtn.png") no-repeat 0 bottom;
        width: 45px;
        border-radius: 50%;
        height: 45px;
        display: block;
        line-height: 80px;
    }
    .prev{
        cursor:pointer;
        opacity: 0;
        background: url("../../../static/syxg/img/shutter_prevBtn.png") no-repeat 0 bottom;
        display: block;
        border-radius: 50%;
        position: absolute;
        width: 45px;
        height: 45px;
        text-align: center;
        line-height: 80px;
    }
    .prev,.next{
        transition: all 0.5s;
    }
    .next:hover,.prev:hover{
        -webkit-transform: scale(1.2,1.2);
        -moz-transform: scale(1.2,1.2);
        -ms-transform: scale(1.2,1.2);
        -o-transform: scale(1.2,1.2);
        transform: scale(1.2,1.2);
        opacity: 1!important;
        transition: all 0.3s;
    }

</style>