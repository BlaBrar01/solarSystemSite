
<template>
    <div class="half_container">
        <div class="planet_container" id="animete_top">
          <div id="planet_expose" class=" ">
              <div class="planet bottom planet-bg"></div>
              <div class="rings"></div>
              <div class="planet top planet-bg"></div>
          </div>
        </div>
    </div>
</template>
<script setup>
import { watch, onMounted } from "vue";
const props = defineProps({
  planet: String
})
onMounted(() => {
const planet_animation = document.getElementsByClassName("planet_container");
planet_animation[0].id = "animete_top";
const planet_expose = document.getElementById("planet_expose");
const saturn_planet = document.getElementsByClassName("planet");
const saturn_ring = document.getElementsByClassName("rings");
planet_expose.style.display = "none"
saturn_planet[0].style.display = "none"
saturn_planet[1].style.display = "none"
saturn_ring[0].style.display = "none"
planet_expose.className = props.planet;

function PlanetChange(){
  if(props.planet == "Sun"){
          planet_animation[0].id = "animete_bottom"
          setTimeout(function(){ 
            planet_expose.style.display = "block"
            saturn_planet[0].style.display = "none"
            saturn_planet[1].style.display = "none"
            saturn_ring[0].style.display = "none"
            planet_expose.className = "Sun";
            planet_animation[0].id = "animete_top"
    }, 500);  
}
    if(props.planet == "Mercury"){
          planet_animation[0].id = "animete_bottom"
          setTimeout(function(){ 
            planet_expose.style.display = "block"
            saturn_planet[0].style.display = "none"
            saturn_planet[1].style.display = "none"
            saturn_ring[0].style.display = "none"
            planet_expose.className = "Mercury";
            planet_animation[0].id = "animete_top"
    }, 500);  
}
    if(props.planet == "Venus"){

      planet_animation[0].id = "animete_bottom"
          setTimeout(function(){ 
            planet_expose.style.display = "block"
            saturn_planet[0].style.display = "none"
            saturn_planet[1].style.display = "none"
            saturn_ring[0].style.display = "none"
            planet_expose.className = "Venus";
            planet_animation[0].id = "animete_top"
    }, 500);  
}
    if(props.planet == "Earth"){
      planet_animation[0].id = "animete_bottom"
          setTimeout(function(){
            planet_expose.style.display = "block" 
            saturn_planet[0].style.display = "none"
            saturn_planet[1].style.display = "none"
            saturn_ring[0].style.display = "none"
            planet_expose.className = "Earth";
            planet_animation[0].id = "animete_top"
    }, 500);  
}
    if(props.planet == "Mars"){

      planet_animation[0].id = "animete_bottom"
          setTimeout(function(){ 
            planet_expose.style.display = "block"
            saturn_planet[0].style.display = "none"
            saturn_planet[1].style.display = "none"
            saturn_ring[0].style.display = "none"
            planet_expose.className = "Mars";
            planet_animation[0].id = "animete_top"
    }, 500);  
}
    if(props.planet == "Jupiter"){

      planet_animation[0].id = "animete_bottom"
          setTimeout(function(){
            planet_expose.style.display = "block"
            saturn_planet[0].style.display = "none"
            saturn_planet[1].style.display = "none"
            saturn_ring[0].style.display = "none"
            planet_expose.className = "Jupiter";
            planet_animation[0].id = "animete_top"
    }, 500);  
}
    if(props.planet == "Saturn"){

      planet_animation[0].id = "animete_bottom"
          setTimeout(function(){
            planet_expose.style.display = "block"
            saturn_planet[0].style.display = "block"
            saturn_planet[1].style.display = "block"
            saturn_ring[0].style.display = "block"
            planet_expose.className = "Saturn";
            planet_animation[0].id = "animete_top"
    }, 500);  
}
    if(props.planet == "Uranus"){

      planet_animation[0].id = "animete_bottom"
          setTimeout(function(){
            planet_expose.style.display = "block"
            saturn_planet[0].style.display = "none"
            saturn_planet[1].style.display = "none"
            saturn_ring[0].style.display = "none"
            planet_expose.className = "Uranus";
            planet_animation[0].id = "animete_top"
    }, 500);  
}
    if(props.planet == "Neptune"){
          planet_animation[0].id = "animete_bottom"  
          setTimeout(function(){ 
            planet_expose.style.display = "block"
            saturn_planet[0].style.display = "none"
            saturn_planet[1].style.display = "none"
            saturn_ring[0].style.display = "none"
            planet_expose.className = "Neptune";
            planet_animation[0].id = "animete_top"
    }, 500);  
  }
}
PlanetChange();
watch(() => props.planet, () =>{
    PlanetChange();
});
})
</script>
<style lang="scss" scoped>
.half_container{
    display: flex;
    width:50%;
    height:127rem;
    position:relative;
    overflow: visible;
    align-items: flex-end;
}
.planet_container{
    display:flex;
    width:100%;
    justify-content: center;
    align-items: center;
    overflow: visible;  
}
#animete_bottom{
  animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
