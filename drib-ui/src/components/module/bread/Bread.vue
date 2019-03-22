<template>
    <div class="cssys">
        <div class="cssys title">
            <h1>面包屑</h1>
            <p>显示当前页面的路径，快速返回之前的任意页面</p>
        </div>
        <div class="cssys content">
            <ul>
                <li>
                    <h2>基本样式</h2>
                    <div class="box">
                        <bread-look></bread-look>
                    </div>
                </li>
                <li>
                    <h2>使用方法</h2>
                    <div class="navx">
                        <bread-con></bread-con>
                    </div>
                </li>
                <li>
                    <h2>API</h2>
                    <div class="navx">
                        <bread-api></bread-api>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import BreadLook from "./BreadLook";
    import BreadCon from "./BreadCon";
    import BreadApi from "./BreadApi";
    export default {
        name: "Bread",
        components: {BreadApi, BreadCon, BreadLook},
    }
</script>

<style>
    h2 {
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .box {
        margin-top: 20px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        overflow: hidden;
    }

    .content i{
        display: initial;
        line-height: 10px;

    }
    .content span {
        color: #1c51a1;
    }
    .navx {
        border-left: 2px solid #ccc;
        border-right: 2px solid #ccc;
        padding: 20px 15px;
        background: #eee;
        border-radius: 10px;
        margin-bottom: 20px;
    }
</style>
