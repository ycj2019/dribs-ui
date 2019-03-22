<template>
    <div class="cssys">
        <div class="cssys title">
            <h1>按钮</h1>
            <p>常用的操作按钮。</p>
        </div>
        <div class="cssys content">
            <ul>
                <li>
                    <h2>基本样式</h2>
                    <div class="box">
                        <button-look></button-look>
                    </div>
                </li>
                <li>
                    <h2>使用方法</h2>
                    <div class="navx">
                        <button-con></button-con>
                    </div>
                </li>
                <li>
                    <h2>API</h2>
                    <div class="navx">
                        <button-api></button-api>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import ButtonLook from "./ButtonLook";
    import ButtonCon from "./ButtonCon";
    import ButtonApi from "./ButtonApi";
    export default {
        name: "Buttonn",
        components: {ButtonApi, ButtonCon, ButtonLook},
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
