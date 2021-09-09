import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home/Home.vue"

const history = createWebHistory()

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      title: "首页"
    }
  }
]

const router = createRouter({
  history,
  routes
})

export default router