<script setup lang="ts">
defineProps<{
  message?: string;
}>();

</script>
<template>
  <span class="ErrorMessage">{{ message }}</span>
</template>
<style scoped>
.ErrorMessage {
  color: #ff1616;
}
</style>
