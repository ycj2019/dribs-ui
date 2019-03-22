<template>
    <div class="cli">
        <h2>安装</h2>
        <span>推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</span>
        <p>
            <span>npm i drib-ui -S</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "easy"
    }
</script>

<style scoped>
    .cli{
        padding: 30px 0;
    }
    .cli h2{
        font-size: 18px;
        color: #303133;
    }
    .cli span{
        color: #606266;
        line-height: 35px;
        display: block;
        padding-bottom: 15px;
    }
    .cli p{
        width: 500px;
        height: 80px;
        background: #DCDFE6;
        border-radius: 10px;
    }
    .cli p span{
        padding-left: 25px;
        padding-top: 20px;
    }
</style>