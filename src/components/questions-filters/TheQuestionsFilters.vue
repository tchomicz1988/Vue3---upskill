<script setup lang="ts">
import { Question } from '@/interfaces/question.interface';
import { reactive } from 'vue';
import { FILTERS_LEVEL_OPTIONS, FILTERS_TYPE_OPTIONS } from '@/components/questions-filters/questions-filters.model';
import { enumToOptions } from '@/utils/form.utils';
import { SelectOption } from '@/interfaces/form.interfaces';
import FormLabel from '@/components/form/FormLabel.vue';
import FormSelect from '@/components/form/FormSelect.vue';
import { FILTERS_INIT_VALUES } from '@/components/questions-filters/questions-filters.constants';

const emit = defineEmits<{
  (e: 'form', form:  UnwrapNestedRefs<Partial<Question>>): void
}>()

const form = reactive<Partial<Question>>({...FILTERS_INIT_VALUES});
const levelOptions: SelectOption[] = enumToOptions(FILTERS_LEVEL_OPTIONS, true);
const typeOptions: SelectOption[] = enumToOptions(FILTERS_TYPE_OPTIONS, true)

function clearForm() {
  Object.assign(form, FILTERS_INIT_VALUES)
}

</script>

<template>
  <form class="QuestionsFilters"
        @submit.prevent="emit( 'form',  form )">
    <FormLabel label="Question">
      <input type="search"
             id="question"
             v-model="form.question"/>
    </FormLabel>
    <FormLabel label="Level">
      <FormSelect v-model="form.level"
                  :options="levelOptions" />
    </FormLabel>
    <FormLabel label="Type">
      <FormSelect v-model="form.type"
                  :options="typeOptions" />
    </FormLabel>

    <button type="submit"
            @click="emit( 'form',  form )">Search</button>
    <button @click="clearForm()">Clear</button>
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
