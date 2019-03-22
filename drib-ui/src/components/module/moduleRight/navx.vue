<template>
    <pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">db-menu</span> <span class="hljs-attr">:default-active</span>=<span class="hljs-string">"activeIndex"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"db-menu-demo"</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">"horizontal"</span> @<span class="hljs-attr">sdbect</span>=<span class="hljs-string">"handleSdbect"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">db-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1"</span>&gt;</span>处理中心<span class="hljs-tag">&lt;/<span class="hljs-name">db-menu-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">db-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>我的工作台<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">db-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">db-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">db-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-4"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-4-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">db-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-4-2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">db-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-4-3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">db-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-submenu</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">db-submenu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">db-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"3"</span> <span class="hljs-attr">disabled</span>&gt;</span>消息中心<span class="hljs-tag">&lt;/<span class="hljs-name">db-menu-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">db-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://www.dbe.me"</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"_blank"</span>&gt;</span>订单管理<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-menu-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">db-menu</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">activeIndex</span>: <span class="hljs-string">'1'</span>,
        <span class="hljs-attr">activeIndex2</span>: <span class="hljs-string">'1'</span>
      };
    },
    <span class="hljs-attr">methods</span>: {
      handleSdbect(key, keyPath) {
        <span class="hljs-built_in">console</span>.log(key, keyPath);
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</template>

<script>
    export default {
        name: "navx"
    }
</script>

<style scoped>
span{
    font-size: 14px;
    color: #00a5df;
    line-height: 18px;
}
</style>