#animete_top{
  animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}


/*Neptune */
.Neptune {
  width: 20rem;
  height: 20rem;
  background: radial-gradient(circle at center, #5f78d1 20%, #4058a6 50%, #2a3d80 80%);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(50, 50, 255, 0.4);
}

.Neptune::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../planets/Neptune.jpg");
  background-size: cover;
  opacity: 0.6;
  mix-blend-mode: overlay;
  border-radius: 50%;
  filter: contrast(1.2) brightness(0.9);
}

.Neptune::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), transparent);
  border-radius: 50%;
}
/*Uranus */
.Uranus {
  width: 20rem;
  height: 20rem;
  background: radial-gradient(circle at center, #b3e0f2 20%, #6fc7d1 50%, #4a9fb8 80%);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(100, 100, 255, 0.3);
}

.Uranus::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../planets/Uranus.jpg");
  background-size: cover;
  opacity: 0.6;
  mix-blend-mode: overlay;
  border-radius: 50%;
  filter: contrast(1.2) brightness(0.9);
}

.Uranus::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), transparent);
  border-radius: 50%;
}
/*Saturn */
.Saturn {
  width: 400px;
  height: 400px;
  position: relative;
  margin: auto;
  transform: rotateZ(-15deg);
}

.rings {
  position: relative;
  width: 100%;
  height: 100%;
  
  background: -moz-radial-gradient(center, ellipse cover,  rgba(24,19,25,0) 0%, rgba(53,52,51,0) 34%, rgba(55,54,52,1) 36%, rgba(56,55,53,1) 37%, rgba(68,67,66,1) 38%, rgba(56,55,53,1) 39%, rgba(68,67,66,1) 40%, rgba(56,55,53,1) 41%, rgba(87,77,76,1) 42%, rgba(87,77,76,1) 44%, rgba(113,110,103,1) 46%, rgba(113,110,103,1) 48%, rgba(113,98,93,1) 49%, rgba(113,98,93,1) 51%, rgba(122,115,105,1) 52%, rgba(113,98,93,1) 53%, rgba(113,98,93,1) 54%, rgba(122,115,105,1) 55%, rgba(106,99,89,1) 56%, rgba(106,99,89,1) 58%, rgba(79,76,76,0) 60%, rgba(65,64,70,1) 61%, rgba(65,64,70,1) 62%, rgba(90,85,89,1) 63%, rgba(78,74,73,1) 65%, rgba(78,73,74,1) 67%, rgba(78,73,74,0) 68%, rgba(78,73,75,1) 69%, rgba(78,73,75,1) 70%, rgba(78,73,76,0) 71%, rgba(77,72,76,0) 72%, rgba(24,19,25,0) 100%);
  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(24,19,25,0)), color-stop(34%,rgba(53,52,51,0)), color-stop(36%,rgba(55,54,52,1)), color-stop(37%,rgba(56,55,53,1)), color-stop(38%,rgba(68,67,66,1)), color-stop(39%,rgba(56,55,53,1)), color-stop(40%,rgba(68,67,66,1)), color-stop(41%,rgba(56,55,53,1)), color-stop(42%,rgba(87,77,76,1)), color-stop(44%,rgba(87,77,76,1)), color-stop(46%,rgba(113,110,103,1)), color-stop(48%,rgba(113,110,103,1)), color-stop(49%,rgba(113,98,93,1)), color-stop(51%,rgba(113,98,93,1)), color-stop(52%,rgba(122,115,105,1)), color-stop(53%,rgba(113,98,93,1)), color-stop(54%,rgba(113,98,93,1)), color-stop(55%,rgba(122,115,105,1)), color-stop(56%,rgba(106,99,89,1)), color-stop(58%,rgba(106,99,89,1)), color-stop(60%,rgba(79,76,76,0)), color-stop(61%,rgba(65,64,70,1)), color-stop(62%,rgba(65,64,70,1)), color-stop(63%,rgba(90,85,89,1)), color-stop(65%,rgba(78,74,73,1)), color-stop(67%,rgba(78,73,74,1)), color-stop(68%,rgba(78,73,74,0)), color-stop(69%,rgba(78,73,75,1)), color-stop(70%,rgba(78,73,75,1)), color-stop(71%,rgba(78,73,76,0)), color-stop(72%,rgba(77,72,76,0)), color-stop(100%,rgba(24,19,25,0)));
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(24,19,25,0) 0%,rgba(53,52,51,0) 34%,rgba(55,54,52,1) 36%,rgba(56,55,53,1) 37%,rgba(68,67,66,1) 38%,rgba(56,55,53,1) 39%,rgba(68,67,66,1) 40%,rgba(56,55,53,1) 41%,rgba(87,77,76,1) 42%,rgba(87,77,76,1) 44%,rgba(113,110,103,1) 46%,rgba(113,110,103,1) 48%,rgba(113,98,93,1) 49%,rgba(113,98,93,1) 51%,rgba(122,115,105,1) 52%,rgba(113,98,93,1) 53%,rgba(113,98,93,1) 54%,rgba(122,115,105,1) 55%,rgba(106,99,89,1) 56%,rgba(106,99,89,1) 58%,rgba(79,76,76,0) 60%,rgba(65,64,70,1) 61%,rgba(65,64,70,1) 62%,rgba(90,85,89,1) 63%,rgba(78,74,73,1) 65%,rgba(78,73,74,1) 67%,rgba(78,73,74,0) 68%,rgba(78,73,75,1) 69%,rgba(78,73,75,1) 70%,rgba(78,73,76,0) 71%,rgba(77,72,76,0) 72%,rgba(24,19,25,0) 100%);
  background: -o-radial-gradient(center, ellipse cover,  rgba(24,19,25,0) 0%,rgba(53,52,51,0) 34%,rgba(55,54,52,1) 36%,rgba(56,55,53,1) 37%,rgba(68,67,66,1) 38%,rgba(56,55,53,1) 39%,rgba(68,67,66,1) 40%,rgba(56,55,53,1) 41%,rgba(87,77,76,1) 42%,rgba(87,77,76,1) 44%,rgba(113,110,103,1) 46%,rgba(113,110,103,1) 48%,rgba(113,98,93,1) 49%,rgba(113,98,93,1) 51%,rgba(122,115,105,1) 52%,rgba(113,98,93,1) 53%,rgba(113,98,93,1) 54%,rgba(122,115,105,1) 55%,rgba(106,99,89,1) 56%,rgba(106,99,89,1) 58%,rgba(79,76,76,0) 60%,rgba(65,64,70,1) 61%,rgba(65,64,70,1) 62%,rgba(90,85,89,1) 63%,rgba(78,74,73,1) 65%,rgba(78,73,74,1) 67%,rgba(78,73,74,0) 68%,rgba(78,73,75,1) 69%,rgba(78,73,75,1) 70%,rgba(78,73,76,0) 71%,rgba(77,72,76,0) 72%,rgba(24,19,25,0) 100%);
  background: -ms-radial-gradient(center, ellipse cover,  rgba(24,19,25,0) 0%,rgba(53,52,51,0) 34%,rgba(55,54,52,1) 36%,rgba(56,55,53,1) 37%,rgba(68,67,66,1) 38%,rgba(56,55,53,1) 39%,rgba(68,67,66,1) 40%,rgba(56,55,53,1) 41%,rgba(87,77,76,1) 42%,rgba(87,77,76,1) 44%,rgba(113,110,103,1) 46%,rgba(113,110,103,1) 48%,rgba(113,98,93,1) 49%,rgba(113,98,93,1) 51%,rgba(122,115,105,1) 52%,rgba(113,98,93,1) 53%,rgba(113,98,93,1) 54%,rgba(122,115,105,1) 55%,rgba(106,99,89,1) 56%,rgba(106,99,89,1) 58%,rgba(79,76,76,0) 60%,rgba(65,64,70,1) 61%,rgba(65,64,70,1) 62%,rgba(90,85,89,1) 63%,rgba(78,74,73,1) 65%,rgba(78,73,74,1) 67%,rgba(78,73,74,0) 68%,rgba(78,73,75,1) 69%,rgba(78,73,75,1) 70%,rgba(78,73,76,0) 71%,rgba(77,72,76,0) 72%,rgba(24,19,25,0) 100%);
  background: radial-gradient(ellipse at center,  rgba(24,19,25,0) 0%,rgba(53,52,51,0) 34%,rgba(55,54,52,1) 36%,rgba(56,55,53,1) 37%,rgba(68,67,66,1) 38%,rgba(56,55,53,1) 39%,rgba(68,67,66,1) 40%,rgba(56,55,53,1) 41%,rgba(87,77,76,1) 42%,rgba(87,77,76,1) 44%,rgba(113,110,103,1) 46%,rgba(113,110,103,1) 48%,rgba(113,98,93,1) 49%,rgba(113,98,93,1) 51%,rgba(122,115,105,1) 52%,rgba(113,98,93,1) 53%,rgba(113,98,93,1) 54%,rgba(122,115,105,1) 55%,rgba(106,99,89,1) 56%,rgba(106,99,89,1) 58%,rgba(79,76,76,0) 60%,rgba(65,64,70,1) 61%,rgba(65,64,70,1) 62%,rgba(90,85,89,1) 63%,rgba(78,74,73,1) 65%,rgba(78,73,74,1) 67%,rgba(78,73,74,0) 68%,rgba(78,73,75,1) 69%,rgba(78,73,75,1) 70%,rgba(78,73,76,0) 71%,rgba(77,72,76,0) 72%,rgba(24,19,25,0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00181319', endColorstr='#00181319',GradientType=1 );

  transform: rotateX(75deg);
}

.planet {
  background: green;
  width: 180px;
  height: 180px;
  position: absolute;
  top: 110px;
  left: 110px;
  border-radius: 50%;
}

.top {
  clip: rect(0px, 180px, 90px, 0px);
}

.bottom {
  clip: rect(90px, 180px, 180px, 0px);
}

.planet-bg {
  background: -moz-radial-gradient(top, circle cover,  rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 100%), -moz-radial-gradient(center, ellipse cover,  rgba(0,0,0,0) 0%, rgba(0,0,0,0) 62%, rgba(0,0,0,1) 100%), -moz-linear-gradient(bottom,  rgba(131,129,117,1) 0%, rgba(131,129,117,1) 3%, rgba(150,144,130,1) 5%, rgba(150,144,130,1) 9%, rgba(190,177,145,1) 20%, rgba(190,177,145,1) 32%, rgba(202,176,153,1) 35%, rgba(202,176,153,1) 47%, rgba(205,186,156,1) 48%, rgba(205,186,156,1) 49%, rgba(211,184,157,1) 51%, rgba(211,184,157,1) 59%, rgba(218,188,162,1) 61%, rgba(218,188,162,1) 63%, rgba(208,180,158,1) 64%, rgba(208,180,158,1) 68%, rgba(213,181,143,1) 74%, rgba(213,181,143,1) 78%, rgba(221,203,157,1) 83%, rgba(221,203,157,1) 85%, rgba(212,203,174,1) 90%, rgba(212,203,174,1) 100%);
  background: -webkit-radial-gradient(top, circle cover,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 40%,rgba(0,0,0,1) 100%), -webkit-radial-gradient(center, ellipse cover,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 62%,rgba(0,0,0,1) 100%), -webkit-linear-gradient(bottom,  rgba(131,129,117,1) 0%,rgba(131,129,117,1) 3%,rgba(150,144,130,1) 5%,rgba(150,144,130,1) 9%,rgba(190,177,145,1) 20%,rgba(190,177,145,1) 32%,rgba(202,176,153,1) 35%,rgba(202,176,153,1) 47%,rgba(205,186,156,1) 48%,rgba(205,186,156,1) 49%,rgba(211,184,157,1) 51%,rgba(211,184,157,1) 59%,rgba(218,188,162,1) 61%,rgba(218,188,162,1) 63%,rgba(208,180,158,1) 64%,rgba(208,180,158,1) 68%,rgba(213,181,143,1) 74%,rgba(213,181,143,1) 78%,rgba(221,203,157,1) 83%,rgba(221,203,157,1) 85%,rgba(212,203,174,1) 90%,rgba(212,203,174,1) 100%);
  background: -o-radial-gradient(top, circle cover,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 40%,rgba(0,0,0,1) 100%), -o-radial-gradient(center, ellipse cover,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 62%,rgba(0,0,0,1) 100%), -o-linear-gradient(bottom,  rgba(131,129,117,1) 0%,rgba(131,129,117,1) 3%,rgba(150,144,130,1) 5%,rgba(150,144,130,1) 9%,rgba(190,177,145,1) 20%,rgba(190,177,145,1) 32%,rgba(202,176,153,1) 35%,rgba(202,176,153,1) 47%,rgba(205,186,156,1) 48%,rgba(205,186,156,1) 49%,rgba(211,184,157,1) 51%,rgba(211,184,157,1) 59%,rgba(218,188,162,1) 61%,rgba(218,188,162,1) 63%,rgba(208,180,158,1) 64%,rgba(208,180,158,1) 68%,rgba(213,181,143,1) 74%,rgba(213,181,143,1) 78%,rgba(221,203,157,1) 83%,rgba(221,203,157,1) 85%,rgba(212,203,174,1) 90%,rgba(212,203,174,1) 100%);
  background: -ms-radial-gradient(top, circle cover,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 40%,rgba(0,0,0,1) 100%), -ms-radial-gradient(center, circle cover,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 62%,rgba(0,0,0,1) 100%), -ms-linear-gradient(bottom,  rgba(131,129,117,1) 0%,rgba(131,129,117,1) 3%,rgba(150,144,130,1) 5%,rgba(150,144,130,1) 9%,rgba(190,177,145,1) 20%,rgba(190,177,145,1) 32%,rgba(202,176,153,1) 35%,rgba(202,176,153,1) 47%,rgba(205,186,156,1) 48%,rgba(205,186,156,1) 49%,rgba(211,184,157,1) 51%,rgba(211,184,157,1) 59%,rgba(218,188,162,1) 61%,rgba(218,188,162,1) 63%,rgba(208,180,158,1) 64%,rgba(208,180,158,1) 68%,rgba(213,181,143,1) 74%,rgba(213,181,143,1) 78%,rgba(221,203,157,1) 83%,rgba(221,203,157,1) 85%,rgba(212,203,174,1) 90%,rgba(212,203,174,1) 100%);
  background: radial-gradient(circle at top, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 40%,rgba(0,0,0,1) 100%), radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 62%,rgba(0,0,0,1) 100%), linear-gradient(to top,  rgba(131,129,117,1) 0%,rgba(131,129,117,1) 3%,rgba(150,144,130,1) 5%,rgba(150,144,130,1) 9%,rgba(190,177,145,1) 20%,rgba(190,177,145,1) 32%,rgba(202,176,153,1) 35%,rgba(202,176,153,1) 47%,rgba(205,186,156,1) 48%,rgba(205,186,156,1) 49%,rgba(211,184,157,1) 51%,rgba(211,184,157,1) 59%,rgba(218,188,162,1) 61%,rgba(218,188,162,1) 63%,rgba(208,180,158,1) 64%,rgba(208,180,158,1) 68%,rgba(213,181,143,1) 74%,rgba(213,181,143,1) 78%,rgba(221,203,157,1) 83%,rgba(221,203,157,1) 85%,rgba(212,203,174,1) 90%,rgba(212,203,174,1) 100%);
}
/*Jupiter*/
.Jupiter {
  width: 21.8rem;
  height: 21.8rem;
  background: radial-gradient(circle at center, #e3b07a 20%, #c49060 50%, #8b5a2b 80%);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(150, 100, 50, 0.5);
}

.Jupiter::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../planets/Jupiter.jpg"); 
  background-size: cover;
  opacity: 0.8;
  mix-blend-mode: overlay;
  border-radius: 50%;
  filter: contrast(1.2) brightness(1);
}

