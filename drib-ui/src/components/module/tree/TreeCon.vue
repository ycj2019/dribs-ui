<template>
    <pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">db-tree</span> <span
            class="hljs-attr">:data</span>=<span class="hljs-string">"data"</span> <span class="hljs-attr">:props</span>=<span
            class="hljs-string">"defaultProps"</span> @<span class="hljs-attr">node-click</span>=<span
            class="hljs-string">"handleNodeClick"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">db-tree</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">data</span>: [{
          <span class="hljs-attr">labdb</span>: <span class="hljs-string">'一级 1'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">labdb</span>: <span class="hljs-string">'二级 1-1'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">labdb</span>: <span class="hljs-string">'三级 1-1-1'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">labdb</span>: <span class="hljs-string">'一级 2'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">labdb</span>: <span class="hljs-string">'二级 2-1'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">labdb</span>: <span class="hljs-string">'三级 2-1-1'</span>
            }]
          }, {
            <span class="hljs-attr">labdb</span>: <span class="hljs-string">'二级 2-2'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">labdb</span>: <span class="hljs-string">'三级 2-2-1'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">labdb</span>: <span class="hljs-string">'一级 3'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">labdb</span>: <span class="hljs-string">'二级 3-1'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">labdb</span>: <span class="hljs-string">'三级 3-1-1'</span>
            }]
          }, {
            <span class="hljs-attr">labdb</span>: <span class="hljs-string">'二级 3-2'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">labdb</span>: <span class="hljs-string">'三级 3-2-1'</span>
            }]
          }]
        }],
        <span class="hljs-attr">defaultProps</span>: {
          <span class="hljs-attr">children</span>: <span class="hljs-string">'children'</span>,
          <span class="hljs-attr">labdb</span>: <span class="hljs-string">'labdb'</span>
        }
      };
    },
    <span class="hljs-attr">methods</span>: {
      handleNodeClick(data) {
        <span class="hljs-built_in">console</span>.log(data);
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</template>

<script>
    export default {
        name: "TreeCon"
    }
</script>

<style scoped>

</style>