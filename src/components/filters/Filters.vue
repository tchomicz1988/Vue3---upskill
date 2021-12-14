<script setup lang="ts">
import { Question } from '@/interfaces/question.interface';
import { reactive } from 'vue';
import { FILTERS_INIT_VALUES, FILTERS_LEVEL_OPTIONS, FILTERS_TYPE_OPTIONS } from '@/components/filters/filters.model';
import { enumToOptions } from '@/utils/form.utils';
import { SelectOption } from '@/interfaces/form.interfaces';
import LabelComponent from '@/components/shared/form/LabelComponent.vue';
import SelectComponent from '@/components/shared/form/SelectComponent.vue';

const form = reactive<Partial<Question>>({...FILTERS_INIT_VALUES});
const levelOptions: SelectOption[] = enumToOptions(FILTERS_LEVEL_OPTIONS, true);
const typeOptions: SelectOption[] = enumToOptions(FILTERS_TYPE_OPTIONS, true)

function clearForm() {
  Object.assign(form, FILTERS_INIT_VALUES)
}

</script>

<template>
  <form class="Filters" @submit.prevent="$emit( 'form',  form )">
    <LabelComponent label="Question">
      <input type="search" id="question" v-model="form.question"/>
    </LabelComponent>
    <LabelComponent label="Level">
      <SelectComponent v-model="form.level" :options="levelOptions"></SelectComponent>
    </LabelComponent>
    <LabelComponent label="Type">
      <SelectComponent v-model="form.type" :options="typeOptions"></SelectComponent>
    </LabelComponent>

    <button type="submit" @click="$emit( 'form',  form )">Search</button>
    <button @click="clearForm()">Clear</button>
  </form>

</template>

<style scoped>
.Filters {
  float: right;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 100px 100px;
  align-items: end;
  column-gap: 0.4rem
}


</style>
