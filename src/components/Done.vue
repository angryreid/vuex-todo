<template>
  <div>
    <div class="done_header">
      <span>Done Item</span>
    </div>
    <div class="done">
      <div class="done_list" v-for="(list,index) in item" :key="index">
        <span class="yes">done</span>
        <del class="name">{{list.name}}</del>
        <i class="iconfont icon-lajitong" @click="del(list,index)"></i>
      </div>
      <div class="no_done" v-if="!item.length">
        <img src alt>
        <span>there are empty...</span>
      </div>
    </div>
    <v-foot></v-foot>
  </div>
</template>
<script>
import Foot from "./Footer";
import { mapState } from "vuex";
import { Toast } from "mint-ui";
export default {
  name: "Done",
  data() {
    return {};
  },
  components: {
    "v-foot": Foot
  },
  computed: {
    item() {
      return this.$store.state.item;
    },
    ...mapState(["this.$store.state.item"])
  },
  methods: {
    del(list, index) {
      Toast({
        message: "delete success...",
        iconClass: "iconfont icon-wancheng",
        duration: 600
      });
      this.$store.state.item.splice(index, 1);
      localStorage.setItem('name',JSON.stringify(this.$store.state.item))
    }
  }
};
</script>
<style>
.done_header {
  width: 100%;
  height: 1.5rem;
  background: #32c9ff;
  position: fixed;
}
.done_header span {
  font-size: 0.3rem;
  line-height: 1.5rem;
  font-size: 0.5rem;
  color: #ffffff;
  text-align: center;
  display: block;
}

.done {
  margin-bottom: 1.6rem;
  padding-top: 1.5rem;
}

.done_list {
  width: 95%;
  height: 1.4rem;
  line-height: 1rem;
  margin: 0.3rem auto;
  background: #ffffff;
  border-radius: 5px;
}

.done_list i {
  float: right;
  width: 1rem;
  line-height: 1.4rem;
  margin-right: 0.3rem;
  font-size: 0.52rem;
  color: #cccccc;
}

.name {
  width: 6rem;
  font-size: 0.43rem;
  line-height: 1.4rem;
  padding-left: 0.5rem;
  color: #ccc;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  float: left;
}
.yes {
  font-size: 0.43rem;
  line-height: 1.4rem;
  color: #32c9ff;
  padding-left: 0.5rem;
  float: left;
}

.no_done {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 30%;
}

.no_done span {
  font-size: 0.38rem;
  padding-top: 0.3rem;
  color: #cccccc;
}
</style>
