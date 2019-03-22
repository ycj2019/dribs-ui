<template>
    <div>
        <headers class="anliss"></headers>
        <div class="case-a">
            <router-link to="/anli/anlimo">移动端</router-link>
            <router-link to="/anli/anlipc">PC端</router-link>
        </div>
        <router-view></router-view>
        <div class="foo">
            &copy; 2018 - 2020 drib 版权所有 隐私政策 | 联系我们 QQ:76212031
        </div>
    </div>
</template>

<script>
    import headers from "../commons/headers";

    export default {
        components: {headers},
        name: "alli"
    }
</script>

<style scoped>
    .anliss{
        padding: 0 50px;
    }
    .case-a{
        width: 100%;
        height: 40px;
        text-align: center;
        background: rgba(0,0,0,.7);
        padding: 20px 0;
    }
    .case-a a{
        font-size: 18px;
        display: inline-block;
        border-radius: 4px;
        padding: 5px 20px;
        margin: 0 5px;
        color:  #00a9db;
     }
    .case-a a:hover{
        background: #fff;
        color: #000;
    }
    .case-a .router-link-active{
        background: #fff;
        border-radius: 4px;
        color: #000;
    }
</style>