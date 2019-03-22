<template>
    <pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">db-color-picker</span> <span
            class="hljs-attr">v-model</span>=<span class="hljs-string">"color4"</span>&gt;</span><span class="hljs-tag">&lt;/<span
            class="hljs-name">db-color-picker</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">db-color-picker</span> <span class="hljs-attr">v-model</span>=<span
        class="hljs-string">"color4"</span> <span class="hljs-attr">size</span>=<span
        class="hljs-string">"medium"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-color-picker</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">db-color-picker</span> <span class="hljs-attr">v-model</span>=<span
        class="hljs-string">"color4"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span><span
                class="hljs-tag">&lt;/<span class="hljs-name">db-color-picker</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">db-color-picker</span> <span class="hljs-attr">v-model</span>=<span
        class="hljs-string">"color4"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span>&gt;</span><span
                class="hljs-tag">&lt;/<span class="hljs-name">db-color-picker</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">color4</span>: <span class="hljs-string">'#409EFF'</span>
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</template>

<script>
    export default {
        name: "ColorCon"
    }
</script>

<style scoped>

</style>