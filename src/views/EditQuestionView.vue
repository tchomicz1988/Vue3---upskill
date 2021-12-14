<script setup lang="ts">
import QuestionForm from '@/components/question-form/QuestionForm.vue';
import { useRoute } from 'vue-router';
import { Question } from '@/interfaces/question.interface';
import { feach } from '@/services/ApiService';
import { QUESTIONS_ENDPOINTS } from '@/components/questions-list/QuestionsList.constants';
import { ref } from 'vue';

const route = useRoute()
const questionData = ref(null)


feach(QUESTIONS_ENDPOINTS.GET_QUESTION(route.params.id)).then((response: { data: Question }) => {
    questionData.value = response.data;
});


</script>
<template>
  <h1>Edit Question</h1>
  <main>
    <QuestionForm v-if="questionData" :form="questionData"/>
  </main>
</template>
