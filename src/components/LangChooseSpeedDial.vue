//@ts-ignore
<script setup>
import { useI18n } from 'vue-i18n'
const { locale, setLocale, availableLocales } = useI18n()
function changeLanguage(newLocale) {
  locale.value = newLocale;
}
</script>

<template>
    <div class="_speedDial_wrapper">
    <v-speed-dial
  location="right center"
  transition="scale-transition"
>
  <template v-slot:activator="{ props: activatorProps }">
    <v-fab
      v-bind="activatorProps"
      size="small"
      icon=""
      variant="text"
      class="_language_changer_button"
    >{{ locale }}</v-fab>
  </template>
  <v-btn
    size="small"
      icon=""
      class="_language_changer_button"
      variant="text"
      v-for="loc in availableLocales"
      :key="loc"
      @click="changeLanguage(loc);"
      >
    {{ loc }}
  </v-btn>
</v-speed-dial>
</div>
</template>
<style scoped>
._language_changer_button{
  background-color:var(--color);
  border-radius:50%;
}
._speedDial_wrapper{
  position:fixed;
  background-color:var(--color);
  border-radius:50%;
  bottom:32px;
  right:32px;
}

</style>
