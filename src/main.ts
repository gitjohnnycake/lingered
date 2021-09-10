import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import { Tabbar, TabbarItem, Icon } from "@nutui/nutui";
import "./assets/globalLess/global.less"
import "@nutui/nutui/dist/style.css";

const app = createApp(App)

app
  .use(router)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Icon)
  .mount('#app')
