<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import wave from './components/wave.vue';
import BackgroundImg from './components/BackgroundImg.vue';
import overview from './components/overview.vue';
import { baseInfoStore } from '@/stores/BaseInfo';
const baseInfo = baseInfoStore()

async function fetchHitokoto() {
  const response = await fetch('https://v1.hitokoto.cn')
  const { uuid, hitokoto: hitokotoText } = await response.json()
  const hitokoto = document.querySelector('#hitokoto_text')
  if (hitokoto!=null) {
    if ('href' in hitokoto && 'innerText' in hitokoto) {
      hitokoto.href = `https://hitokoto.cn/?uuid=${uuid}`
      hitokoto.innerText = hitokotoText
    }
  }
}
fetchHitokoto()




</script>

<template>
  <header id="header">
    <div class="inner">
      <div id="brand" class="affix">
        <div class="pjax">
          <a href="/" class="logo">
            <p class="title">Aki's Memory</p>
            <h1 class="artboard">Polaris</h1>
          </a>
          <a class="meta" href="#" id="hitokoto_text">:D 获取中...</a>
        </div>
      </div>
      <nav id="nav" class="navbar show up">
        <div class="inner">
          <div class="toggle">
            <div class="lines" aria-label="切换导航栏">
              <span class="line"></span> 
              <span class="line"></span> 
              <span class="line"></span>
            </div>
          </div>
          <ul class="menu">
            <li class="item title">
              <a href="/" rel="start">Aki's Memory</a>
            </li>
            <li class="item active">
              <a href="/" rel="section">
                <i class="ic i-home"></i>首页
              </a>
            </li>
            <li class="item">
              <a href="/about/" rel="section">
                <i class="ic i-user"></i>关于
              </a>
            </li>
            <li class="item dropdown">
              <a href="javascript:void(0);">
                <i class="ic i-feather"></i>文章
              </a>
              <ul class="submenu">
                <li class="item">
                  <a href="/archives/" rel="section">
                    <i class="ic i-list-alt"></i>归档
                  </a>
                </li>
                <li class="item">
                  <a href="/categories/" rel="section">
                    <i class="ic i-th"></i>分类
                  </a>
                </li>
                <li class="item">
                  <a href="/tags/" rel="section" data-pjax-state="">
                    <i class="ic i-tags"></i>标签
                  </a>
                </li>
              </ul>
            </li>
            <li class="item">
              <a href="/friends/" rel="section">
                <i class="ic i-heart"></i>友链
              </a>
            </li>
            <li class="item">
              <a href="/TuCao/" rel="section">
                <i class="ic i-magic"></i>(●'◡'●)
              </a>
            </li>
          </ul>
          <ul class="right">
            <li class="item theme">
              <i class="ic i-sun"></i>
            </li>
            <li class="item search">
              <i class="ic i-search"></i>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <BackgroundImg />
  </header>
 
  <wave></wave>
  <main>
    <div id="wave">
      
    </div>
    <div style="display: flex;margin 50px">
      <div id="main">
        <RouterView/>
      </div>
      <div id="sidebar">
        <overview></overview>
      </div>
    </div>
    <PostRender></PostRender>
  </main>
  
  <!-- <Navbar /> -->
</template>

<style lang="stylus" scoped>
@import 'styles/main.styl';

#header {
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 63vh;
  text-shadow: 0rem .2rem .3rem alpha(#000, .5);
  color: var(--header-text-color);

  a:hover {
    color: currentColor;
  }
}

#brand {
  position: fixed;
  padding: 3rem 5rem 0;
  text-align: center;
  width: 100%;
  height: 50vh;
  min-height: 10rem;
  .title {
    font-size 70px
    font-family 'FrederickatheGreat'
  }
  &.affix {
    z-index: $zindex-0;
  }

  &, .pjax {
    the-flex();
  }

  .artboard {
    font-family $font-family-logo
    font-size 30px
    line-height 1.2
    margin-top -10px
  }

  h1 {
    font-size: 50px;
    letter-spacing: .125rem;
  }

  .artboard + h1 {
    margin: .625rem 0;
  }

  .sticky {
    font-size: $font-size-smallest;
    display: inline-block;
    transform: rotate(30deg);
    backface-visibility: hidden;
  }

  .meta {
    display: flex;
    font-size: $font-size-subtitle;
    margin: 0;

    .item+.item {
      margin-left: .625rem;
    }
  }

  +tablet() {
    .meta {
      font-size: $font-size-smaller;
    }
  }

  +mobile() {
    padding: 3rem .5rem 0;

    h1 {
      font-size: 30px;
    }

    .meta {
      font-size: 15px;

      .text {
        display: none;
      }
    }
  }


  +mobile-smallest() {
    .artboard {
      font-size: 20px;
    }
  }
}



