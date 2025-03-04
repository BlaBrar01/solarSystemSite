<style>
  :root{
    --color: white;
  }
</style>
<script setup lang="ts">
function PlanetChange(): void{
  if(planet.value == "Sun"){
    document.documentElement.style.setProperty("--color", "#FEBB54");
    scroll();
  }
  else if(planet.value == "Mercury"){
    document.documentElement.style.setProperty("--color", "#5e5e5e");
        scroll();
  }
  else if(planet.value == "Venus"){
    document.documentElement.style.setProperty("--color", "#ffcc33");
        scroll();
  }
  else if(planet.value == "Earth"){
    document.documentElement.style.setProperty("--color", "#00c853");
        scroll();
  }
  else if(planet.value == "Mars"){
    document.documentElement.style.setProperty("--color", "#ff2400");
        scroll();
  }
  else if(planet.value == "Jupiter"){
    document.documentElement.style.setProperty("--color", "#ffb74d");
        scroll();
  }
  else if(planet.value == "Saturn"){
    document.documentElement.style.setProperty("--color", "#b8860b");
        scroll();
  }
  else if(planet.value == "Uranus"){
    document.documentElement.style.setProperty("--color", "#00e5ff");
        scroll();
  }
  else if(planet.value == "Neptune"){
    document.documentElement.style.setProperty("--color", "#120a8f");
        scroll();
  }
  else if(planet.value == "about"){
    document.documentElement.style.setProperty("--color", "white");
        scroll();
  }
function scroll() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}
  window.addEventListener("resize", scroll);
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
  <main style="overflow:visible; pointer-events: none; z-index: 1;">
      <div class="home_container" id="app">
        <div class="box">
          <HalfP :planet=planet></HalfP>
          <HalfT :planet=planet></HalfT>
        </div>
      </div>
  </main>
</template>
<style>
.box{
  display: flex;
  width:100%;
  justify-content: center;
  overflow: visible;
}
.home_container{
  display: flex;
  margin:60px 32px 0px 32px;
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
    position:relative;
    min-height:300px;
}
.half_container{
  width:100%!important;
  margin-left:0px!important;
  position:absolute;


}
.box{
  height:900px;
  overflow:hidden;
}
.home_container{
  overflow: hidden;
}
*{
  overflow:unset;
}

}
</style>
