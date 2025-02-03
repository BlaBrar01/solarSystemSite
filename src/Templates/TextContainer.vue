<script>
import VueTyper from 'vue3-typer';
import "vue3-typer/dist/vue-typer.css"
export default {
  props: {
    string:{
      type: String,
    },
    color:{
      type: String,
    },
  },
  components: {
    VueTyper
  }
};
</script>
<template>
   <VueTyper 
   :text='[this.string]'
  :repeat='0'
  :shuffle='false'
  initial-action='typing'
  :pre-type-delay='70'
  :type-delay='20'
  :pre-erase-delay='2000'
  :erase-delay='250'
  erase-style='backspace'
  :erase-on-complete='false'
  caret-animation='blink'
   />
 </template>
 
<style lang="scss" scoped>
 .vue-typer{
   --char-typed-color: white;
}
</style>