.Jupiter::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), transparent);
  border-radius: 50%;
}
/*Mars */
.Mars {
  width: 10.6em;
  height: 10.6rem;
  background: radial-gradient(circle at center, #d77b53 20%, #a13b2d 50%, #6a1e14 80%);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(100, 50, 50, 0.5);
}

.Mars::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../planets/Mars.jpg"); 
  background-size: cover;
  opacity: 0.7;
  mix-blend-mode: overlay;
  border-radius: 50%;
  filter: contrast(1.3) brightness(0.9);
}

.Mars::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), transparent);
  border-radius: 50%;
}
/*Earth */
.Earth {
  width: 20rem;
  height: 20rem;
  background: radial-gradient(circle at center, #a1c9f2 20%, #5f8b96 50%, #3e6271 80%);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(100, 100, 100, 0.5);

}
.Earth::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../planets/Earth.jpg"); 
  background-size: cover;
  opacity: 0.7;
  mix-blend-mode: overlay;
  border-radius: 50%;
  filter: contrast(1.3) brightness(0.9);
}
.Earth::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent);
  border-radius: 50%;
}


/* Venus*/
.Venus{
    width: 19rem;
    height: 19rem;
    background: radial-gradient(circle at center, #f2e6a1 20%, #d1c183 50%, #ffcc33 80%);
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(100, 100, 100, 0.5);
}
.Venus::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../planets/Venus.jpg"); /* Cloud pattern for Venus */
    background-size: cover;
    opacity: 1;
    mix-blend-mode: overlay;
    border-radius: 50%;
    filter: contrast(1.3) brightness(0.8);
}
.Venus::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.2), transparent);
    border-radius: 50%;
}
/* Mercury */
.Mercury {
  width: 7.6rem;
  height: 7.6rem;
  background: radial-gradient(circle at center, #b1b1b1 20%, #8c8c8c 50%, #5f5f5f 80%);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(100, 100, 100, 0.5);
}

/* Surface texture (craters and roughness) */
.Mercury::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../planets/Mercury.jpg");
  background-size: cover;
  opacity: 0.8;
  mix-blend-mode: overlay;
  border-radius: 50%;
  filter: contrast(1.5) brightness(0.9);
}

