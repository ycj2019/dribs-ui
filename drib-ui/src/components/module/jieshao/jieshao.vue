<template>
    <div class="jieshaos">
        <div class="jieshao">
            <img src="../../../../static/syxg/img/logo4.png" alt="">
            <h2>drib-ui</h2>
            <p>基于 vue2.0 方便快捷的 ui 组件库</p>
        </div>
        <h3>drib-ui 简介 :</h3>
        <table class="outline-table" border="1" cellspacing="0" cellpadding="0">
            <tr>
                <td>
                    <b>定位 ：</b>
                </td>
                <td><span>移动端,web端，响应式 ui 组件库</span></td>
                <td>
                    <b>js基础库 ：</b>
                </td>
                <td><span>jQuery</span></td>
            </tr>
            <tr>
                <td><b>兼容 ：</b></td>
                <td><span>兼容主流浏览器，IE仅支持部分功能</span></td>
                <td><b>项目地址 ：</b></td>
                <td><span>drib-ui@GitHub</span></td>
            </tr>
            <tr>
                <td>
                    <b>参考,使用的资源 ：</b>
                </td>
                <td><span>jQuery , swiper , Element , Amaze UI , smltuui</span></td>
                <td><b>适用场景 ：</b></td>
                <td>
                    <span>1.web,移动网站 2.熟悉jQuery 3.兼容性较广 4.适合前端渲染</span>
                </td>
            </tr>
        </table>
        <h3>drib-ui 宣言 :</h3>
        <div class="outline">
            <h1>努力，是制造未来的一切的基础；经验，是所有过去的成果</h1>
            <i>
                drib-ui 汲取了网络上很多优秀的资源,以开源方式回馈网络,让我们的开发更加快捷，同样drib-ui还有很多的不足，发现问题的大佬还希望反馈至我们，谢谢
            </i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "jieshao"
    }
</script>

<style scoped>
    .jieshaos h3{
        padding-top: 20px;
        font-size: 32px;
        line-height: 60px;
        background-image: -webkit-linear-gradient(left, #006eb0, #00a9db 25%, #006eb0 50%, #00a9db 75%, #006eb0);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    .jieshao{
        margin: 0 auto;
        text-align: center;
    }
    .jieshao img{
        display: block;
        width:80px;
        margin: 40px auto 0;
    }
    .jieshao h2{
        font-size: 38px;
        line-height: 55px;
        background-image: -webkit-linear-gradient(left, #006eb0, #00a9db 25%, #006eb0 50%, #00a9db 75%, #006eb0);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    .jieshao p{
        line-height: 30px;
        color: #606266;
    }
    .outline-table{

    }
    .outline-table tr{
        line-height: 40px;
    }
    .outline-table td b{
        text-align: right;
        display: inline-block;
        color: #006eb0;
        width:180px;
    }
    .outline-table td span{
        padding: 0 20px;
    }

    .outline{
        background: #eee;
        padding: 20px 0;
    }
    .outline h1{
        font-size: 30px;
        line-height: 80px;
        text-align: center;
        font-weight: normal;
        color: #303133;
    }
    .outline i{
        font-style: normal;
        display: block;
        font-size: 20px;
        line-height: 50px;
        text-align: center;
        padding: 0 150px;
        color: #606266;
    }
</style>