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
            <td>effect</td>
            <td>默认提供的主题</td>
            <td>String</td>
            <td>dark/light</td>
            <td>dark</td>
        </tr>
        <tr>
            <td>content</td>
            <td>显示的内容，也可以通过 <code>slot#content</code> 传入 DOM</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>placement</td>
            <td>Tooltip 的出现位置</td>
            <td>String</td>
            <td>
                top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end
            </td>
            <td>bottom</td>
        </tr>
        <tr>
            <td>value / v-model</td>
            <td>状态是否可见</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>Tooltip 是否可用</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>offset</td>
            <td>出现位置的偏移量</td>
            <td>Number</td>
            <td>—</td>
            <td>0</td>
        </tr>
        <tr>
            <td>transition</td>
            <td>定义渐变动画</td>
            <td>String</td>
            <td>—</td>
            <td>el-fade-in-linear</td>
        </tr>
        <tr>
            <td>visible-arrow</td>
            <td>是否显示 Tooltip 箭头，更多参数可见<a href="https://github.com/element-component/vue-popper">Vue-popper</a></td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
        </tr>
        <tr>
            <td>popper-options</td>
            <td><a href="https://popper.js.org/documentation.html">popper.js</a> 的参数</td>
            <td>Object</td>
            <td>参考 <a href="https://popper.js.org/documentation.html">popper.js</a> 文档</td>
            <td>{ boundariesElement: 'body', gpuAcceleration: false }</td>
        </tr>
        <tr>
            <td>open-delay</td>
            <td>延迟出现，单位毫秒</td>
            <td>Number</td>
            <td>—</td>
            <td>0</td>
        </tr>
        <tr>
            <td>manual</td>
            <td>手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>popper-class</td>
            <td>为 Tooltip 的 popper 添加类名</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>enterable</td>
            <td>鼠标是否可进入到 tooltip 中</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
        </tr>
        <tr>
            <td>hide-after</td>
            <td>Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏</td>
            <td>number</td>
            <td>—</td>
            <td>0</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "TooltipApi"
    }
</script>

<style scoped>

</style>