<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from './components/Home.vue'


</script>

<template>
  <div class="home-bg"></div>
  <Home />
</template>


<style lang="scss" scoped>
.home-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #63448C 0%, #46A0B3 100%);
}
</style>