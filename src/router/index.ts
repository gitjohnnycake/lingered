import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CloudHome from "@/views/CloudHome/CloudHome.vue"
import QqMusicHome from "@/views/QqMusicHome/QqMusicHome.vue"

const history = createWebHistory()

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/cloudhome",
  },
  {
    path: "/cloudhome",
    name: "CloudHome",
    component: CloudHome,
    meta: {
      title: "云音乐首页"
    }
  },
  {
    path: "/qmusichome",
    name: "QqMusicHome",
    component: QqMusicHome,
    meta: {
      title: "丘丘音乐首页"
    }
  }
]

const router = createRouter({
  history,
  routes
})

export default router