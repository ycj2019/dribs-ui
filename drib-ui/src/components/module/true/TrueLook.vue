<template>
    <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949"
            class="looks">
    </el-switch>
</template>

<script>
    export default {
        name: "TrueLook",
        data() {
            return {
                value1: true,
                value2: true
            }
        }
    }
</script>

<style scoped>

</style>