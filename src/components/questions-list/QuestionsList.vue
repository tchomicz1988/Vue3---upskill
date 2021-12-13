<script setup lang="ts">

import { Question } from '@/interfaces/question.interface';

const props = defineProps<{
  questions?: Question[];
}>();
</script>

<template>
  <table class="querstionTable">
    <tr class="querstionTable__row">
      <th class="querstionTable__cel--th">Lp.</th>
      <th class="querstionTable__cel--th">Question</th>
      <th class="querstionTable__cel--th">Type</th>
      <th class="querstionTable__cel--th">Level</th>
      <th class="querstionTable__cel--th">Action</th>
    </tr>
    <tr
      v-for="(question, index) in questions"
      :key="question.id"
      class="querstionTable__row"
    >
      <td class="querstionTable__cel">{{ index + 1 }}</td>
      <td class="querstionTable__cel">{{ question.question }}</td>
      <td class="querstionTable__cel">{{ question.type }}</td>
      <td class="querstionTable__cel">{{ question.level }}</td>
      <td class="querstionTable__cel">Button</td>
    </tr>
  </table>
</template>

<style scoped>
.querstionTable {
  width: 100%;
  border-spacing: 0;
}

.querstionTable__cel--th,
.querstionTable__cel {
  border-bottom: solid 1px var(--color-border);
  height: 4rem;
  text-align: center;
}

.querstionTable__cel--th {
  background: var(--color-border);
}
</style>
