<script setup lang="ts">
import LabelComponent from '@/components/shared/form/LabelComponent.vue';
import InputComponent from '@/components/shared/form/InputComponent.vue';
import ErrorMessage from '@/components/shared/form/ErrorMessage.vue';
import { reactive, Ref } from 'vue';
import { Question } from '@/interfaces/question.interface';
import { QUESTION_FORM_VALUES } from './questionForm.model';
import SelectComponent from '@/components/shared/form/SelectComponent.vue';
import { SelectOption } from '@/interfaces/form.interfaces';
import { enumToOptions } from '@/utils/form.utils';
import { FILTERS_LEVEL_OPTIONS, FILTERS_TYPE_OPTIONS } from '@/components/filters/filters.model';
import { useToastStore } from '@/stores/toasts';
import useVuelidate, { Validation } from '@vuelidate/core'
import { required, maxLength } from '@vuelidate/validators'
import { add, update } from '@/services/ApiService';
import { QUESTIONS_ENDPOINTS } from '@/components/questions-list/QuestionsList.constants';
import { AxiosResponse } from 'axios';
import router from '@/router';

const props = defineProps<{
  form?: Question;
}>();

const editMode = !!props.form;
const form = reactive<Partial<Question>>({...(editMode ? props.form : QUESTION_FORM_VALUES)});
const levelOptions: SelectOption[] = enumToOptions(FILTERS_LEVEL_OPTIONS, true);
const typeOptions: SelectOption[] = enumToOptions(FILTERS_TYPE_OPTIONS, true);
const toastStore = useToastStore();
const rules = {
  question: {maxLength: maxLength(255), required, $autoDirty: true},
  type: {required, $autoDirty: true},
  level: {required, $autoDirty: true},
}

const $v: Ref<Validation> = useVuelidate(rules, form)

async function send() {
  const valid = await $v.value.$validate()
  if(!valid) {
    return
  }

  editMode ? editQuestion() : addQuestion();

}

function editQuestion() {
  update(QUESTIONS_ENDPOINTS.EDIT(form.id), form).then((response: AxiosResponse) => {
    if(!response) {
      return
    }

    toastStore.showToast('success', 'Question was updated');

    router.push({name: 'home'})

  });
}

function addQuestion() {
  add(QUESTIONS_ENDPOINTS.ADD(), form).then((response: AxiosResponse) => {
    if(!response) {
      return
    }

    toastStore.showToast('success', 'Question was added');
    router.push({name: 'home'})

  });
}

</script>

<template>

  <form class="QuestionForm" @submit.prevent="send">
    <LabelComponent label="Question" :required="true">
      <InputComponent type="text" v-model="form.question" @blur="$v.question.$touch"/>
      <ErrorMessage :message="$v.question.$errors[0]?.$message"/>
    </LabelComponent>
    <div class="QuestionForm-col2">
      <LabelComponent label="Level" :required="true">
        <SelectComponent v-model="form.level" :options="levelOptions" @blur="$v.level.$touch"/>
        <ErrorMessage :message="$v.level.$errors[0]?.$message"/>
      </LabelComponent>
      <LabelComponent label="Level" :required="true">
        <SelectComponent v-model="form.type" :options="typeOptions" @blur="$v.type.$touch"/>
        <ErrorMessage :message="$v.type.$errors[0]?.$message"/>
      </LabelComponent>
    </div>
    <button type="submit"
            :disabled="$v.$invalid || !$v.$anyDirty"
            @submit.prevent="send">
      {{editMode? 'Update Question' : 'Add Question'}}</button>
  </form>

</template>


<style scoped>
.QuestionForm {
  margin: auto;
  width: 600px;
  display: grid;
  grid-gap: 4px;
}

.QuestionForm-col2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4px;
}

</style>
