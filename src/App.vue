<script setup lang="ts">
import TheHeader from "@/components/header/TheHeader.vue";
import TheLoader from "./components/loader/TheLoader.vue";
import TheToastMessage from '@/components/toast-message/TheToastMessage.vue';
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
