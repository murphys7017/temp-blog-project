<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import wave from './components/wave.vue';
import BackgroundImg from './components/BackgroundImg.vue';


</script>

<template>
  <BackgroundImg />
  <wave></wave>
  <main>
    <div id="wave">
      
    </div>
    <div id="main">
      <RouterView/>
    </div>
  </main>
  <!-- <Navbar /> -->
</template>

<style lang="stylus" scoped>

main {
  
  position: relative;
  top: 70vh;
  background: linear-gradient(to top, var(--body-bg-shadow) 0, var(--grey-1) 20%) no-repeat bottom;
  #main {
    
    width 75vw
  }
  .mobile-main {
    width 100%

  }
}
</style>
