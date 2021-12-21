<script setup lang="ts">
withDefaults(defineProps<{
  type: string;
  modelValue: string | number
}>(), {
  type: 'text',
  modelValue: ''
})


const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: string | number): void
}>()

</script>

<template>
<input :class="'Input-' + type"
       :type="type"
       :modelValue="modelValue"
       :value="modelValue"
       @change="emit('update:modelValue', $event.target.value)"/>
</template>

