<template>
  <div class="home-container">
    <!-- 顶部 Header 区域 -->
    <div class="header">
      <HomeHeader></HomeHeader>
    </div>

    <!-- 中间的 路由 router-view 区域 -->
    <div class="content">
      <router-view></router-view>
    </div>

    <!-- 底部的 Tabbar 区域 -->
    <div class="footer">
      <HomeFooter></HomeFooter>
    </div>
  </div>
</template>

<script>
import HomeHeader from "@/components/Header/homeHeader.vue";
import HomeFooter from "@/components/Footer/homeFooter.vue";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    HomeHeader,
    HomeFooter
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  .header {
    position: absolute;
    height: 50px;
    width: 100%;
    top: 0;
    // background-color: pink;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    bottom: 56px;
    overflow-x: hidden;
    overflow-y: auto;
    // background-color: orange;
  }

  .footer {
    position: absolute;
    height: 56px;
    width: 100%;
    bottom: 0;
    // background-color: blue;
  }
}
</style>
