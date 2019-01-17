<template>
  <div class="footer">
    <router-link class="nav-item" :to="{path:'/home'}" exact tag="li">
      <i class="iconfont icon-qingdan"></i>
      <div>add</div>
    </router-link>
    <router-link class="nav-item" :to="{path:'/done'}" tag="li">
      <i class="iconfont icon-daibanrenwu"></i>
      <div>done</div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* .icon-shouye-copy-copy-copy,.icon-wode1,.icon-gouwu,.icon-faxian{
   font-size: 0.6rem;
    color: black;
  } */

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #f4f4f4;
  background: #ffffff;
  color: #ccc;
  z-index: 100;
  background: E6E6E6;
  height: 1.5rem;
}
.footer i {
  font-size: 0.57rem;
}
.nav-item {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.nav-item div {
  font-size: 0.4rem;
}
.nav-item:link,
.nav-item:visited {
  color: black;
}
.router-link:hover,
.router-link-active {
  color: #32c9ff;
}
</style>

