<script setup lang="ts">
import QuestionForm from '@/components/question-form/QuestionForm.vue';
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router';
import { Question } from '@/interfaces/question.interface';
import { fetch, update } from '@/services/ApiService';
import { QUESTIONS_ENDPOINTS } from '@/components/questions-list/questionsList.constants';
import { ref } from 'vue';
import { AxiosResponse } from 'axios';
import router from '@/router';
import { useToastStore } from '@/stores/toasts';

const route: RouteLocationNormalizedLoaded = useRoute()
const questionData = ref<Question>(null);
const toastStore = useToastStore();

fetch(QUESTIONS_ENDPOINTS.GET_QUESTION(route.params.id)).then((response: { data: Question }) => {
    questionData.value = response.data;
});

async function updateQuestion(formData: Question){
  if(!formData.id){
    return
  }

  return update(QUESTIONS_ENDPOINTS.EDIT(formData.id), formData).then((response: AxiosResponse) => {
    if(!response) {
      return
    }

    toastStore.showToast('success', 'Question was updated');
    router.push({name: 'home'})
  });
}


</script>
<template>
  <h1>Edit Question</h1>
  <main>
    <QuestionForm v-if="questionData"
                  :form="questionData"
                  @submit="updateQuestion"/>
  </main>
</template>
