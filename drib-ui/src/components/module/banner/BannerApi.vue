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
            <td>height</td>
            <td>高度</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>initial-index</td>
            <td>初始状态激活的幻灯片的索引，从 0 开始</td>
            <td>number</td>
            <td>—</td>
            <td>0</td>
        </tr>
        <tr>
            <td>trigger</td>
            <td>指示器的触发方式</td>
            <td>string</td>
            <td>click</td>
            <td>—</td>
        </tr>
        <tr>
            <td>autoplay</td>
            <td>是否自动切换</td>
            <td>boolean</td>
            <td>—</td>
            <td>true</td>
        </tr>
        <tr>
            <td>interval</td>
            <td>自动切换的时间间隔，单位为毫秒</td>
            <td>number</td>
            <td>—</td>
            <td>3000</td>
        </tr>
        <tr>
            <td>indicator-position</td>
            <td>指示器的位置</td>
            <td>string</td>
            <td>outside/none</td>
            <td>—</td>
        </tr>
        <tr>
            <td>arrow</td>
            <td>切换箭头的显示时机</td>
            <td>string</td>
            <td>always/hover/never</td>
            <td>hover</td>
        </tr>
        <tr>
            <td>type</td>
            <td>走马灯的类型</td>
            <td>string</td>
            <td>card</td>
            <td>—</td>
        </tr>
        <tr>
            <td>loop</td>
            <td>是否循环显示</td>
            <td>boolean</td>
            <td>-</td>
            <td>true</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "BannerApi"
    }
</script>

<style>
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