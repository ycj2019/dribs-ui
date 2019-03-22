<template>
    <div class="cssys">
        <div class="cssys title">
            <h1>颜色选择器</h1>
            <p>用于颜色选择。</p>
        </div>
        <div class="cssys content">
            <ul>
                <li>
                    <h2>基本样式</h2>
                    <div class="box">
                        <color-look></color-look>
                    </div>
                </li>
                <li>
                    <h2>使用方法</h2>
                    <div class="navx">
                        <color-con></color-con>
                    </div>
                </li>
                <li>
                    <h2>API</h2>
                    <div class="navx">
                        <color-api></color-api>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import ColorLook from "./ColorLook";
    import ColorCon from "./ColorCon";
    import ColorApi from "./ColorApi";
    export default {
        name: "Colors",
        components: {ColorApi, ColorCon, ColorLook},
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
