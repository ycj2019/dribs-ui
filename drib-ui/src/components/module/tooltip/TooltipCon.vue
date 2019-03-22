<template>
    <pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span
            class="hljs-attr">class</span>=<span class="hljs-string">"box"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
          class="hljs-string">"top"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-tooltip</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span
            class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Top Left 提示文字"</span> <span
            class="hljs-attr">placement</span>=<span class="hljs-string">"top-start"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-button</span>&gt;</span>上左<span class="hljs-tag">&lt;/<span
                class="hljs-name">db-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-tooltip</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-tooltip</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span
            class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Top Center 提示文字"</span> <span
            class="hljs-attr">placement</span>=<span class="hljs-string">"top"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-button</span>&gt;</span>上边<span class="hljs-tag">&lt;/<span
                class="hljs-name">db-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-tooltip</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-tooltip</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span
            class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Top Right 提示文字"</span> <span
            class="hljs-attr">placement</span>=<span class="hljs-string">"top-end"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-button</span>&gt;</span>上右<span class="hljs-tag">&lt;/<span
                class="hljs-name">db-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-tooltip</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
          class="hljs-string">"left"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-tooltip</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span
            class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Left Top 提示文字"</span> <span
            class="hljs-attr">placement</span>=<span class="hljs-string">"left-start"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-button</span>&gt;</span>左上<span class="hljs-tag">&lt;/<span
                class="hljs-name">db-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-tooltip</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-tooltip</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span
            class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Left Center 提示文字"</span> <span
            class="hljs-attr">placement</span>=<span class="hljs-string">"left"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-button</span>&gt;</span>左边<span class="hljs-tag">&lt;/<span
                class="hljs-name">db-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-tooltip</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-tooltip</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span
            class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Left Bottom 提示文字"</span> <span
            class="hljs-attr">placement</span>=<span class="hljs-string">"left-end"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-button</span>&gt;</span>左下<span class="hljs-tag">&lt;/<span
                class="hljs-name">db-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-tooltip</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
          class="hljs-string">"right"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-tooltip</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span
            class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Right Top 提示文字"</span> <span
            class="hljs-attr">placement</span>=<span class="hljs-string">"right-start"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-button</span>&gt;</span>右上<span class="hljs-tag">&lt;/<span
                class="hljs-name">db-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-tooltip</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-tooltip</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span
            class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Right Center 提示文字"</span> <span
            class="hljs-attr">placement</span>=<span class="hljs-string">"right"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-button</span>&gt;</span>右边<span class="hljs-tag">&lt;/<span
                class="hljs-name">db-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-tooltip</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-tooltip</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span
            class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Right Bottom 提示文字"</span> <span
            class="hljs-attr">placement</span>=<span class="hljs-string">"right-end"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-button</span>&gt;</span>右下<span class="hljs-tag">&lt;/<span
                class="hljs-name">db-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-tooltip</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
          class="hljs-string">"bottom"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-tooltip</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span
            class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Bottom Left 提示文字"</span> <span
            class="hljs-attr">placement</span>=<span class="hljs-string">"bottom-start"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-button</span>&gt;</span>下左<span class="hljs-tag">&lt;/<span
                class="hljs-name">db-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-tooltip</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-tooltip</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span
            class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Bottom Center 提示文字"</span> <span
            class="hljs-attr">placement</span>=<span class="hljs-string">"bottom"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-button</span>&gt;</span>下边<span class="hljs-tag">&lt;/<span
                class="hljs-name">db-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-tooltip</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-tooltip</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span
            class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Bottom Right 提示文字"</span> <span
            class="hljs-attr">placement</span>=<span class="hljs-string">"bottom-end"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-button</span>&gt;</span>下右<span class="hljs-tag">&lt;/<span
                class="hljs-name">db-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-tooltip</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="undefined">
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
</template>

<script>
    export default {
        name: "TooltipCon"
    }
</script>

<style scoped>

</style>