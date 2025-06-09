<script setup>
import { ref } from "vue";
import { RouterLink } from 'vue-router';
import { useWindowSize } from '@vueuse/core'
import { loadFull } from "tsparticles";
import {useI18n} from "vue-i18n";
const { t } = useI18n()
const { width } = useWindowSize()
const particlesInit = async (engine) => {
  await loadFull(engine);
};
const isActive = ref(false);
const slideable = document.getElementsByClassName("container_menu");
const toggleClass = () => {
  if (isActive.value) {
      slideable[0].id = "slide_left";
  } else {
      slideable[0].id = "slide_right";
  }
  isActive.value = !isActive.value;

};
const particlesLoaded = (container) => {

  function slide_left() {
    slideable[0].id = "slide_left";
    isActive.value = false;
}
  window.addEventListener("resize", slide_left);
};
</script>
<template>
    <header>
      <div class="burger">
        <div class="container_burger" @click="toggleClass" :class="{ change: isActive }">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
    <div class="container_menu">
      <div class="particles_menu" v-if="width <= 1024">
                <vue-particles
                  id="tsparticles_menu"
                  :particlesInit="particlesInit"
                  :particlesLoaded="particlesLoaded"
                  :options="{
                    fullScreen: { enable: false },
            background: {
                        color: 'transparent',
            },
            particles: {
                number: {
                value: 200,
                density: {
                    enable: true,
                    area: 800,
                },
                },
                color: {
                value: '#fff',
                },
                shape: {
                type: 'circle',
                },
                opacity: {
                value: 1,
                random: true,
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.3,
                    sync: false,
                },
                },
                size: {
                value: { min: 0.5, max: 3 },
                random: true,
                },
                move: {
                enable: true,
                speed: 0.1,
                direction: 'none',
                random: true,
                straight: false,
                outModes: {
                    default: 'out',
                },
                },
            },
            interactivity: {
                events: {
                onHover: {
                    enable: true,
                    mode: 'bubble',
                },
                },
                modes: {
                bubble: {
                    distance: 100,
                    size: 4,
                    duration: 2,
                    opacity: 0.8,
              },
            },
          },
        }"
              />
        </div>
      <div class="container__options">

        <nav class="container__spheres">
            <ul class="nav-routes">
                <RouterLink class="nav-routes_element" to="/Sun">{{t('menu.Sun')}}</RouterLink>
                <RouterLink class="nav-routes_element" to="/Mercury">{{t('menu.Mercury')}}</RouterLink>
                <RouterLink class="nav-routes_element" to="/Venus">{{t('menu.Venus')}}</RouterLink>
                <RouterLink class="nav-routes_element" to="/Earth">{{t('menu.Earth')}}</RouterLink>
                <RouterLink class="nav-routes_element" to="/Mars">{{t('menu.Mars')}}</RouterLink>
                <RouterLink class="nav-routes_element" to="/Jupiter">{{t('menu.Jupiter')}}</RouterLink>
                <RouterLink class="nav-routes_element" to="/Saturn">{{t('menu.Saturn')}}</RouterLink>
                <RouterLink class="nav-routes_element" to="/Uranus">{{t('menu.Uranus')}}</RouterLink>
                <RouterLink class="nav-routes_element" to="/Neptune">{{t('menu.Neptune')}}</RouterLink>
            </ul>
        </nav>
      </div>
    </div>
    </header>
</template>


<style lang="scss" scoped>
  #slide_right{
    -webkit-animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;;
  }
  #slide_left{
	-webkit-animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  .container_menu{
    display: flex;
    justify-content: center;
    height: 100%;
    padding:32px;

  }
  .nav-routes{
    display: flex;
    padding-right:10px;
    padding-left:10px;
    font-weight:bold;
    font-size: 20px;

  }
  .burger{
    display: none;
  }
  .container__options{
    display:flex;
    flex-direction: row;
  }
  @media only screen and (max-width: 1268px) {
    .nav-routes_element{
      font-size:smaller;
    }
  }
  @media only screen and (max-width: 1024px) {
    .burger{
      display: flex;
      margin: 32px;
      justify-content: flex-end;
    }
    .nav-routes{
      font-size:15px;
      flex-direction: column;
    }
    .container_menu{
    display:flex;
    flex-direction: column;
    position:fixed;
    height:100vh;
    width:30vw;
    min-width:200px;
    z-index: 10;
    background-color:#0d0d0d;
    top:0;
    left:0;
    align-items: flex-start;
    overflow: visible;
    left:-100vw;
    padding:12px;
    justify-content: flex-start;
    border-right:3px solid var(--color);

    }
    .container_menu ::-webkit-scrollbar-thumb {
    display:none;
}

    header{
      padding-top: 25px;
    }
  #tsparticles_menu {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
    margin-top:15px;
    margin-bottom:15px;

}
.container__options{
    overflow-y:auto;
    overflow-x:hidden;
    flex-direction: column;
    width: 100%;


}

}
  .nav-routes_element{
    display: flex;
    align-items: center;
    margin-right:12px;
    margin-left:12px;
    height:50px;
    font-size:20px;
    overflow:hidden;
    opacity: 0.4;
  }
@-webkit-keyframes slide-left {
  0% {
    -webkit-transform: translateX(100vw);
            transform: translateX(100vw);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}
@keyframes slide-left {
  0% {
    -webkit-transform: translateX(100vw);
            transform: translateX(100vw);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}
/* ----------------------------------------------
 * Generated by Animista on 2025-3-3 18:37:42
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-right
 * ----------------------------------------
 */
@-webkit-keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100vw);
            transform: translateX(100vw);
  }
}
@keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100vw);
            transform: translateX(100vw);
  }
}

.container_burger {
  display: inline-block;
  cursor: pointer;
  position: relative;
  z-index: 5;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
}

/* Rotate first bar */
.change .bar1 {
  transform: translate(0, 11px) rotate(-45deg);
}

/* Fade out the second bar */
.change .bar2 {opacity: 0;}

/* Rotate last bar */
.change .bar3 {
  transform: translate(0, -11px) rotate(45deg);
}


</style>
