<template>
  <div class="home-footer">
    <mu-container>
      <mu-bottom-nav :value="bottomNav">
        <mu-bottom-nav-item value="find" title="发现" icon="assistant" to="/find"></mu-bottom-nav-item>

        <mu-bottom-nav-item value="favorite" title="喜欢" icon="headset" to="/favorite"></mu-bottom-nav-item>

        <mu-bottom-nav-item value="moment" title="圈子" icon="chat" to="/moment"></mu-bottom-nav-item>

        <mu-bottom-nav-item value="me" title="我的" icon="apps" to="/me"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bottomNav: "me"
    };
  },
  methods: {
    // 获取路由，绑定对应的 selected
    getRoute() {
      //获取当前窗口的 path
      let path = this.$route.path;
      // 根据路由地址将对应 id 赋值给 selected
      if (path === "/find") {
        this.bottomNav = "find";
      } else if (path === "/favorite") {
        this.bottomNav = "favorite";
      } else if (path === "/moment") {
        this.bottomNav = "moment";
      } else if (path === "/me") {
        this.bottomNav = "me";
      }
      // console.log(this.$route.path);
    }
  },
  // 在生命周期函数里面调用
  created() {
    this.getRoute();
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding: 0;
  .mu-bottom-nav {
    background-color: #e0e0e0;
    // width: 375px;
  }
}
</style>
