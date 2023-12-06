<script setup lang="ts">
import { h, ref } from 'vue';

let randomImage = ref('https://hkngrok.murphyspolaris.icu/File/816e550d895b280a956dcab8baf20a77328597.jpg%401036w.webp')

import ArticleCard from '../components/ArticleCard.vue';

const data = ref([
  {
    image: "https://pic.imgdb.cn/item/64c7ca131ddac507cc362370.jpg",
    title: "Alice Bot的重写日记",
    pageUrl: "",
    category: "代码杂谈",
    categoryUrl: "",
    time: "2023-10-17 17:43:00",
    description: "# Bot-And-Tool Parrot 从一开始的就是单纯的给函数一个注解然后去根据消息调用函数生成响应 到添加了固定回复功能 再到引入 doc2vec 进行向量化预测匹配 再到现在的快要成形的，消息接收，搜索匹配，逻辑处理，响应生成多个模块 目前项目只是起步阶段，文档更新的比较慢，毕竟我平时最讨厌两件事，一件事是写文档，另一件事是写注释。 目前来说完成了基础的底层功能开始设计整个 bot 了 从今天开始这个项目将不在含有 QQ 部分，等局势好转后在考虑适配了。 其实这个做这个项目一开始想的是在尽可能低占用的情况下来实现一个功能较为丰富的 bot，但是我选择了使用 python...",
  }
])
</script>

<template>
  <div v-for="item in data" :key="item.pageUrl">
    <ArticleCard 
    :category="item.category"
    :category-url="item.categoryUrl"
    :description="item.description"
    :time="item.time"
    :title="item.title"
    :page-url="item.pageUrl"
    :image="item.image"
    ></ArticleCard>
  </div>
</template>

<style lang="stylus" scoped>
@import '../styles/main.styl';



</style>