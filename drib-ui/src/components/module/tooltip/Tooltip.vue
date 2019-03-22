<template>
    <div class="cssys">
        <div class="cssys title">
            <h1>文字提示</h1>
            <p>常用于展示鼠标 hover 时的提示信息。</p>
        </div>
        <div class="cssys content">
            <ul>
                <li>
                    <h2>基本样式</h2>
                    <div class="box">
                        <tooltip-look></tooltip-look>
                    </div>
                </li>
                <li>
                    <h2>使用方法</h2>
                    <div class="navx">
                        <tooltip-con></tooltip-con>
                    </div>
                </li>
                <li>
                    <h2>API</h2>
                    <div class="navx">
                        <tooltip-api></tooltip-api>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import TooltipLook from "./TooltipLook";
    import TooltipCon from "./TooltipCon";
    import TooltipApi from "./TooltipApi";
    export default {
        name: "Tooltip",
        components: {TooltipApi, TooltipCon, TooltipLook},
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
