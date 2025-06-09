<script setup>
import { loadFull } from "tsparticles";

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = (container) => {

};
</script>
<template>
      <vue-particles
          id="tsparticles"
          :particlesInit="particlesInit"
          :particlesLoaded="particlesLoaded"
          :options="{
    background: {
                color: '#0d0d0d',
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
</template>
<style lang="scss" scoped>
    .particles_container{
        height:1000px;
    }
    #tsparticles {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
}
</style>