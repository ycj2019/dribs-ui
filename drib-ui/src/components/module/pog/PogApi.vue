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
            <td>small</td>
            <td>是否使用小型分页样式</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>background</td>
            <td>是否为分页按钮添加背景色</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>page-size</td>
            <td>每页显示条目个数，支持 .sync 修饰符</td>
            <td>number</td>
            <td>—</td>
            <td>10</td>
        </tr>
        <tr>
            <td>total</td>
            <td>总条目数</td>
            <td>number</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>page-count</td>
            <td>总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性</td>
            <td>Number</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>pager-count</td>
            <td>页码按钮的数量，当总页数超过该值时会折叠</td>
            <td>number</td>
            <td>大于等于 5 且小于等于 21 的奇数</td>
            <td>7</td>
        </tr>
        <tr>
            <td>current-page</td>
            <td>当前页数，支持 .sync 修饰符</td>
            <td>number</td>
            <td>—</td>
            <td>1</td>
        </tr>
        <tr>
            <td>layout</td>
            <td>组件布局，子组件名用逗号分隔</td>
            <td>String</td>
            <td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>,
                <code>-&gt;</code>, <code>total</code>, <code>slot</code></td>
            <td>'prev, pager, next, jumper, -&gt;, total'</td>
        </tr>
        <tr>
            <td>page-sizes</td>
            <td>每页显示个数选择器的选项设置</td>
            <td>number[]</td>
            <td>—</td>
            <td>[10, 20, 30, 40, 50, 100]</td>
        </tr>
        <tr>
            <td>popper-class</td>
            <td>每页显示个数选择器的下拉框类名</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>prev-text</td>
            <td>替代图标显示的上一页文字</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>next-text</td>
            <td>替代图标显示的下一页文字</td>
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
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "PogApi"
    }
</script>

<style scoped>

</style>