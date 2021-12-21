<script setup lang="ts">
import { Question } from '@/types/question.interface';
import { reactive } from 'vue';
import { FILTERS_LEVEL_OPTIONS, FILTERS_TYPE_OPTIONS } from '@/types/questions-filters.model';
import { enumToOptions } from '@/utils/form.utils';
import { SelectOption } from '@/types/form.interfaces';
import FormLabel from '@/components/shared/FormLabel.vue';
import FormSelect from '@/components/shared/FormSelect.vue';
import {useQuestions} from "@/composables/useQuestions";
import BaseFormInput from "@/components/shared/BaseFormInput.vue";

const emit = defineEmits<{
  (e: 'form', form:  Partial<Question>): void
}>()

const levelOptions: SelectOption[] = enumToOptions(FILTERS_LEVEL_OPTIONS, true);
const typeOptions: SelectOption[] = enumToOptions(FILTERS_TYPE_OPTIONS, true);

const { filters, updateFilters, clearFilters } = useQuestions();

</script>

<template>
  <form class="QuestionsFilters"
        @submit.prevent="emit( 'form',  form )">
    <FormLabel label="Question">
      <BaseFormInput type="search"
             id="question"
             :modelValue="filters.question"
             @update:modelValue="updateFilters({question: $event})"
      />
    </FormLabel>
    <FormLabel label="Level">
      <FormSelect :modelValue="filters.level"
                  @update:modelValue="updateFilters({level: $event})"
                  :options="levelOptions" />
    </FormLabel>
    <FormLabel label="Type">
      <FormSelect :modelValue="filters.type"
                  @update:modelValue="updateFilters({type: $event})"
                  :options="typeOptions" />
    </FormLabel>

    <button @click="clearFilters">Clear</button>
  </form>

</template>

<style scoped lang="scss">
.QuestionsFilters {
  float: right;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 100px 100px;
  align-items: end;
  column-gap: 0.4rem
}

</style>
