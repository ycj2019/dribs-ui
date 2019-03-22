<template>
    <pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">db-breadcrumb</span> <span class="hljs-attr">separator-class</span>=<span class="hljs-string">"db-icon-arrow-right"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">db-breadcrumb-item</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"{ path: '/' }"</span>&gt;</span>首页<span class="hljs-tag">&lt;/<span class="hljs-name">db-breadcrumb-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">db-breadcrumb-item</span>&gt;</span>活动管理<span class="hljs-tag">&lt;/<span class="hljs-name">db-breadcrumb-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">db-breadcrumb-item</span>&gt;</span>活动列表<span class="hljs-tag">&lt;/<span class="hljs-name">db-breadcrumb-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">db-breadcrumb-item</span>&gt;</span>活动详情<span class="hljs-tag">&lt;/<span class="hljs-name">db-breadcrumb-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">db-breadcrumb</span>&gt;</span>
    </code>
    </pre>
</template>

<script>
    export default {
        name: "BreadCon"
    }
</script>

<style scoped>
    span{
        font-size: 14px;
        color: #00a5df;
        line-height: 18px;
    }
</style>