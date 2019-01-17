<template>
  <div>
    <v-add></v-add>
    <div class="data">
      <div class="list" v-for="(item,index) in home" :key="index">
        <span class="time">{{item.currentTime}}</span>
        <span class="fx">{{item.text}}</span>
        <i class="iconfont icon-wancheng" @click="doneItem(item,index)"></i>
      </div>
      <div class="length" v-if="!home.length">
        <img src>
        <span>add...</span>
      </div>
    </div>
    <v-foot></v-foot>
  </div>
</template>
<script>
import HeadAdd from "./HeadAdd";
import Footer from "./Footer";
import {mapGetters} from 'vuex'

import { Toast } from "mint-ui";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    "v-add": HeadAdd,
    "v-foot": Footer
  },
  computed: {
    home(){
      return this.$store.state.home
    },
    // ...mapGetters(["this.$store.state.home"])
  },
  methods: {
    doneItem(item,index) {
      Toast({
        message: "done!",
        iconClass: "iconfont icon-wancheng",
        duration: 600
      });
      var data = {
        name:item.text
      }
      this.$store.state.home.splice(index,1)
      this.$store.dispatch('setDone',data)
    }
  }
};
</script>
<style>
.length {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 30%;
}
.length span {
  font-size: 0.38rem;
  padding-top: 0.3rem;
  color: #cccccc;
}
.data {
  margin-bottom: 1.6rem;
  padding-top: 1.5rem;
}
.list {
  width: 95%;
  height: 1.4rem;
  line-height: 1rem;
  margin: 0.3rem auto;
  background: #ffffff;
  border-radius: 5px;
}
.list i {
  float: right;
  width: 1rem;
  line-height: 1.4rem;
  margin-right: 0.3rem;
  font-size: 0.52rem;
  color: #32c9ff;
}
.time {
  font-size: 0.43rem;
  line-height: 1.4rem;
  color: #32c9ff;
  padding-left: 0.5rem;
  float: left;
}
.fx {
  width: 5rem;
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
</style>

