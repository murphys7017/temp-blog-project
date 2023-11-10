<script setup lang="ts">
import { h, ref } from 'vue';

let randomImage = ref('https://hkngrok.murphyspolaris.icu/File/816e550d895b280a956dcab8baf20a77328597.jpg%401036w.webp')
</script>

<template>
  <div class="segments index wrap">
    <article class="item">
      <div class="cover">
        <a href="" itemprop="url" title="Alice Bot的重写日记" >
          <img  src="https://pic.imgdb.cn/item/64c7ca131ddac507cc362370.jpg"  class="lozaded">
        </a>
      </div>
      <div class="info">
        <div class="meta">
          <span class="item" title="创建时间：2023-10-17 17:43:00">
            <span>
              <i class="ic i-calendar"></i> 
            </span>
            <time  datetime="2023-10-17T17:43:00+08:00">2023-10-17</time>
          </span>
        </div>
        <h3>
          <a href=""  title="Alice Bot的重写日记">
            Alice Bot的重写日记
          </a>
        </h3>
        <div class="excerpt">
          # Bot-And-Tool Parrot 从一开始的就是单纯的给函数一个注解然后去根据消息调用函数生成响应 到添加了固定回复功能 再到引入 doc2vec 进行向量化预测匹配 再到现在的快要成形的，消息接收，搜索匹配，逻辑处理，响应生成多个模块 目前项目只是起步阶段，文档更新的比较慢，毕竟我平时最讨厌两件事，一件事是写文档，另一件事是写注释。 目前来说完成了基础的底层功能开始设计整个 bot 了 从今天开始这个项目将不在含有 QQ 部分，等局势好转后在考虑适配了。 其实这个做这个项目一开始想的是在尽可能低占用的情况下来实现一个功能较为丰富的 bot，但是我选择了使用 python...
        </div>
        <div class="meta footer">
          <span>
            <a href=""  title="代码杂谈">
              <i class="ic i-flag"></i>
              代码杂谈
            </a>
          </span>
        </div>
        <a href="" title="Alice Bot的重写日记" class="btn">
          more...
        </a>
      </div>
    </article>
  </div>
</template>

<style lang="stylus" scoped>
@import '../styles/main.styl';

$item {
  position: relative;
  color: inherit;
  width: calc(50% - 2rem);
  min-width: calc(50% - 2rem);
  height: 14rem;
  margin: 1rem;

  &.show {
    @extend .slide-up-big-in;
    opacity: 1;
  }

  +mobile() {
    width: calc(100% - 1rem) !important;
    min-width: calc(100% - 1rem) !important;
    margin: 1rem .5rem !important;
  }
}
.index.wrap {
  .btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: .3rem 1rem;
    border-radius: 1rem 0;
    color: var(--grey-0);
    background-image: linear-gradient(to right, var(--color-pink) 0, var(--color-orange) 100%);
    transition-property: all;
    transition-duration: 0.4s;

    &::before {
      position: absolute;
      display: block;
      content: '';
      height: calc(100% - 1rem);
      width: calc(100% - 1rem);
      border-radius: 5rem;
      left: .5rem;
      top: .8rem;
      box-shadow: 0 0 .6rem .6rem var(--color-pink-a3);
      background-color: var(--color-pink-a3);
      transition-duration: 0.4s;
    }

    &:hover {
      transform: translateZ(2.5rem);
    }

    &:hover::before {
      transform: translateZ(-2.5rem);
    }
  }

  .active .btn {  
    transform-style: preserve-3d;
    transform: translateZ(2rem);
    backface-visibility: hidden;

    &::before {
      transform-style: preserve-3d;
      transform: translateZ(-2rem);
      backface-visibility: hidden;
    }
  }

  .meta {
    font-size: $font-size-smaller;
    color: var(--grey-5);

    .ic {
      margin-right: .0625rem;
    }

    .item + .item {
      margin-left: .625rem;
    }

    &.footer {
      position: absolute;
      bottom: .5rem;
      max-width: calc(100% - 7rem);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      justify-content: flex-start;

      span {
        margin-right: .5rem;
      }
    }
  }
}
.segments {
  the-flex();

  > .item {
    @extend $item;

    display: flex;
    border-radius: .625rem;

    width: calc(100% - 2rem);
    min-width: calc(100% - 2rem);

    shadow-box(false);
    the-transition();


    +mobile() {
      flex-direction: column;
      height: fit-content;
      max-height: fit-content;
    }

    &:hover {
      box-shadow: 0 0 2rem var(--box-bg-shadow);

      .cover img {
        transform: scale(1.05) rotate(1deg);
      }
    }
  }

  .cover {
    width: 50%;
    margin-right: 1.5rem;
    clip-path: polygon(0 0, 92% 0%, 100% 100%, 0% 100%);
    border-radius: .625rem 0 0 .625rem;
    overflow: hidden;

    +mobile() {
      width: 100%;
      height: 14rem;
      margin: auto;
      clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
      border-radius: .625rem .625rem 0 0;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      the-transition();
    }
  }

  .info {
    position: relative;
    width: 50%;
    padding: 1rem 1.5rem 3rem 0;
    perspective: 62.5rem;

    +mobile() {
      width: 100%;
      height: 14rem;
      padding: 0rem 1rem 3rem;
    }

    .meta {
      display: flex;
      justify-content: flex-end;
      margin: 0;

      +mobile() {
        .item:not(:first-child) {
          display: none;
        }
      }
    }

    h3 {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin: .625rem 0;
      color: var(--primary-color);
    }

    .excerpt {
      overflow: hidden;
      font-size: $font-size-small;
      max-height: 5rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      text-overflow: ellipsis;
    }

  }


  > .item:nth-child(even) {
    flex-direction: row-reverse;

    +mobile() {
      flex-direction: column;
    }

    .cover {
      margin-right: auto;
      margin-left: 1.5rem;
      clip-path: polygon(0 0%, 100% 0%, 100% 100%, 8% 100%);
      border-radius: 0rem .625rem .625rem 0;

      +mobile() {
        width: 100%;
        margin: auto;
        clip-path: polygon(0 0,100% 0,100% 100%,0 92%);
        border-radius: .625rem .625rem 0 0;
      }
    }

    .info {
      padding: 1rem 0 3rem 1.5rem;

      +mobile() {
        padding: 0rem 1rem 3rem;
      }

      .meta {
        justify-content: flex-start;
      }
    }

    .btn {
      left: 0;
      right: auto;
      border-radius: 0 1rem;
      background-image: linear-gradient(to right, var(--color-orange) 0, var(--color-pink) 100%);
    }

    .meta.footer {
      right: .5rem;
      justify-content: flex-start;
    }

    &:hover {
      .cover img {
        transform: scale(1.05) rotate(-1deg);
      }
    }
  }
}



</style>