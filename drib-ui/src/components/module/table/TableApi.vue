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
            <td>data</td>
            <td>显示的数据</td>
            <td>array</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>height</td>
            <td>Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height
                的值，Table 的高度会受控于外部样式。
            </td>
            <td>string/number</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>max-height</td>
            <td>Table 的最大高度</td>
            <td>string/number</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>stripe</td>
            <td>是否为斑马纹 table</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>border</td>
            <td>是否带有纵向边框</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>size</td>
            <td>Table 的尺寸</td>
            <td>string</td>
            <td>medium / small / mini</td>
            <td>—</td>
        </tr>
        <tr>
            <td>fit</td>
            <td>列的宽度是否自撑开</td>
            <td>boolean</td>
            <td>—</td>
            <td>true</td>
        </tr>
        <tr>
            <td>show-header</td>
            <td>是否显示表头</td>
            <td>boolean</td>
            <td>—</td>
            <td>true</td>
        </tr>
        <tr>
            <td>highlight-current-row</td>
            <td>是否要高亮当前行</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>current-row-key</td>
            <td>当前行的 key，只写属性</td>
            <td>String,Number</td>
            <td>—</td>
            <td>—</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "TableApi"
    }
</script>

<style scoped>

</style>