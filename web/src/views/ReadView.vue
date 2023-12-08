<script setup>
import { h, ref } from 'vue';
import hljs from "highlight.js"
import markdownit from 'markdown-it'

import sub from 'markdown-it-sub'
import sup from 'markdown-it-sup'
import emoji from 'markdown-it-emoji'
import footnote from 'markdown-it-footnote'
import abbr from 'markdown-it-abbr'
import ins from 'markdown-it-ins'
import mark from 'markdown-it-mark'
import container from 'markdown-it-container'

const md = markdownit({
    html:         true,        // 在源码中启用 HTML 标签
    xhtmlOut:     false,        // 使用 '/' 来闭合单标签 （比如 <br />）。
                                // 这个选项只对完全的 CommonMark 模式兼容。
    breaks:       false,        // 转换段落里的 '\n' 到 <br>。
    langPrefix:   'language-',  // 给围栏代码块的 CSS 语言前缀。对于额外的高亮代码非常有用。
    linkify:      true,        // 将类似 URL 的文本自动转换为链接。
  
    // 启用一些语言中立的替换 + 引号美化
    typographer:  true,
  
    // 双 + 单引号替换对，当 typographer 启用时。
    // 或者智能引号等，可以是 String 或 Array。
    //
    // 比方说，你可以支持 '«»„“' 给俄罗斯人使用， '„“‚‘'  给德国人使用。
    // 还有 ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] 给法国人使用（包括 nbsp）。
    quotes: '“”‘’',
  
    // 高亮函数，会返回转义的HTML。
    // 或 '' 如果源字符串未更改，则应在外部进行转义。
    // 如果结果以 <pre ... 开头，内部包装器则会跳过。
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {}
      }
  
      return ''; // 使用额外的默认转义
    }
  })
md.use(sub)
md.use(emoji)
md.use(sup)
md.use(footnote);
md.use(abbr);
md.use(ins);
md.use(mark);


md.use(container, 'worring', {
    // 建议是否符合要求
    validate: function(params) {
      return params.trim().match(/^worring\s+(.*)$/);
    },

    // 渲染成html
    render: function (tokens, idx) {
        console.log(tokens)
        console.log(idx)
    }
})
const markdata = `
# 博客开发日记

## 2023年6月28日

刷知乎,按了一个element ui plus,替换了原本的无限浏览依赖,给歌词加了一个滚动效果,调了一下角度

屮写个锤子代码,开瓦
`
let htmlcode = ref(md.render(markdata))
</script>
<template>
<div v-html="htmlcode">

</div>
</template>