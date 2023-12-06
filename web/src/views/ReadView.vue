<script lang="ts" setup>
import md from "../utils/MarkdownConventerBuilder"
const markdata = `
# 博客开发日记

## 2023年6月28日

刷知乎,按了一个element ui plus,替换了原本的无限浏览依赖,给歌词加了一个滚动效果,调了一下角度

屮写个锤子代码,开瓦
`
console.log(md.render(markdata))
</script>
<template>

</template>