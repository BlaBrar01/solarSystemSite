<script setup>
import {useI18n} from "vue-i18n";
const { locale}  = useI18n()
const { t } = useI18n()

import { watch } from "vue";
import Text from './TextContainer.vue';

var text = "";
function PlanetChange(){
if(props.planet == "Sun"){
    text = t('planet.Sun.desc');
}
if(props.planet == "Mercury"){
    text = t('planet.Mercury.desc');
}
if(props.planet == "Venus"){
    text = t('planet.Venus.desc');
}
if(props.planet == "Earth"){
    text = t('planet.Earth.desc');
}
if(props.planet == "Mars"){
    text = t('planet.Mars.desc');
}
if(props.planet == "Jupiter"){
    text = t('planet.Jupiter.desc');
}
if(props.planet == "Saturn"){
    text = t('planet.Saturn.desc');
}
if(props.planet == "Uranus"){
    text = t('planet.Uranus.desc');
}
if(props.planet == "Neptune"){
    text = t('planet.Neptune.desc');
}
}

const props = defineProps({
  planet: String
})
var title = props.planet;
PlanetChange();
watch(() => props.planet, () =>{
    title = props.planet
    PlanetChange();
});
watch(() => locale.value, () =>{
    title = props.planet
    PlanetChange();
});
</script>
<template>
    <div class="half_container">
        <div class="half_container_title"><Text :string="t('menu.'+title)"></Text></div>
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
        font-size:2rem;
        padding:12px;
        width:100%;
        height:60px;
        font-weight:bold;
    }
    .half_container_text{
        font-size: 16px;

    }
    @media (max-width:768px){
        .half_container_text{
        padding:12px;
        position:relative;

    }
    }

</style>