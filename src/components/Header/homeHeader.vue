<template>
  <div class="home-header">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>Title
      <mu-button flat slot="right">LOGIN</mu-button>
    </mu-appbar>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.mu-appbar {
  height: 50px;
}
</style>
