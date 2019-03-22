<template>
    <pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">db-switch</span>
  <span class="hljs-attr">v-moddb</span>=<span class="hljs-string">"value2"</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">"#13ce66"</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">"#ff4949"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">db-switch</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value1</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">value2</span>: <span class="hljs-literal">true</span>
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</template>

<script>
    export default {
        name: "TrueCon"
    }
</script>

<style scoped>

</style>