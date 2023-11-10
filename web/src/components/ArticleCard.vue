<script setup lang="ts">
import { h, ref } from 'vue';

let randomImage = ref('https://hkngrok.murphyspolaris.icu/File/816e550d895b280a956dcab8baf20a77328597.jpg%401036w.webp')
</script>

<template>
<article class="item">
    <div class="cover">
        <img :src="randomImage" >
      <!-- {{ _url(item.link or item.path, '<img data-src="'+ _cover(item) +'">', {itemprop: 'url', title: postText}) }} -->
    </div>
    <div class="info">
      <!-- {{postmeta.render(item)}} -->
      <h3>标题</h3>
      <!-- <h3>{{ _url(item.link or item.path, postText + (postTitleIcon or ''), {itemprop: 'url', title: postText}) }}</h3> -->
      <div class="excerpt">
        跳票 N 久终于更新的简单的使用说明 hexo-theme-shoka ：本博客自用的主题 hexo-renderer-multi-markdown-it：配套的 markdown 渲染器 已经支持 hexo 5。 因博主被学业和工作掏空，本项目已停滞更新大半年，问题也无法及时回
        <!-- {%- if item.description %}
          {{ item.description }}
        {% elif item.excerpt %}
          {{ item.excerpt }}
        {% else %}
          {{ item.content | striptags(true) | escape | truncate(300) }}
        {%- endif %} -->
      </div>
      <!-- {%- if item.categories.length > 0 %} -->
      <div class="meta footer">
        <span>
        <!-- {%- set lastcat = item.categories.last() %} -->
          <!-- {{ _url(lastcat.path, '<i class="ic i-flag"></i>' + lastcat.name, {itemprop: 'url', title: lastcat.name}) }} -->
          标签
        </span>
      </div>
      <!-- {%- endif %} -->
      <!-- {{ _url(item.link or item.path, 'more...', {itemprop: 'url', title: postText, class: 'btn'}) }} -->
      more
    </div>
  </article>
</template>

<style lang="stylus" scoped>
@import '../styles/main.styl';


</style>