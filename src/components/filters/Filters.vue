<script setup lang="ts">
import { Question } from '@/interfaces/question.interface';
import { Ref, ref } from 'vue';
import { FILTERS_INIT_VALUES, FILTERS_LEVEL_OPTIONS, FILTERS_TYPE_OPTIONS } from '@/components/filters/filters.model';
import { enumToOptions } from '@/utils/form.utils';
import { SelectOption } from '@/interfaces/form.interfaces';
import Label from '@/components/form/label.vue';

const form: Ref<Partial<Question>> = ref({...FILTERS_INIT_VALUES});
const levelOptions: SelectOption[] = enumToOptions(FILTERS_LEVEL_OPTIONS, true);
const typeOptions: SelectOption[] = enumToOptions(FILTERS_TYPE_OPTIONS, true)

function clearForm() {
  form.value = {... FILTERS_INIT_VALUES}
}

</script>

<template>
  <div class="Filters">
    <Label label="Question">
      <input type="search" id="question" v-model="form.question"/>
    </Label>
    <Label label="Level">
      <select v-model="form.level">
        <option>-</option>
        <option v-for="level in levelOptions" :value="level.value">{{level.label}}</option>
      </select>
    </Label>
    <Label label="Type">
      <select v-model="form.type">
        <option>-</option>
        <option v-for="type in typeOptions" :value="type.value">{{type.label}}</option>n>
      </select>
    </Label>

    <button type="submit" @click="$emit( 'form',  form )">Search</button>
    <button @click="clearForm()">Clear</button>
  </div>

</template>

<style scoped>
.Filters{
  float: right;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 100px 100px;
  align-items: end;
  column-gap: 0.4rem
}


</style>
