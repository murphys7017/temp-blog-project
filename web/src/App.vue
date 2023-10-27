<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

let randomTips = ref('You’ve successfully created a project with Vite + Vue 3. Whats next?')

function gotoTips() {
  console.log(randomTips.value)
}
</script>

<template>
  <navbar>
    <img alt="user avatat" class="navbar-avatar" src="/avatar.png">
    <div class="navbar-info">
      some info
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



  <RouterView />
</template>

<style scoped>
.card-content {
  display: flex;
  align-items: center;
  height: 40px;
  caret-color: transparent;
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
}
.card {
  display: flex;
  position: fixed;
  max-width: 40vw;
  height: 50px;
  padding: 10px;
  flex-direction: row;
  right: 10px;
  caret-color: transparent;
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
