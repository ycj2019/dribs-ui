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
            <td>string</td>
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
            <td>size</td>
            <td>尺寸</td>
            <td>string</td>
            <td>—</td>
            <td>medium / small / mini</td>
        </tr>
        <tr>
            <td>show-alpha</td>
            <td>是否支持透明度选择</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>color-format</td>
            <td>写入 v-model 的颜色的格式</td>
            <td>string</td>
            <td>hsl / hsv / hex / rgb</td>
            <td>hex（show-alpha 为 false）/ rgb（show-alpha 为 true）</td>
        </tr>
        <tr>
            <td>popper-class</td>
            <td>ColorPicker 下拉框的类名</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>predefine</td>
            <td>预定义颜色</td>
            <td>array</td>
            <td>—</td>
            <td>—</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "ColorApi"
    }
</script>

<style scoped>

</style>