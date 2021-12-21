<script setup lang="ts">
import QuestionForm from '@/components/QuestionsForm.vue';
import router from '@/router';
import { reactive } from 'vue';
import { Question } from '@/types/question.interface';
import { QUESTION_FORM_VALUES } from '@/constants/questionForm.constants';
import { useToastStore } from '@/stores/toasts';
import {createQuestion} from "@/services/QuestionsService";

const form = reactive<Partial<Question>>({...QUESTION_FORM_VALUES});
const toastStore = useToastStore();

function addQuestion(formData: Partial<Question>) {
  return createQuestion(formData).then((question: Question) => {
    if(!question) {
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
