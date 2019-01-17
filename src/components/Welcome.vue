<template>
  <div id="box">
    <div class="number">{{index}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 3
    };
  },
  created() {
    var _this = this;
    var timer = setInterval(() => {
      _this.index--;
      if (_this.index == 0) {
        clearInterval(timer);
        _this.$router.push({
          path: "home"
        });
      }
    }, 1000);
  }
};
</script>
<style>
#box {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("../assets/bear.png");
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  background-color: #ffffff;
}

.number {
  color: #000000;
  border: 2px solid #000000;
  width: 1rem;
  height: 1rem;
  text-align: center;
  border-radius: 50%;
  font-size: 0.6rem;
  margin-right: 1.3rem;
  margin-top: -0.8rem;
  position: absolute;
  top: 50%;
  right: 0;
  font-weight: bolder;
}
</style>

