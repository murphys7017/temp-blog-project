<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { baseInfoStore } from './stores/BaseInfo';
const baseInfo = baseInfoStore()
console.log(baseInfo)
let randomTips = ref('You’ve successfully created a project with Vite + Vue 3. Whats next?')

function gotoTips() {
  console.log(randomTips.value)
}
</script>

<template>
  <navbar>
    <img alt="user avatat" class="navbar-avatar" :src="baseInfo.avatar">
    <div class="navbar-info">
      <div class="server-name">
        {{baseInfo.serverName}}
      </div>
      <div class="icon" >
<svg t="1699237021034" style="width: 40px;height: 40px;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4991" width="200" height="200"><path d="M328.533333 482.133333H211.2c-83.2 0-151.466667-68.266667-151.466667-151.466666V211.2C59.733333 128 128 59.733333 211.2 59.733333h117.333333c83.2 0 151.466667 68.266667 151.466667 151.466667v117.333333c2.133333 85.333333-66.133333 153.6-151.466667 153.6zM211.2 123.733333c-49.066667 0-87.466667 40.533333-87.466667 87.466667v117.333333c0 49.066667 40.533333 87.466667 87.466667 87.466667h117.333333c49.066667 0 87.466667-40.533333 87.466667-87.466667V211.2c0-49.066667-40.533333-87.466667-87.466667-87.466667H211.2zM810.666667 482.133333h-117.333334c-83.2 0-151.466667-68.266667-151.466666-151.466666V211.2c0-83.2 68.266667-151.466667 151.466666-151.466667H810.666667c83.2 0 151.466667 68.266667 151.466666 151.466667v117.333333c0 85.333333-68.266667 153.6-151.466666 153.6zM693.333333 123.733333c-49.066667 0-87.466667 40.533333-87.466666 87.466667v117.333333c0 49.066667 40.533333 87.466667 87.466666 87.466667H810.666667c49.066667 0 87.466667-40.533333 87.466666-87.466667V211.2c0-49.066667-40.533333-87.466667-87.466666-87.466667h-117.333334zM328.533333 964.266667H211.2c-83.2 0-151.466667-68.266667-151.466667-151.466667v-117.333333c0-83.2 68.266667-151.466667 151.466667-151.466667h117.333333c83.2 0 151.466667 68.266667 151.466667 151.466667v117.333333c2.133333 83.2-66.133333 151.466667-151.466667 151.466667zM211.2 605.866667c-49.066667 0-87.466667 40.533333-87.466667 87.466666V810.666667c0 49.066667 40.533333 87.466667 87.466667 87.466666h117.333333c49.066667 0 87.466667-40.533333 87.466667-87.466666v-117.333334c0-49.066667-40.533333-87.466667-87.466667-87.466666H211.2z" fill="#f48ee5" p-id="4992" data-spm-anchor-id="a313x.manage_type_mylikes.0.i26.62783a81DCOveu" class="selected"></path><path d="M906.666667 654.933333H603.733333c-17.066667 0-32-14.933333-32-32s14.933333-32 32-32h305.066667c17.066667 0 32 14.933333 32 32s-17.066667 32-34.133333 32zM855.466667 797.866667H603.733333c-17.066667 0-32-14.933333-32-32s14.933333-32 32-32h251.733334c17.066667 0 32 14.933333 32 32s-14.933333 32-32 32zM729.6 942.933333h-125.866667c-17.066667 0-32-14.933333-32-32s14.933333-32 32-32h125.866667c17.066667 0 32 14.933333 32 32s-14.933333 32-32 32z" fill="#e709c6" p-id="4993" data-spm-anchor-id="a313x.manage_type_mylikes.0.i27.62783a81DCOveu" class=""></path></svg>
      </div>
      <div class="link">

      </div>
      
    </div>
    <div class="card" @click="gotoTips">
      <!-- <img class="card-img" src="https://blog.murphyspolaris.icu/images/avatar.png"> -->
      <div class="card-content">
        <p>{{randomTips}}</p>
      </div>

    </div>
  </navbar>




  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>



  <Suspense>
    <RouterView />
  </Suspense>
  
</template>

<style scoped>
.card-content {
  display: flex;
  align-items: center;
  height: 40px;
  caret-color: transparent;
  display: inline;
}
.card-img {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  padding: 5px;
}
.navbar-info {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  margin: 10px;
  margin-left: 15px;
  transform: translateX(0);
  transition: transform 0.8s;
  visibility: hidden;
}
.card {
  display: inline;
  position: fixed;
  width: 90%;
  height: 50px;
  padding: 10px;
  left: 60px;
  margin: 5px;
  caret-color: transparent;
  text-align: center;
  transition: 
    margin-top 1.2s,
    right 1s;
}


.navbar-avatar{
  height: 60px;
  width: 60px;
  border-radius: 50%;
  transform: translateX(0);
  transition: transform 0.8s;
}
navbar {
  display: flex;
  flex-direction: row;
  width: 50vw;
  height: 60px;
  position: fixed;
  bottom: 20px;
  z-index: 10;
  left: 25vw;
  backdrop-filter: blur(4px);
  float: left;
  border-radius: 50px 35px 15px 50px;
  transition: 
    border-radius 1.2s,
    background-color 2s;
  
}
navbar:hover {
  background-color: rgba(238, 242, 245, 0.911);
  backdrop-filter: blur(3px);
  border-radius: 35px 50px 50px 15px;
}
navbar:hover .navbar-avatar{
  transform: translateX(calc(50vw - 60px));
  transition: transform 0.8s;
}
navbar:hover .card{
  margin-top: -50px;
  right: 5vw;
}
navbar:hover .navbar-info{
  visibility: visible;
  transform: translateX(-60px);
  transition: transform 0.8s;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
