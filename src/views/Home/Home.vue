<script setup lang="ts">
import TheQuestionsList from "@/components/questions-list/TheQuestionsList.vue";
import { useQuestions } from "@/components/questions-list/useQuestions";
import TheQuestionsFilters from "@/components/questions-filters/TheQuestionsFilters.vue";
import { fetch } from '@/services/ApiService';
import { QUESTIONS_ENDPOINTS } from '@/components/questions-list/questionsList.constants';
import { Question } from '@/interfaces/question.interface';
import { identity, pickBy } from 'lodash-es';

const  { questions } = useQuestions();

updateList();

function updateList(formData? : Partial<Question>) {
  const params = {
    question_like: formData?.question,
    type: formData?.type,
    level: formData?.level,
  }

  fetch(QUESTIONS_ENDPOINTS.ALL(), {
    params:  pickBy( params, identity),
  }).then((response: { data: any }) => {
    questions.value = response.data;
  });
}
</script>

<template>
  <h1>Questions List</h1>
  <main>
    <div class="Home-filters">
      <TheQuestionsFilters @form="updateList"/>
    </div>
    <div class="Home-list">
      <TheQuestionsList :questions="questions" />
    </div>

  </main>
</template>

<style lang="scss">
.Home-filters{
  overflow: hidden;
}
.Home-list {
  padding-top: 40px;
  width: 100%;
}
</style>
