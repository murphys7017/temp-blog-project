import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

let res = JSON.parse(`
{
  "Name":"Alice",
  "Description":"User Description",
  "ServerName":"Aki's Server",
  "ServerVersion":0.01,
  "ServerDescription":"Aki's Server",
  "ServerRoot":"https://blog.murphyspolaris.icu/",
  "Avatar":"http://localhost:9000/avatar.webp",
  "PostInfo":{
      "number":{
          "post":1,
          "tag":2,
          "category":1
      }
  },
  "Socials":[
      {
          "link":"https://github.com/murphys7017",
          "icon":"github"
      },
      {
          "link":"mailto:Yuki7017@outlook.com",
          "icon":"email"
      }
  ],
  "Menus":{

  },
  "CoverImages":[
      "http://localhost:9000/-781c4e03c89f9fa5.webp",
      "http://localhost:9000/0146690c71602f456b89e1b688c93bfe328597.jpg@1036w.webp"
  ]
}
`)
console.log(res)
export const baseInfoStore = defineStore('baseInfo', () => {
  const isMobile = ref(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
  const avatar = ref(res.Avatar)
  const name = ref(res.Name)
  const userDescription = ref(res.Description)

  const serverName = ref(res.ServerName)
  const serverVersion = ref(res.ServerVersion)
  const serverDescription = ref(res.ServerDescription)
  const serverRoot = ref(res.ServerRoot)

  const postInfo = ref(res.PostInfo)

  const socials = ref(res.Socials)

  const menus = ref(res.Menus)

  const coverImages = ref(res.CoverImages)

  return { 
    avatar, 
    name, 
    userDescription, 

    serverName,
    serverVersion,
    serverDescription, 
    serverRoot,

    postInfo,

    socials,
    menus,

    coverImages, 
    isMobile 
  }
})
