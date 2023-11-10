<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
import wave from './components/wave.vue';
import BackgroundImg from './components/BackgroundImg.vue';

</script>

<template>
  <BackgroundImg />
  <wave></wave>

  <ArticleCard />
  
  <RouterView />
  <Navbar />
</template>

<style lang="stylus" scoped>


</style>
