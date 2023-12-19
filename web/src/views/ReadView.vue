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

import Md from '../utils/renderer'

let md = Md(markdata,{})
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
  <div class="article wrap">
    <div class="breadcrumb">
      <i class="ic i-home"></i> 
      <span><a href="/">首页</a></span>
      <i class="ic i-angle-right"></i> 
      <span class="current">
        <a href="/categories/%E4%BB%A3%E7%A0%81%E6%9D%82%E8%B0%88/"  rel="index" title="分类于 代码杂谈">
          <span>代码杂谈</span>
        </a>
        <meta content="1">
      </span>
    </div>
    <article class="post block">
      <link href="http://blog.murphyspolaris.icu/Alice%20Bot%E7%9A%84%E9%87%8D%E5%86%99%E6%97%A5%E8%AE%B0/">
      <span hidden="" >
        <meta  content="/images/avatar.png">
        <meta  content="Aki Polaris">
        <meta itemprop="description" content="Aki的日记本, 这里是Aki的个人日记本">
      </span>
      <span hidden="">
        <meta itemprop="name" content="Polaris"></span>
        <div class="body md" itemprop="articleBody">
          <h1 id="bot-and-tool-parrot" class="active">
            <a class="anchor" href="#bot-and-tool-parrot" >#</a> 
            Bot-And-Tool Parrot
          </h1>
          <p>从一开始的就是单纯的给函数一个注解然后去根据消息调用函数生成响应<br>到添加了固定回复功能<br>再到引入 doc2vec 进行向量化预测匹配<br>再到现在的快要成形的，消息接收，搜索匹配，逻辑处理，响应生成多个模块</p>
          <p>目前项目只是起步阶段，文档更新的比较慢，毕竟我平时最讨厌两件事，一件事是写文档，另一件事是写注释。</p>
          <p>目前来说完成了基础的底层功能开始设计整个 bot 了</p>
          <p>从今天开始这个项目将不在含有 QQ 部分，等局势好转后在考虑适配了。<br>其实这个做这个项目一开始想的是在尽可能低占用的情况下来实现一个功能较为丰富的 bot，但是我选择了使用 python 作为开发语言，所以已经不关心占用了，后续基本完成后可能会迁移到 go。<br>目前这个项目暂定的名字是 Parrot，他本质上就是一个复读机，顶多是讲点逻辑的复读机，并不想上生成式的 Ai 模型，对我来说的占用太高了。</p>
          <p>之前的老项目因为被迫沉迷毕设以及找工作，停止了 bot 的开发，现在工作稳定了（摸鱼摸爽了）决定重新捡起来，目前本项目有以下需要注意的点：</p>
          <ol><li>我都用 python 写了你还跟我谈性能？</li><li>项目主打的就是一个未来可期好吧</li><li>甭管写的无不无脑，你就说能不能用吧</li><li>我都转通信了别对我要求太高</li></ol>
          <h2 id="项目结构" class="active"><a class="anchor" href="#项目结构" data-pjax-state="">#</a> 项目结构</h2><p>项目的核心其实就是 MatchSys 文件夹，其他的算是我不断尝试各种库和方法遗留的一些代码之类的。<br>整个项目分为训练、消息处理、相似对话搜索、对搜索结果的逻辑处理、数据存储、工具类、以及主程序和一些其他的代码</p><h3 id="trainer"><a class="anchor" href="#trainer" data-pjax-state="">#</a> trainer</h3><p>此模块主要作用是将对话数据添加到数据库和模型中，目前只实现了 QA 对话，后续继续实现短对话。<br>自定义训练必须继承 <code>Trainer</code> 实现 <code>train</code> 函数最好也把 <code>save</code> 函数一起实现了<br>使用方式</p><figure class="highlight python"><figcaption data-lang="python"></figcaption><div class="code-container"><table><tbody><tr><td data-num="1"></td><td><pre><span class="token keyword">from</span> service<span class="token punctuation">.</span>MatchSys <span class="token keyword">import</span> MatchSys</pre></td></tr><tr><td data-num="2"></td><td><pre>ms <span class="token operator">=</span> MatchSys<span class="token punctuation">(</span><span class="token punctuation">)</span></pre></td></tr><tr><td data-num="3"></td><td><pre><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd</pre></td></tr><tr><td data-num="4"></td><td><pre><span class="token comment"># QA {Q：{A1，A2...} ...}</span></pre></td></tr><tr><td data-num="5"></td><td><pre><span class="token builtin">map</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></pre></td></tr><tr><td data-num="6"></td><td><pre></pre></td></tr><tr><td data-num="7"></td><td><pre><span class="token keyword">from</span> service<span class="token punctuation">.</span>MatchSys<span class="token punctuation">.</span>trainer <span class="token keyword">import</span> QATrainer</pre></td></tr><tr><td data-num="8"></td><td><pre>trainer <span class="token operator">=</span> QATrainer<span class="token punctuation">(</span>ms<span class="token punctuation">)</span></pre></td></tr><tr><td data-num="9"></td><td><pre>trainer<span class="token punctuation">.</span>train<span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">)</span></pre></td></tr></tbody></table></div><div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div></figure><h3 id="message"><a class="anchor" href="#message" data-pjax-state="">#</a> message</h3><p>message 的核心作用就是把接收到的消息转换成标准的 statement 形式，把 statement 输出成需要的形式</p><h3 id="search"><a class="anchor" href="#search" data-pjax-state="">#</a> search</h3><p>search 主要是找出和输入的 statement 相似的已经保存到数据库中的 statement 数据，核心是训练好的 doc2vec 模型，使用 doc2vec 获得相似的 id</p><h3 id="logic"><a class="anchor" href="#logic" data-pjax-state="">#</a> logic</h3><p>此模块主要的作用就是对搜索的 statement 结果列表进行处理选择一个合适的 statement 返回<br>可以在创建 MatchSys 时 logic_adapter_name_list 使用指定使用的逻辑处理器列表，默认使用 <code>service.MatchSys.logic.BestMatch</code> ，可以指定多个逻辑处理器<br>自己的逻辑处理器必须得继承 <code>LogicAdapter</code> 实现 <code>process</code> 和 <code>default_responses_process</code> 两个函数</p><h2 id="使用"><a class="anchor" href="#使用" data-pjax-state="">#</a> 使用</h2><h3 id="依赖"><a class="anchor" href="#依赖" data-pjax-state="">#</a> 依赖</h3><figure class="highlight python"><figcaption data-lang="python"></figcaption><div class="code-container"><table><tbody><tr><td data-num="1"></td><td><pre>websocket <span class="token comment"># ws 客户端</span></pre></td></tr><tr><td data-num="2"></td><td><pre>pandas <span class="token comment"># 读取 excel 等处理数据</span></pre></td></tr><tr><td data-num="3"></td><td><pre>jieba <span class="token comment"># 分词，模糊匹配</span></pre></td></tr><tr><td data-num="4"></td><td><pre>apscheduler <span class="token comment"># 定时任务</span></pre></td></tr><tr><td data-num="5"></td><td><pre>jionlp <span class="token comment"># 工具集，计划用，但是基本没用</span></pre></td></tr><tr><td data-num="6"></td><td><pre>rasa <span class="token comment"># 3 以上，可选</span></pre></td></tr></tbody></table></div><div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div></figure><h3 id="配置"><a class="anchor" href="#配置" data-pjax-state="">#</a> 配置</h3><h1 id="计划"><a class="anchor" href="#计划" data-pjax-state="">#</a> 计划</h1><ul class="task-list"><li class="task-list-item"><input type="checkbox" id="cbx_0" disabled=""><label for="cbx_0">添加短对话训练器</label></li><li class="task-list-item"><input type="checkbox" id="cbx_1" disabled=""><label for="cbx_1">添加根据意图匹配，提升匹配精度</label></li><li class="task-list-item"><input type="checkbox" id="cbx_2" disabled=""><label for="cbx_2">添加从对话中学习</label></li><li class="task-list-item"><input type="checkbox" id="cbx_3" checked="" disabled=""><label for="cbx_3">添加天气</label></li><li class="task-list-item"><input type="checkbox" id="cbx_4" checked="" disabled=""><label for="cbx_4">添加色图</label></li><li class="task-list-item"><input type="checkbox" id="cbx_5" disabled=""><label for="cbx_5">将随机老婆迁移到这里</label></li><li class="task-list-item"><input type="checkbox" id="cbx_6" disabled=""><label for="cbx_6">扩大数据集重新训练</label></li><li class="task-list-item"><input type="checkbox" id="cbx_7" checked="" disabled=""><label for="cbx_7">继续优化代码结构添加对群消息和私聊消息之外的其他类型的支持</label></li><li class="task-list-item"><input type="checkbox" id="cbx_8" checked="" disabled=""><label for="cbx_8">优化配置文件，还有一部分可以添加到配置文件中</label></li><li class="task-list-item"><input type="checkbox" id="cbx_9" disabled=""><label for="cbx_9">添加随机老婆功能</label></li></ul><div class="tags"><a href="/tags/%E8%AE%B0%E5%BD%95-python/" rel="tag" class="info"><i class="ic i-tag"></i> 记录,python</a></div></div>
      <footer>
        <div class="meta">
          <span class="item">
            <span class="icon">
              <i class="ic i-calendar-check"></i> 
            </span>
            <span class="text">更新于</span> 
            <time title="修改时间：2023-10-23 08:38:03" >2023-10-23</time>
          </span>
        </div>
        <div class="reward">
          <button>
            <i class="ic i-heartbeat"></i> 
            赞赏
          </button>
          <p>请我喝[茶]~(￣▽￣)~*</p>

        </div>
        <div id="copyright">
          <ul>
            <li class="author">
              <strong>本文作者： </strong>Aki Polaris <i class="ic i-at"><em>@</em></i>Polaris
            </li>
            <li class="link">
              <strong>本文链接：</strong> <a href="http://blog.murphyspolaris.icu/Alice%20Bot%E7%9A%84%E9%87%8D%E5%86%99%E6%97%A5%E8%AE%B0/" title="Alice Bot的重写日记">http://blog.murphyspolaris.icu/Alice Bot的重写日记/</a>
            </li>
            <li class="license">
              <strong>版权声明： </strong>本站所有文章除特别声明外，均采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" target="_blank" class="exturl" title="(CC)BY-NC-SA"><i class="ic i-creative-commons"><em>(CC)</em></i>BY-NC-SA</a> 许可协议。转载请注明出处！
            </li>
          </ul>
        </div>
      </footer>
    </article>
    </div>
</template>
<style lang="stylus" scoped>
@import '../styles/main.styl';
@import '../styles/post/post.styl';


</style>