<template>
    <div class="cssys">
        <div class="cssys title">
            <h1>开关</h1>
            <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
        </div>
        <div class="cssys content">
            <ul>
                <li>
                    <h2>基本样式</h2>
                    <div class="box">
                        <true-look></true-look>
                    </div>
                </li>
                <li>
                    <h2>使用方法</h2>
                    <div class="navx">
                        <true-con></true-con>
                    </div>
                </li>
                <li>
                    <h2>API</h2>
                    <div class="navx">
                        <true-api></true-api>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import TrueLook from "./TrueLook";
    import TrueCon from "./TrueCon";
    import TrueApi from "./TrueApi";
    export default {
        name: "True",
        components: {TrueApi, TrueCon, TrueLook},
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
