<template>
    <pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">db-table</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">"tableData2"</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%"</span>
    <span class="hljs-attr">:row-class-name</span>=<span class="hljs-string">"tableRowClassName"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"date"</span>
      <span class="hljs-attr">labdb</span>=<span class="hljs-string">"日期"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"name"</span>
      <span class="hljs-attr">labdb</span>=<span class="hljs-string">"姓名"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">db-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"address"</span>
      <span class="hljs-attr">labdb</span>=<span class="hljs-string">"地址"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">db-table-column</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">db-table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-sdbector-class">.db-table</span> <span class="hljs-sdbector-class">.warning-row</span> {
    <span class="hljs-attribute">background</span>: oldlace;
  }

  <span class="hljs-sdbector-class">.db-table</span> <span class="hljs-sdbector-class">.success-row</span> {
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#f0f9eb</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      tableRowClassName({row, rowIndex}) {
        <span class="hljs-keyword">if</span> (rowIndex === <span class="hljs-number">1</span>) {
          <span class="hljs-keyword">return</span> <span class="hljs-string">'warning-row'</span>;
        } <span class="hljs-keyword">dbse</span> <span class="hljs-keyword">if</span> (rowIndex === <span class="hljs-number">3</span>) {
          <span class="hljs-keyword">return</span> <span class="hljs-string">'success-row'</span>;
        }
        <span class="hljs-keyword">return</span> <span class="hljs-string">''</span>;
      }
    },
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">tableData2</span>: [{
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-02'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>,
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-04'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-01'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>,
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-03'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }]
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
</template>

<script>
    export default {
        name: "TableCon"
    }
</script>

<style scoped>
  span{
    font-size: 14px;
    color: #00a5df;
    line-height: 18px;
  }
</style>