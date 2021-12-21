<script setup lang="ts">
import router from '@/router';
import {useQuestions} from "@/composables/useQuestions";

const { questions } = useQuestions();

function editQuestion(id: string){
  router.push({name: 'edit', params: { id }})
}
</script>

<template>
  <table class="QuestionTable">
    <tr>
      <th class="QuestionTable-cel--th">Lp.</th>
      <th class="QuestionTable-cel--th">Question</th>
      <th class="QuestionTable-cel--th">Type</th>
      <th class="QuestionTable-cel--th">Level</th>
    </tr>
    <tr
      v-for="(question, index) in questions"
      :key="question.id"
      @click="editQuestion(question.id)"
      class="QuestionTable-row">
      <td class="QuestionTable-cel">{{ index + 1 }}</td>
      <td class="QuestionTable-cel">{{ question.question }}</td>
      <td class="QuestionTable-cel">{{ question.type }}</td>
      <td class="QuestionTable-cel">{{ question.level }}</td>
    </tr>
  </table>
</template>

<style scoped lang="scss">
.QuestionTable {
  width: 100%;
  border-spacing: 0;
}

.QuestionTable-row{
  cursor: pointer;
}

.QuestionTable-cel--th,
.QuestionTable-cel {
  border-bottom: solid 1px var(--color-border);
  height: 4rem;
  text-align: center;
}

.QuestionTable-cel--th {
  background: var(--color-border);
}
</style>
