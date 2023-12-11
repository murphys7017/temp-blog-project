<script setup>
import { h, ref } from 'vue';
import hljs from "highlight.js"
import copyright from '../components/copyright.vue';
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
---
title: JavaWeb项目开发流程
update: 2023/08/5
categories:
  - 开发日记
tags:
  - note
---

# 开发

目前常规的开发方式均是将整个系统分为了三部分，持久化存储数据的数据库，负责主要业务逻辑处理的后台服务端，以及负责与用户交互的浏览器端

## 开发流程

现在一般的开发流程为，先了解系统要实现的主要业务是什么，系统是为的实现什么目标而建立的等，然后根据这些来设计整个系统的大体结构，分为几部分，使用什么技术等。

而后便是开始设计数据库的结构，就类似Excel的一个表中存什么数据表头是是什么，不同的Sheet页中数据的关系是什么，随后建立数据库。

最后便是系统的前后端开发了，目前一般采用前后端分离的开发模式，前端和后端开发协同进行，根据业务和需求推进项目。

## 数据库 Sql语言

数据库主要分为两种，一种是关系型数据库比较像一个高性能的Excel，一种是非关系型数据库，而目前的绝大部分管理系统均使用的是关系型数据库，常见的有MySQL、SQL server、PostgreSql等这些数据都有基本统一的操控语言Sql

> **SQL** (Structured Query Language:结构化查询语言) 是用于管理关系数据库管理系统（RDBMS）。 SQL 的范围包括数据插入、查询、更新和删除，数据库模式创建和修改，以及数据访问控制。



## 后台系统 Java语言

后台系统业务复杂的的大型项目一般均使用Java语言开发，而Spring系列产品是一套专门的用来帮助开发者快速开发的工具组。在常见的系统开发中，会根据系统的复杂程度来选择用什么开发，如果系统不是特别复杂一般选择使用Spring Boot，如果系统环境复杂，有多个服务，或者说会有多个系统在其中运行，会考虑用Spring Cloud来进行开发。

其中后台主要实现的便是从数据库中查询需要的数据，然后处理成前端需要的样子，发送给前端。

其中与前的交互主要是依靠Spring MVC框架开发，这个框架已经包含在Spring Boot中可以快速使用了。

而对数据库的查询会根据业务的复杂程度来选择MybatisPlus或者SpringJpa两个框架来进行，两个也包含在SpringBoot中可以快速的配置使用。

除了这些以外还会选择用Spring框架来对系统中的各种资源进行管理。

## 前端展示

前端是一个比较复杂的部分了，涉及到的东西比较多，比较乱。因为前端涉及到了对逻辑的处理和画面的展示两个职能，而前端需要展示的一般又种类比较复杂，所以前端比较乱。

#### Html、Javascript、Css

首先是一切的基础Html、Javascript、Css，这几项是构建页面的基础

#### node.js

现在一般的大型前端项目都是基于node.js运行的，但是我们不用去过分的关注它，日常使用中记住几行常用命令就行。

#### Vue

Vue的性质和Spring系列产品类似，都是用来方便开发的工具。

目前国内的大型的项目基本都是基于Vue开发的，目前也有很多成熟的模板可以直接使用，常见的项目开发有很多是基于这些模板的。例如：[Vue Element Admin ](https://panjiachen.gitee.io/vue-element-admin/#/)

#### Element UI

Element UI是一套基于Vue.js 2.0的UI组件库，主要用于快速构建Web页面。它提供了许多常见的UI组件，例如按钮、表单、表格、弹出框等，并且支持自定义主题。Element UI还提供了一些辅助功能，例如表单验证、国际化、响应式布局等。

[Element Plus (gitee.io)](https://element-plus.gitee.io/zh-CN/component/button.html#基础用法)


`
console.log(md.render(markdata))
let htmlcode = ref(md.render(markdata))
</script>
<template>
  <div>
    <div v-html="htmlcode" class="md">
    </div>
  </div>
  <copyright></copyright>
</template>
<style lang="stylus" scoped>
@import '../styles/main.styl';



</style>