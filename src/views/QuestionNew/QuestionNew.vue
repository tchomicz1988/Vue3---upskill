<script setup lang="ts">
import QuestionForm from '@/components/question-form/QuestionForm.vue';
import { add } from '@/services/ApiService';
import { QUESTIONS_ENDPOINTS } from '@/components/questions-list/questionsList.constants';
import { AxiosResponse } from 'axios';
import router from '@/router';
import { reactive } from 'vue';
import { Question } from '@/interfaces/question.interface';
import { QUESTION_FORM_VALUES } from '@/components/question-form/questionForm.constants';
import { useToastStore } from '@/stores/toasts';

const form = reactive<Partial<Question>>({...QUESTION_FORM_VALUES});
const toastStore = useToastStore();

function addQuestion(formData: Partial<Question>) {
  return add(QUESTIONS_ENDPOINTS.ADD(), formData).then((response: AxiosResponse) => {
    if(!response) {
      return
    }

    toastStore.showToast('success', 'Question was added');
    router.push({name: 'home'})
  });
}
</script>
<template>
  <h1>Add new Question</h1>
  <main>
    <QuestionForm :form="form"
                  @submit="addQuestion"/>
  </main>
</template>
