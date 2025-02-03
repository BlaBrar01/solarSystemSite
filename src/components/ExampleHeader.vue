<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <header>
    <div class="container">
        <nav class="container__main">
            <ul class="nav-routes">
              <RouterLink class="nav-routes_element" to="/">System</RouterLink>
                <RouterLink class="nav-routes_element" to="/about">About me</RouterLink>
            </ul>
        </nav>
        <nav class="container__spheres">
            <ul class="nav-routes">
                <RouterLink class="nav-routes_element" to="/Sun">Sun</RouterLink>
                <RouterLink class="nav-routes_element" to="/Mercury">Mercury</RouterLink>
                <RouterLink class="nav-routes_element" to="/Venus">Venus</RouterLink>
                <RouterLink class="nav-routes_element" to="/Earth">Earth</RouterLink>
                <RouterLink class="nav-routes_element" to="/Mars">Mars</RouterLink>
                <RouterLink class="nav-routes_element" to="/Jupiter">Jupiter</RouterLink>
                <RouterLink class="nav-routes_element" to="/Saturn">Saturn</RouterLink>
                <RouterLink class="nav-routes_element" to="/Uranus">Uranus</RouterLink>
                <RouterLink class="nav-routes_element" to="/Neptune">Neptune</RouterLink>
            </ul>
        </nav>
    </div>
    </header>   
</template>


<style lang="scss" scoped>
  .container{
    display: flex;
    justify-content: center;
    height: 75px;
    
  }
  .nav-routes{
    display: flex;
    padding-right:10px;
    padding-left:10px;
    font-weight:bold;
    font-size: 20px;

  }
  @media only screen and (max-width: 1024px) {
    .nav-routes{
      font-size:15px;
    }
      
    }
  .nav-routes_element{
    display: flex;
    align-items: center;
    margin-right:10px;
    margin-left:10px;
    height:50px;
    opacity: 0.4;
    transition: 0.2s;
  }

</style>