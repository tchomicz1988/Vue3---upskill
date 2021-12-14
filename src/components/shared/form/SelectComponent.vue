<script setup lang="ts">
import { SelectOption } from '@/interfaces/form.interfaces';
import { watch } from 'vue';

const props = defineProps<{
  options: SelectOption;
  multiple?: boolean,
  modelValue: string | number
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: string | number): void
}>()

watch(props, (value) => {
  console.log(value)
})
</script>

<template>
  <select class="Select"
          :multiple="multiple"
          :modelValue="modelValue"
          @change="emit('update:modelValue', $event.target.value)">
    <option :selected="modelValue === null"></option>
    <option v-for="option in options" :value="option.value" :selected="modelValue === option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<style scoped>
option {
  cursor: pointer;
}
</style>
