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
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #0d0d0d;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--color);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--color);
}
  @media only screen and (max-width: 666px) {
    *{font-size: 12px;}


  }

</style>