<template>
    <div class="cssys">
        <div class="cssys title">
            <h1>分页</h1>
            <p>当数据量过多时，使用分页分解数据。</p>
        </div>
        <div class="cssys content">
            <ul>
                <li>
                    <h2>基本样式</h2>
                    <div class="box">
                        <pog-look></pog-look>
                    </div>
                </li>
                <li>
                    <h2>使用方法</h2>
                    <div class="navx">
                        <pog-con></pog-con>
                    </div>
                </li>
                <li>
                    <h2>API</h2>
                    <div class="navx">
                        <pog-api></pog-api>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import PogLook from "./PogLook";
    import PogCon from "./PogCon";
    import PogApi from "./PogApi";
    export default {
        name: "Pog",
        components: {PogApi, PogCon, PogLook},
    }
</script>

<style scoped>
    h2 {
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .box {
        margin-top: 20px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        overflow: hidden;
        width: 820px;
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
