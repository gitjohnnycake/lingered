<template>
  <div class="b"><span class="a">2</span></div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="less" scoped>
.b {
  .a {
    color: red;
  }
}
</style>
