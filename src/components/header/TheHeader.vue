<script setup lang="ts">
defineProps<{
  msg?: string;
}>();
</script>

<template>
  <header class="Header">
    <router-link class="Header-logo"
                 to="/">interview PGS</router-link>
    <nav class="Header-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/add-question">Add question</router-link>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@use "./header";
</style>
