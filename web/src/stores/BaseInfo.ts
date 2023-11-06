import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { axiosGet } from "../axios/api";

const res = await axiosGet(`bsaeInfo`);

export const baseInfoStore = defineStore('baseInfo', () => {
  const avatar = ref(res.data.Avatar)
  const name = ref(res.data.Name)
  const serverName = ref(res.data.ServerName)

  return { avatar, name, serverName }
})
