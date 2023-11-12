<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import wave from './components/wave.vue';
import BackgroundImg from './components/BackgroundImg.vue';
import overview from './components/overview.vue';
import { baseInfoStore } from '@/stores/BaseInfo';
const baseInfo = baseInfoStore()


</script>

<template>
  <header id="header">
      <div class="inner">
        <div id="brand">
          <div class="pjax">
            <a href="" class="logo" rel="start">
              <p class="artboard">{{ baseInfo.serverName }}</p>
              <h1 itemprop="name headline" class="title">{{ baseInfo.serverDescription }}</h1>
            </a>
            <p class="meta" itemprop="description">= 《一言》 =</p>
            <p class="meta" itemprop="description">= 《天气》 =</p>
          </div>
        </div>
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

  </main>
  <!-- <Navbar /> -->
</template>

<style lang="stylus" scoped>

main {
  position relative
  top 70vh
  background linear-gradient(to top, var(--body-bg-shadow) 0, var(--grey-1) 20%) no-repeat bottom
  #main {
    
    width 75vw
  }
  .mobile-main {
    width 100%

  }
}

#brand {
  position: fixed;
  padding: 3rem 5rem 0;
  text-align: center;
  width: 100%;
  height: 50vh;
  min-height: 10rem;
}

</style>
