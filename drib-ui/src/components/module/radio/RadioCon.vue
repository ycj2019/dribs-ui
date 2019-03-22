<template>
    <pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-group</span> <span class="hljs-attr">v-moddb</span>=<span class="hljs-string">"radio3"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-button</span> <span class="hljs-attr">labdb</span>=<span class="hljs-string">"上海"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-button</span> <span class="hljs-attr">labdb</span>=<span class="hljs-string">"北京"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-button</span> <span class="hljs-attr">labdb</span>=<span class="hljs-string">"广州"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-button</span> <span class="hljs-attr">labdb</span>=<span class="hljs-string">"深圳"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-group</span> <span class="hljs-attr">v-moddb</span>=<span class="hljs-string">"radio4"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-button</span> <span class="hljs-attr">labdb</span>=<span class="hljs-string">"上海"</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-button</span> <span class="hljs-attr">labdb</span>=<span class="hljs-string">"北京"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-button</span> <span class="hljs-attr">labdb</span>=<span class="hljs-string">"广州"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-button</span> <span class="hljs-attr">labdb</span>=<span class="hljs-string">"深圳"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-group</span> <span class="hljs-attr">v-moddb</span>=<span class="hljs-string">"radio5"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-button</span> <span class="hljs-attr">labdb</span>=<span class="hljs-string">"上海"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-button</span> <span class="hljs-attr">labdb</span>=<span class="hljs-string">"北京"</span> <span class="hljs-attr">disabled</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-button</span> <span class="hljs-attr">labdb</span>=<span class="hljs-string">"广州"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-button</span> <span class="hljs-attr">labdb</span>=<span class="hljs-string">"深圳"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-group</span> <span class="hljs-attr">v-moddb</span>=<span class="hljs-string">"radio6"</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-button</span> <span class="hljs-attr">labdb</span>=<span class="hljs-string">"上海"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-button</span> <span class="hljs-attr">labdb</span>=<span class="hljs-string">"北京"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-button</span> <span class="hljs-attr">labdb</span>=<span class="hljs-string">"广州"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">db-radio-button</span> <span class="hljs-attr">labdb</span>=<span class="hljs-string">"深圳"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">radio3</span>: <span class="hljs-string">'上海'</span>,
        <span class="hljs-attr">radio4</span>: <span class="hljs-string">'上海'</span>,
        <span class="hljs-attr">radio5</span>: <span class="hljs-string">'上海'</span>,
        <span class="hljs-attr">radio6</span>: <span class="hljs-string">'上海'</span>
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</template>

<script>
    export default {
        name: "RadioCon"
    }
</script>

<style scoped>

</style>