<script setup lang="ts">
defineProps<{
  label: string;
  required?: boolean;
}>();
</script>

<template>
  <div class="Label">
    <label :required="required">{{label}}</label>
    <slot></slot>
  </div>

</template>

<style scoped>
.Label{
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
