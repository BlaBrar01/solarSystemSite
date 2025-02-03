<script setup lang="ts">

import { RouterView } from 'vue-router'
import ExampleHeader from "./components/ExampleHeader.vue"
import Particles from './components/Particles.vue'

</script>
<template>
  <Particles/>
  <ExampleHeader />
  <RouterView />

</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  * {
    font-family: "Space Mono", sans-serif;
    color: white;
    overflow-y: hidden;
  }

  *:link{
    text-decoration: none;
  }
  .main_container{
    margin:16px 16px 16px 16px;
  }
  
</style>