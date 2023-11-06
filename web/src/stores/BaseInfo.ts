import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { axiosGet } from "../axios/api";

const res = await axiosGet(`bsaeInfo`);
console.log(res);

export const baseInfo = defineStore('baseInfo', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
