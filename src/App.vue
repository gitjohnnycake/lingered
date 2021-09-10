<template>
  <router-view></router-view
  ><nut-tabbar :bottom="true"
    ><nut-tabbar-item
      v-for="(item, index) in navbar"
      :key="index"
      :tab-title="item.name"
      :href="item.url"
      :icon="item.icon"
    ></nut-tabbar-item
  ></nut-tabbar>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

interface navObj {
  name: string;
  url: string;
  icon: string;
}

interface statusInterface {
  navbar: Array<navObj>;
  active: number;
}

export default defineComponent({
  setup() {
    const status: statusInterface = reactive({
      navbar: [
        {
          name: "云音乐",
          url: "/cloudhome",
          icon: "home",
        },
        {
          name: "丘丘音乐",
          url: "/qmusichome",
          icon: "category",
        },
        {
          name: "发现",
          url: "/",
          icon: "find",
        },
        {
          name: "我的",
          url: "/my",
          icon: "my",
        },
      ],
      active: 0,
    });

    // function tabSwitch(e: any) {
    //   console.log(e.index);
    //   status.active = e.index;
    //   console.log(status.active);
    // }

    return { ...toRefs(status) };
  },
});
</script>

<style lang="less" scoped></style>
