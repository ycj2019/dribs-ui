<template>
    <div class="cssys">
        <div class="cssys title">
            <h1>树形控件</h1>
            <p>用清晰的层级结构展示信息，可展开或折叠。</p>
        </div>
        <div class="cssys content">
            <ul>
                <li>
                    <h2>基本样式</h2>
                    <div class="box">
                        <tree-look></tree-look>
                    </div>
                </li>
                <li>
                    <h2>使用方法</h2>
                    <div class="navx">
                        <tree-con></tree-con>
                    </div>
                </li>
                <li>
                    <h2>API</h2>
                    <div class="navx">
                        <tree-api></tree-api>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import TreeLook from "./TreeLook";
    import TreeCon from "./TreeCon";
    import TreeApi from "./TreeApi";
    export default {
        name: "Tree",
        components: {TreeApi, TreeCon, TreeLook},
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
