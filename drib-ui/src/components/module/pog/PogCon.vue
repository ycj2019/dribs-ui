<template>
    <pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span
            class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
          class="hljs-string">"demonstration"</span>&gt;</span>页数较少时的效果<span class="hljs-tag">&lt;/<span
                class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">db-pagination</span>
    <span class="hljs-attr">layout</span>=<span class="hljs-string">"prev, pager, next"</span>
    <span class="hljs-attr">:total</span>=<span class="hljs-string">"50"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">db-pagination</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
        class="hljs-string">"block"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
          class="hljs-string">"demonstration"</span>&gt;</span>大于 7 页时的效果<span class="hljs-tag">&lt;/<span
                class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">db-pagination</span>
    <span class="hljs-attr">layout</span>=<span class="hljs-string">"prev, pager, next"</span>
    <span class="hljs-attr">:total</span>=<span class="hljs-string">"1000"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">db-pagination</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
</template>

<script>
    export default {
        name: "PogCon"
    }
</script>

<style scoped>

</style>