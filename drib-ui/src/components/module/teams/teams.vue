<template>
    <div class="teams">
        <div class="tuandui">
            <strong>团队成员 :</strong>
        </div>
        <div class="teams">
            <div class="tea">
                <a href="javascript:;"><img src="../../../../static/syxg/img/yu.jpg" alt=""></a>
                <p>yu.Mr </p>
            </div>
            <div class="tea">
                <a href="javascript:;"><img src="../../../../static/syxg/img/xie.png" alt=""></a>
                <p>xie.Mr </p>
            </div>
            <div class="tea">
                <a href="javascript:;"><img src="../../../../static/syxg/img/meng.jpg" alt=""></a>
                <p>meng.Mr </p>
            </div>
            <div class="tea">
                <a href="javascript:;"><img src="../../../../static/syxg/img/zhang.jpg" alt=""></a>
                <p>zhang.Mr </p>
            </div>
            <div class="tea">
                <a href="javascript:;"><img src="../../../../static/syxg/img/liu.jpg" alt=""></a>
                <p>liu.Mr </p>
            </div>
            <div class="tea">
                <a href="javascript:;"><img src="../../../../static/syxg/img/huo.png" alt=""></a>
                <p>huo.Mr </p>
            </div>
        </div>
    </div>
</template>

<script>
    import headers from "../../commons/headers"
    export default {
        name: "teams",
        components:{
          headers
        }
    }
</script>

<style scoped>
.teams .header{
    padding: 0 50px;
}
.tuandui{
    font-size: 26px;
    line-height: 50px;
    padding-left: 30px;
    color: #006eb0;

}
.teams{
    padding: 30px 0;
}
.tea{
    width: auto;
    padding-left: 80px;
}
.tea span{
    display: block;
}
.tea img{
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: linear-gradient(#006eb0,#00a9db,#395ecb);
    margin: 10px;
}
.tea p{
    text-indent: 20px;
}
</style>
