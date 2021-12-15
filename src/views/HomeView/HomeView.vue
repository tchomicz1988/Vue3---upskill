<script setup lang="ts">
import QuestionsList from "@/components/questions-list/QuestionsList.vue";
import { useQuestions } from "@/components/questions-list/useQuestions";
import Filters from "@/components/filters/Filters.vue";
import { fetch } from '@/services/ApiService';
import { QUESTIONS_ENDPOINTS } from '@/components/questions-list/questionsList.constants';
import { identity, pickBy } from 'lodash';

const questions = useQuestions().questions;
updateList();

function updateList(formData? : any) {
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
    <div class="HomeView-filters">
      <Filters @form="updateList"/>
    </div>
    <div class="HomeView-list">
      <QuestionsList :questions="questions" />
    </div>

  </main>
</template>

<style lang="scss">
.HomeView-filters{
  overflow: hidden;
}
.HomeView-list {
  padding-top: 40px;
  width: 100%;
}
</style>