main {
  position relative
  //top 70vh
  background linear-gradient(to top, var(--body-bg-shadow) 0, var(--grey-1) 20%) no-repeat bottom
  #main {
    
    width 75vw
  }
  .mobile-main {
    width 100%

  }
}
#nav {
  position: fixed;
  z-index: $zindex-2;
  width: 100%;
  height: 3.125rem;
  border-radius: 30px;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  top: 10px;
  width: 85%;
  right: 7.5%;
  the-transition();

  &.up {
    transform: translateY(0);
  }

  &.down {
    transform: translateY(-100%);
  }

  &.show {
    background: var(--nav-bg);
    box-shadow: .1rem .1rem .2rem var(--grey-9-a1);
    text-shadow: 0rem 0rem .0625rem var(--grey-9-a1);
    color: var(--text-color);

    .line {
      background: var(--text-color);
      box-shadow: 0rem 0rem .0625rem var(--grey-9-a1);
    }

    .item.active > a, .item.expand > a {
      color: var(--color-aqua);
      opacity: 1;
    }

    .menu {
      .submenu {
        background-color: var(--grey-1);
        .item.active a {
          color: var(--grey-0);
          opacity: 1;
        }
      }
    }
  }

  .inner {
    height: 100%;
    display: flex;
    width: $content-desktop;
    flex-wrap: nowrap;
    margin-left: 30px;

    +desktop-large() {
      width: $content-desktop-large;
    }

    +desktop-largest() {
      width: $content-desktop-largest;
    }

    +tablet-mobile() {
      //width: auto;
    }

  }

  .toggle {
    display: none;

    +tablet-mobile() {
      the-flex();
    }

    .lines {
      padding: 1.25rem;
      width: 1.375rem;
      box-sizing: unset;
    }
  }
}
// Menu
// --------------------------------------------------
#nav .menu {
  padding: .625rem 0;
  margin: 0;
  width: 100%;
  color var(--grey-1)

  .item {
    display: inline-block;
    position: relative;

    padding: 0 .625rem;
    letter-spacing: .0625rem;
    text-align: center;


    +mobile() {
      display: none;

      &.title {
        display: block;
      }
    }

    .ic {
      margin-right: .5rem;
    }

    &:not(.title) a {
      display: block;
      font-size: $font-size-medium;

      @extend $hover-underline;
    }

    &.active:not(.dropdown), &:not(.dropdown):hover {
      a::before {
        width: 70%;
      }
    }
  }

  .submenu {
    display: none;
    position: absolute;
    margin-top: .5rem;
    padding: 0;
    width: max-content;
    background-color: var(--grey-9-a5);
    box-shadow: 0 .3125rem 1.25rem -.25rem var(--grey-9-a1);
    border-radius: .625rem 0;
    @extend .slide-up-in;

    &::before {
      position: absolute;
      top: -1.25rem;
      left: 0;
      width: 100%;
      height: 2.5rem;
      content: '';
    }

    &:hover {
      display: block;
    }

    .item {
      display: block;

      &:first-child{
        border-radius: .625rem 0 0 0;
      }

      &:last-child{
        border-radius: 0 0 .625rem 0
      }

      a {
        display: inline-block;
        padding: .3rem .7rem;
        width: 100%;
        text-shadow: none;
        &::before {
          content: none;
        }
      }

      &:hover a {
        transform: translateX(.3rem);
      }

      &:hover, &.active {
        @extend $color-btn;
        a {
          opacity: 1;
        }
      }
    }
  }

  .item.dropdown {
    >a::after {
      content: "";
      display: inline-block;
      margin-left: .3rem;
      vertical-align: middle;
      border: .3rem solid transparent;
      border-top-color: currentColor;
      border-bottom: 0;
    }
    &:hover {
      .submenu {
        display: block;
      }
    }
  }
}
#nav .right {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 20px;

  .item {
    padding: .625rem .5rem;
    cursor: pointer;
  }

  .i-sun {
    font-size: $font-size-large;
  }
}



</style>
