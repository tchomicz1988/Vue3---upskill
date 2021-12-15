<script setup lang="ts">
import { computed } from 'vue';

import { useLoaderStore } from '@/stores/loader';

const loaderStore = useLoaderStore();
const loading = computed(() => loaderStore.loading);
</script>

<template>
  <div v-if="loading" class="LoaderOverlay">
    <div class="Loader">Loading...</div>
  </div>
</template>

<style scoped lang="scss">
@-webkit-keyframes load1 {
  0%, 80%, 100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}

@keyframes load1 {
  0%, 80%, 100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}

.LoaderOverlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: var(--overlay-bg);
  z-index: 999;
  top: 0;
  bottom: 0;
}

.Loader {
  background: var(--color-orange);
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
  color: var(--color-orange);
  text-indent: -9999em;
  position: absolute;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  &:before {
    background: var(--color-orange);
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
    position: absolute;
    top: 0;
    content: "";
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &:after {
    background: var(--color-orange);
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
    position: absolute;
    top: 0;
    content: "";
    left: 1.5em;
  }
}

</style>
