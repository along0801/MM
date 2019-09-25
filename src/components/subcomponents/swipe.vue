<template>
  <div class="swipe-mui-container">
    <div class="mui-slider">
      <div class="mui-slider-group mui-slider-loop">
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="@/assets/images/swipe003.jpg" />
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="@/assets/images/swipe001.jpg" />
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="@/assets/images/swipe002.jpg" />
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="@/assets/images/swipe003.jpg" />
          </a>
        </div>
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="@/assets/images/swipe001.jpg" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getchange() {
      let gallery = mui(".mui-slider");
      gallery.slider({
        interval: 3000 //自动轮播周期，若为0则不自动播放，默认为0；
      });
    }
  },
  mounted() {
    this.getchange();
  }
};
</script>

<style lang="scss" scoped>
.swipe-mui-container {
  img {
    width: 100%;
    height: 12.5rem;
  }
}
</style>