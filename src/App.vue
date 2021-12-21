<script setup lang="ts">
import TheHeader from "@/components/TheHeader/TheHeader.vue";
import TheLoader from "./components/TheLoader.vue";
import TheToastMessage from '@/components/ToastMessage.vue';
</script>

<template>
  <TheHeader />
  <TheToastMessage />
  <TheLoader />
  <router-view />
</template>

<style lang="scss">
@use "@/assets/normalize.css";
@use "@/assets/base.scss";
</style>
