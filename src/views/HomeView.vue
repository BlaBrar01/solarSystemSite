<style>
  :root{
    --color: white;
  }
</style>
<script setup lang="ts">
function PlanetChange(): void{
  if(planet.value == "Sun"){
    document.documentElement.style.setProperty("--color", "#FEBB54");
  }
  else if(planet.value == "Mercury"){
    document.documentElement.style.setProperty("--color", "#5e5e5e");
  }
  else if(planet.value == "Venus"){
    document.documentElement.style.setProperty("--color", "#ffcc33");
  }
  else if(planet.value == "Earth"){
    document.documentElement.style.setProperty("--color", "#00c853");
  }
  else if(planet.value == "Mars"){
    document.documentElement.style.setProperty("--color", "#ff2400");
  }
  else if(planet.value == "Jupiter"){
    document.documentElement.style.setProperty("--color", "#ffb74d");
  }
  else if(planet.value == "Saturn"){
    document.documentElement.style.setProperty("--color", "#b8860b");
  }
  else if(planet.value == "Uranus"){
    document.documentElement.style.setProperty("--color", "#00e5ff");
  }
  else if(planet.value == "Neptune"){
    document.documentElement.style.setProperty("--color", "#120a8f");
  }
  else if(planet.value == "about"){
    document.documentElement.style.setProperty("--color", "white");
  }
}
import { useRoute } from "vue-router";
import { ref, watch, onMounted } from "vue";
import HalfT from '../Templates/HalfScreenText.vue'
import HalfP from '../Templates/HalfScreenPhotos.vue'

defineProps({
  planet: String
})

const route = useRoute();
var planet = ref(route.params.planet);
PlanetChange();
watch(() => route.params.planet, (newPlanet) =>{
planet.value = newPlanet;
PlanetChange();
});


</script>

<template>
  <main style="overflow:visible"> 
      <div class="home_container" id="app">
      <HalfP :planet=planet></HalfP>
      <HalfT :planet=planet></HalfT>
</div>
  </main>
</template>
<style>
.home_container{
  display: flex;
  padding:60px 32px 50px 32px;
  overflow:visible;
  position:relative;
}

/* Global formatting */

.nav-routes_element:hover{
  opacity:1 !important;
  border-bottom:3px solid var(--color);
}
.router-link-active, .router-link-exact-active {
  opacity:1 !important;
  border-bottom:3px solid var(--color);
 }
.half_container_text{
  transition: all 0.2s ease;
  padding-left:25px;
  border-left:3px solid var(--color);
}
/* Responsitivity */

@media only screen and (max-width: 1024px) {
  .half_container_text {
    transition: all 0.2s ease;
    padding-bottom:25px;
    padding-left:0;
    padding-right:0;
    margin-bottom:25px;
    border-left: none;
    border-bottom:3px solid var(--color);
    min-height:300px;
}
.half_container{
  width:100%!important;
  margin-left:0px!important;
}
.home_container{
  flex-direction: column-reverse!important;
}

}
</style>
