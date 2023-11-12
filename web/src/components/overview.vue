<script lang="ts" setup>
import { baseInfoStore } from '@/stores/BaseInfo';
const baseInfo = baseInfoStore()
</script>
<template>
    <div class="inner">
        <div class="contents panel pjax">

        </div>
        <div class="related panel pjax">

        </div>
        <div class="overview panel active">
            <div class="author">
                <img class="image lozaded"  :src="baseInfo.avatar" data-loaded="true">
                <p class="name">{{ baseInfo.name }}</p>
                <div class="description">
                   {{ baseInfo.userDescription }}
                </div>
            </div>
            <nav class="state">
                <div class="item posts">
                    <a href="/archives/">
                        <span class="count">{{ baseInfo.postInfo.number.post }}</span> 
                        <span class="name">文章</span>
                    </a>
                </div>
                <div class="item categories">
                    <a href="/categories/">
                        <span class="count">{{ baseInfo.postInfo.number.category }}</span> 
                        <span class="name">分类</span>
                    </a>
                </div>
                <div class="item tags">
                    <a href="/tags/" >
                        <span class="count">{{ baseInfo.postInfo.number.tag }}</span> 
                        <span class="name">标签</span>
                    </a>
                </div>
            </nav>
            <div class="social">
                <a v-for="item in baseInfo.socials" :key="item.link" 
                    :href="item.link" 
                    target="_blank" 
                    :class="'exturl item '+item.icon" 
                    :title="item.link"
                >
                    <i :class="'ic i-'+item.icon"></i>
                </a>
            </div>
            <ul class="menu">

            </ul>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
@import '../styles/main.styl'
.inner {
    position relative
    width $sidebar-desktop
    color var(--grey-6)
    text-align center
    display flex
    justify-content space-around
    align-items flex-start
    flex-wrap wrap
    z-index $zindex-1
}
.panels {
  padding 4.6875rem 0 2rem
  width 100%
  overflow hidden

  .inner {
    overflow-x hidden
    overflow-y auto
    -webkit-overflow-scrolling touch
    width auto
    height 100%

    &::-webkit-scrollbar {
      display none
    }
  }

  .panel {
    display none
    padding .875rem .9375rem 2rem
  }
}

.state {
  display flex
  justify-content center
  line-height 1.4
  margin-top .625rem
  overflow hidden
  text-align center
  white-space nowrap


  .item {
    padding 0 .9375rem

    &:not(:first-child) {
      border-left .0625rem solid var(--grey-4)
    }

    a {
      border-bottom none
    }

    .count {
      display block
      font-size $font-size-larger
      font-weight 600
      text-align center
    }

    .name {
      color inherit
      font-size $font-size-small
    }
  }



}


// author
@keyframes shake {
    0% {
        transform scale(1)
    }

    10%,
    20% {
        transform scale(.9) rotate(3deg)
    }

    30%,
    50%,
    70%,
    90% {
        transform scale(1.1) rotate(-3deg)
    }

    40%,
    60%,
    80% {
        transform scale(1.1) rotate(3deg)
    }

    100% {
        transform scale(1)
    }
}
.overview .author {

    &:hover .image {
    @extend .shake
    }

    .image {
        border .0625rem solid var(--body-bg-shadow)
        display block
        margin 0 auto
        max-width 10rem
        padding .125rem
        box-shadow 0 0rem 1rem .625rem var(--body-bg-shadow)
        border-radius 50%
    }


    .name {
        color var(--grey-7)
        font-weight normal
        margin .3125rem 0 0
        text-align center
    }

    .description {
        color var(--grey-5)
        font-size $font-size-medium
        margin-top .3125rem
        text-align center
    }
}



// menu
.overview .menu {
  padding 1.25rem
  margin 0

  background-color transparent

  .item {
    border-radius .9375rem
    margin-bottom .625rem
    display block
    color var(--grey-5)
    the-transition()

    a {
      color inherit
      display block
      line-height 3
    }

    .submenu {
      display none
      padding 0
      @extend .slide-down-in
    }

    &:hover {
      background-color rgba(0,0,0,.1)
      color inherit

      .submenu {
        display block
      }
    }

    .ic {
      margin-right .625rem
    }

    &.active {
      @extend $color-btn

      &:hover {
        box-shadow 0 0 .75rem var(--color-pink)
        color var(--grey-0)
      }

      .item {
        color currentColor
      }
    }


    &.expand {
      background-color rgba(0,0,0,.05)

      .submenu {
        display block
      }

    }

  }
}


// related
.related {
  font-size $font-size-small

  ul {

    padding 0 .125rem .3125rem 1.25rem
    text-align left

    li {
      position relative
      line-height 1.8
      padding-bottom .625rem

      a {
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        width 100%
        display inline-block
      }

      &.active a {
        color var(--primary-color)
      }

      &::before {
        content ""
        width .5rem
        height .5rem
        background var(--primary-color)
        box-sizing unset
        left -1.25rem
        top .3125rem
        border-radius 100%
        position absolute
        border .1875rem solid var(--grey-1)
        z-index $zindex-1
        the-transition()
      }

      &:hover::before {
        background var(--color-blue)
      }

      &:not(:last-child)::after {
        content ""
        height 100%
        width .125rem
        background var(--color-red-a3)
        position absolute
        left -.875rem
        top .5rem
      }
    }
  }
}

// sidebar
#sidebar {
  position: static;
  width: $sidebar-desktop;
  top: 0;
  bottom: 0;
  the-transition();

  +tablet-mobile() {
    display: none;
    position: fixed;
    right: 0;
    background: var(--grey-1);
    box-shadow: 0 .375rem .9375rem .3125rem rgba(0, 0, 0, .2);
    z-index: $zindex-3;
  }

  &.affix {
    >.inner {
      position: fixed;
      top: 0rem;
    }
    .panels {
      padding-top: 3.625rem;
      height: 100vh;
    }
  }

  >.inner {
    position: relative;
    width: $sidebar-desktop;
    color: var(--grey-6);
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    z-index: $zindex-1;
  }
}

.panels {
  padding: 4.6875rem 0 2rem;
  width: 100%;
  overflow: hidden;

  .inner {
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    width: auto;
    height: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .panel {
    display: none;
    padding: .875rem .9375rem 2rem;
  }
}


</style>