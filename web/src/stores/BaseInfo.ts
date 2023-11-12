import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { axiosGet } from "../axios/api";

const res = await axiosGet(`bsaeInfo`);

export const baseInfoStore = defineStore('baseInfo', () => {
  const isMobile = ref(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
  const avatar = ref(res.data.Avatar)
  const name = ref(res.data.Name)
  const userDescription = ref(res.data.Description)

  const serverName = ref(res.data.ServerName)
  const serverVersion = ref(res.data.ServerVersion)
  const serverDescription = ref(res.data.ServerDescription)

  const postInfo = ref(res.data.PostInfo)

  const socials = ref(res.data.Socials)

  const menus = ref(res.data.Menus)

  const coverImages = ref(res.data.CoverImages)

  return { 
    avatar, 
    name, 
    userDescription, 

    serverName,
    serverVersion,
    serverDescription, 

    postInfo,

    socials,
    menus,

    coverImages, 
    isMobile 
  }
})
