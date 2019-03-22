<template>
    <div class="butl">
    <el-row class="buts">
        <el-button>默认按钮</el-button>
        <el-button size="medium">中等按钮</el-button>
        <el-button size="small">小型按钮</el-button>
        <el-button size="mini">超小按钮</el-button>
    </el-row>
    <el-row>
        <el-button round>默认按钮</el-button>
        <el-button size="medium" round>中等按钮</el-button>
        <el-button size="small" round>小型按钮</el-button>
        <el-button size="mini" round>超小按钮</el-button>
    </el-row>
    </div>
</template>

<script>
    export default {
        name: "ButtonLook"
    }
</script>

<style scoped>
.butl{
    margin: 20px;
}
    .buts{
        margin-bottom: 20px;
    }
</style>