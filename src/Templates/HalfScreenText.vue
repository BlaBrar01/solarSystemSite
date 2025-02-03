<script setup lang="ts">
var text = "";
function PlanetChange():void{
if(props.planet == "Sun"){
    text = "Because the Sun fuses hydrogen at its core, it is a main-sequence star. More specifically, it is a G2-type main-sequence star, where the type designation refers to its effective temperature. Hotter main-sequence stars are more luminous but shorter lived. The Sun's temperature is intermediate between that of the hottest stars and that of the coolest stars. Stars brighter and hotter than the Sun are rare, whereas substantially dimmer and cooler stars, known as red dwarfs, make up about 75% of the fusor stars in the Milky Way.[80]"; 
}
if(props.planet == "Mercury"){
    text = "... is the smallest planet in the Solar System. Its surface is grayish, with an expansive rupes (cliff) system generated from thrust faults and bright ray systems formed by impact event remnants.[92] The surface has widely varying temperature, with the equatorial regions ranging from −170 °C (−270 °F) at night to 420 °C (790 °F) during sunlight. In the past, Mercury was volcanically active, producing smooth basaltic plains similar to the Moon.[93] It is likely that Mercury has a silicate crust and a large iron core.[94][95] Mercury has a very tenuous atmosphere, consisting of solar-wind particles and ejected atoms.[96] Mercury has no natural satellites."; 
}
if(props.planet == "Venus"){
    text = "...has a reflective, whitish atmosphere that is mainly composed of carbon dioxide. At the surface, the atmospheric pressure is ninety times as dense as on Earth's sea level.[98] Venus has a surface temperatures over 400 °C (752 °F), mainly due to the amount of greenhouse gases in the atmosphere.[99] The planet lacks a protective magnetic field to protect against stripping by the solar wind, which suggests that its atmosphere is sustained by volcanic activity.[100] Its surface displays extensive evidence of volcanic activity with stagnant lid tectonics.[101] Venus has no natural satellites."; 
}
if(props.planet == "Earth"){
    text = "... is the only place in the universe where life and surface liquid water are known to exist.[102] Earth's atmosphere contains 78% nitrogen and 21% oxygen, which is the result of the presence of life.[103][104] The planet has a complex climate and weather system, with conditions differing drastically between climate regions.[105] The solid surface of Earth is dominated by green vegetation, deserts and white ice sheets.[106][107][108] Earth's surface is shaped by plate tectonics that formed the continental masses.[93] Earth's planetary magnetosphere shields the surface from radiation, limiting atmospheric stripping and maintaining life habitability"; 
}
if(props.planet == "Mars"){
    text = "... has a radius about half of that of Earth.[116] Most of the planet is red due to iron oxide in Martian soil,[117] and the polar regions are covered in white ice caps made of water and carbon dioxide.[118] Mars has an atmosphere composed mostly of carbon dioxide, with surface pressure 0.6% of that of Earth, which is sufficient to support some weather phenomena.[119] During the Mars year (687 Earth days), there are large surface temperature swings on the surface between −78.5 °C (−109.3 °F) to 5.7 °C (42.3 °F). The surface is peppered with volcanoes and rift valleys, and has a rich collection of minerals.[120][121] Mars has a highly differentiated internal structure, and lost its magnetosphere 4 billion years ago.[122][123] Mars has two tiny moons"; 
}
if(props.planet == "Jupiter"){
    text = "... is the biggest and most massive planet in the Solar System. On its surface, there are orange-brown and white cloud bands moving via the principles of atmospheric circulation, with giant storms swirling on the surface such as the Great Red Spot and white 'ovals'. Jupiter possesses a strong enough magnetosphere to redirect ionizing radiation and cause auroras on its poles"; 
}
if(props.planet == "Saturn"){
    text = "... has a distinctive visible ring system orbiting around its equator composed of small ice and rock particles. Like Jupiter, it is mostly made of hydrogen and helium.[176] At its north and south poles, Saturn has peculiar hexagon-shaped storms larger than the diameter of Earth. Saturn has a magnetosphere capable of producing weak auroras"; 
}
if(props.planet == "Uranus"){
    text = "... uniquely among the planets, orbits the Sun on its side with an axial tilt >90°. This gives the planet extreme seasonal variation as each pole points alternately toward and then away from the Sun.[184] Uranus' outer layer has a muted cyan color, but underneath these clouds are many mysteries about its climate, such as unusually low internal heat and erratic cloud formation."; 
}
if(props.planet == "Neptune"){
    text = "... is the furthest planet known in the Solar System. Its outer atmosphere has a slightly muted cyan color, with occasional storms on the surface that look like dark spots. Like Uranus, many atmospheric phenomena of Neptune are unexplained, such as the thermosphere's abnormally high temperature or the strong tilt (47°) of its magnetosphere. "; 
}
}
import { watch } from "vue";
import Text from './TextContainer.vue';
const props = defineProps({
  planet: String
})
var title = props.planet;
PlanetChange();
watch(() => props.planet, () =>{
    title = props.planet
    PlanetChange();
});

</script>
<template>
    <div class="half_container">
        <div class="half_container_title"><Text :string=title></Text></div>
            <div class="half_container_text">
                <Text :string=text></Text>
            </div>
    </div>
</template>
<style lang="scss" scoped>
    .half_container{
        display: flex;
        flex-direction: column;
        width:50%;
        margin-left:15px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
    .half_container_title{
        font-size:30px;
        width:100%;
        height:60px;
        font-weight:bold;
    }
    .half_container_text{
        font-size: 16px;
    }
</style>