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
            <td>mode</td>
            <td>模式</td>
            <td>string</td>
            <td>horizontal / vertical</td>
            <td>vertical</td>
        </tr>
        <tr>
            <td>collapse</td>
            <td>是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>background-color</td>
            <td>菜单的背景色（仅支持 hex 格式）</td>
            <td>string</td>
            <td>—</td>
            <td>#ffffff</td>
        </tr>
        <tr>
            <td>text-color</td>
            <td>菜单的文字颜色（仅支持 hex 格式）</td>
            <td>string</td>
            <td>—</td>
            <td>#303133</td>
        </tr>
        <tr>
            <td>active-text-color</td>
            <td>当前激活菜单的文字颜色（仅支持 hex 格式）</td>
            <td>string</td>
            <td>—</td>
            <td>#409EFF</td>
        </tr>
        <tr>
            <td>default-active</td>
            <td>当前激活菜单的 index</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>default-openeds</td>
            <td>当前打开的 sub-menu 的 index 的数组</td>
            <td>Array</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>unique-opened</td>
            <td>是否只保持一个子菜单的展开</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>menu-trigger</td>
            <td>子菜单打开的触发方式(只在 mode 为 horizontal 时有效)</td>
            <td>string</td>
            <td>hover / click</td>
            <td>hover</td>
        </tr>
        <tr>
            <td>router</td>
            <td>是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>collapse-transition</td>
            <td>是否开启折叠动画</td>
            <td>boolean</td>
            <td>—</td>
            <td>true</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "navapi"
    }
</script>

<style scoped>
    thead {
        display: table-header-group;
        vertical-align: middle;
        border-color: inherit;
        font-size: 16px;
    }
    tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
        line-height: 40px;
    }
    th{
        padding-left: 10px;
        text-align: left;
        white-space: nowrap;
        color: #909399;
        font-weight: 400;
        border-bottom: 1px solid #dcdfe6;
        max-width: 250px;
        display: table-cell;
        vertical-align: inherit;
    }
    td{
        padding-left: 10px;
        color: #606266;
        border-bottom: 1px solid #dcdfe6;
        max-width: 250px;
        display: table-cell;
        vertical-align: inherit;
    }
</style>