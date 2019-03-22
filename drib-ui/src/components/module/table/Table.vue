<template>
    <div class="cssys">
        <div class="cssys title">
            <h1>Table 表格</h1>
            <p>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</p>
        </div>
        <div class="cssys content">
            <ul>
                <li>
                    <h2>基本样式</h2>
                    <div class="box">
                        <table-look></table-look>
                    </div>
                </li>
                <li>
                    <h2>使用方法</h2>
                    <div class="navx">
                        <table-con></table-con>
                    </div>
                </li>
                <li>
                    <h2>API</h2>
                    <div class="navx">
                        <table-api></table-api>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>


    import TableLook from "./TableLook";
    import TableCon from "./TableCon";
    import TableApi from "./TableApi";
    export default {
        name: "Table",
        components: {TableApi, TableCon, TableLook},
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
