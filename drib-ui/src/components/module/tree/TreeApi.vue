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
            <td>展示数据</td>
            <td>array</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>empty-text</td>
            <td>内容为空的时候展示的文本</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>node-key</td>
            <td>每个树节点用来作为唯一标识的属性，整棵树应该是唯一的</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>props</td>
            <td>配置选项，具体看下表</td>
            <td>object</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>render-after-expand</td>
            <td>是否在第一次展开某个树节点后才渲染其子节点</td>
            <td>boolean</td>
            <td>—</td>
            <td>true</td>
        </tr>
        <tr>
            <td>load</td>
            <td>加载子树数据的方法，仅当 lazy 属性为true 时生效</td>
            <td>function(node, resolve)</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>render-content</td>
            <td>树节点的内容区的渲染 Function</td>
            <td>Function(h, { node, data, store }</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>highlight-current</td>
            <td>是否高亮当前选中节点，默认值是 false。</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>default-expand-all</td>
            <td>是否默认展开所有节点</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "TreeApi"
    }
</script>

<style scoped>

</style>