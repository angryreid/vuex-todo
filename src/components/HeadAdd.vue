<template>
  <div>
    <div class="add">
      <input type="text" v-model="text" placeholder="add..." @keydown.enter="addTodo">
      <i class="iconfont icon-jia1" @click="addTodo"></i>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  name: "HeadAdd",
  data() {
    return {
      text: "",
      currentTime: ""
    };
  },
  methods: {
    addTodo() {
      if (this.text == "") {
        Toast({
          message: "not null...",
          iconClass: "iconfont icon-warning",
          duration: 600
        });
        return;
      }
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var day = now.getDate();
      this.currentTime =
        this.checkDateItem(year) +
        "-" +
        this.checkDateItem(month) +
        "-" +
        this.checkDateItem(day);
      var data = {
        text: this.text,
        currentTime: this.currentTime
      };
      //  触发action dispatch
      this.$store.dispatch('addItem',data);
      this.text = "";
    },
    checkDateItem(item) {
      item = item.toString();
      return item[1] ? item : "0" + item;
    }
  }
};
</script>
<style>
.add {
  width: 100%;
  height: 1.5rem;
  background-color: #32c9ff;
  display: flex;
  justify-items: center;
  align-items: center;
  position: fixed;
  z-index: 1;
}

.add input {
  width: 88%;
  height: 1rem;
  border-radius: 8px;
  margin-left: 0.4rem;
  padding-left: 0.3rem;
  background: rgba(255, 255, 255, 0.3);
  color: #ffffff;
  opacity: 0.7;
  font-size: 0.365rem;
}

.add i {
  font-size: 1rem;
  color: #ffffff;
  position: absolute;
  right: 0.4rem;
}

input::-webkit-input-placeholder {
  color: #ffffff;
  opacity: 0.7;
}
</style>

