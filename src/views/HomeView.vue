<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <main>
    <h1 class="text-4xl font-black text-center my-5">Pick a Game</h1>
    <ul class="flex flex-row gap-10 justify-center">
        <RouterLink class="nav-link" to="/connect-four">Connect Four</RouterLink>
        <RouterLink class="nav-link" to="/color-guesser">Color Guesser</RouterLink>
    </ul>
  </main>
</template>
<style scoped>
.nav-link{
    border:black 2px solid;
    padding: 5px;
}
</style>
