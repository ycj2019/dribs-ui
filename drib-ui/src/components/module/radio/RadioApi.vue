<template>
    <table>
        <thead>
        <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>value / v-model</td>
            <td>绑定值</td>
            <td>string / number / boolean</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>label</td>
            <td>Radio 的 value</td>
            <td>string / number / boolean</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>border</td>
            <td>是否显示边框</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>size</td>
            <td>Radio 的尺寸，仅在 border 为真时有效</td>
            <td>string</td>
            <td>medium / small / mini</td>
            <td>—</td>
        </tr>
        <tr>
            <td>name</td>
            <td>原生 name 属性</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "RadioApi"
    }
</script>

<style scoped>

</style>