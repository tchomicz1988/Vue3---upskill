<script setup lang="ts">
import Header from "@/components/header/Header.vue";
import Loader from "./components/loader/Loader.vue";
import ToastMessage from '@/components/shared/ToastMessage.vue';
</script>

<template>
  <Header />
  <ToastMessage />
  <Loader />
  <router-view />
</template>

<style lang="scss">
@use "@/assets/normalize.css";
@use "@/assets/base.scss";
</style>