/* Subtle lighting effect */
.Mercury::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent);
  border-radius: 50%;
}

/* SUN */
.Sun{
    background-image: radial-gradient(#FEBB54, #FF821D);
    border-radius: 50%;
    height: 21.8rem;
    box-shadow: 0px 7px 100px 47px rgba(255, 130, 29, 1);
    width: 21.8rem;
    animation: flicker 5s infinite alternate ease-in-out;
    }
@keyframes flicker {
  0% {
    box-shadow: 0px 7px 95px 45px rgba(255, 130, 29, 0.9);
  }
  20% {
    box-shadow: 0px 7px 105px 48px rgba(255, 130, 29, 1);
  }
  40% {
    box-shadow: 0px 7px 98px 46px rgba(255, 130, 29, 0.85);
  }
  60% {
    box-shadow: 0px 7px 102px 47px rgba(255, 130, 29, 0.95);
  }
  80% {
    box-shadow: 0px 7px 97px 46px rgba(255, 130, 29, 0.88);
  }
  100% {
    box-shadow: 0px 7px 100px 47px rgba(255, 130, 29, 0.9);
  }
}

/**
 * ----------------------------------------
 * animation slide-top
 * ----------------------------------------
 */
 @-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100rem);
            transform: translateY(-100rem);
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100rem);
            transform: translateY(-100rem);
  }
}
/**
 * ----------------------------------------
 * animation slide-bottom
 * ----------------------------------------
 */
 @-webkit-keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-100rem);
            transform: translateY(-100rem);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
@keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-100rem);
            transform: translateY(-100rem);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}

</style>