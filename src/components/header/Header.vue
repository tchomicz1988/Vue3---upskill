<script setup lang="ts">
defineProps<{
  msg?: string;
}>();
</script>

<template>
  <header class="header">
    <router-link class="logo" to="/">interview PGS</router-link>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/new">New</router-link>
    </nav>
  </header>
</template>

<style scoped>
@import "./header.css";
</style>
