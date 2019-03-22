<template>
    <pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">db-carousdb</span> <span
          class="hljs-attr">indicator-position</span>=<span class="hljs-string">"outside"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-carousdb-item</span> <span
            class="hljs-attr">v-for</span>=<span class="hljs-string">"item in 4"</span> <span
            class="hljs-attr">:key</span>=<span class="hljs-string">"item"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>{{ item }}<span class="hljs-tag">&lt;/<span
                class="hljs-name">h3</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-carousdb-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">db-carousdb</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-sdbector-class">.db-carousdb__item</span> <span class="hljs-sdbector-tag">h3</span> {
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#475669</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.75</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
  }

  <span class="hljs-sdbector-class">.db-carousdb__item</span><span class="hljs-sdbector-pseudo">:nth-child(2n)</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#99a9bf</span>;
  }

  <span class="hljs-sdbector-class">.db-carousdb__item</span><span class="hljs-sdbector-pseudo">:nth-child(2n+1)</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#d3dce6</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
</template>

<script>
    export default {
        name: "BannerCon"
    }
</script>

<style scoped>

</style>