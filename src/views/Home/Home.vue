<script setup lang="ts">
import QuestionsList from "@/views/Home/partials/QuestionsList.vue";
import { useQuestions } from "@/composables/useQuestions";
import QuestionsFilters from "@/views/Home/partials/QuestionsFilters.vue";
import { fetch } from '@/services/ApiService';
import { QUESTIONS_ENDPOINTS } from '@/constants/questionsList.constants';
import { Question } from '@/types/question.interface';
import { identity, pickBy } from 'lodash-es';
import {watchEffect} from "vue";

const { filters, updateQuestions } = useQuestions();

watchEffect(() => {
  updateList(filters)
})

function updateList(filters? : Partial<Question>) {
  const params = {
    question_like: filters?.question,
    type: filters?.type,
    level: filters?.level,
  }

  fetch(QUESTIONS_ENDPOINTS.ALL(), {
    params:  pickBy( params, identity),
  }).then((response: { data: any }) => {
    updateQuestions(response.data);
  });
}
</script>

<template>
  <h1>Questions List</h1>
  <main>
    <div class="Home-filters">
      <QuestionsFilters />
    </div>
    <div class="Home-list">
      <QuestionsList />
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
