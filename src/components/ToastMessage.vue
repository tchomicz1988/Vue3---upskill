<script setup lang="ts">
import { ToastStoreState, useToastStore } from '@/stores/toasts';
import { computed } from 'vue';


const defaultMsg = {
  error: 'Something went wrong, please try again',
  success: 'Success, the operation has been completed successfully',
  info: ''
}

const toastStore = useToastStore();
const props: ToastStoreState = computed(() => toastStore.props)
</script>

<template>
  <div v-if="props.show"
       :class="`ToastMessage ToastMessage--${props.type}`">{{ props.msg || defaultMsg[props.type]}}</div>
</template>


<style scoped lang="scss">
.ToastMessage {
  text-align: center;
  font-size: 2rem;
  padding: 1rem 0;

  &--error {
    background: #fdaaaa;
    color: #ff1616;
  }

  &--success {
    background: #8cffad;
    color: #167940;
  }

  &--info {
    background: #8bd6fd;
    color: #165079;
  }
}
</style>


