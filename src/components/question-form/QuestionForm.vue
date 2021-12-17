<script setup lang="ts">
import FormLabel from '@/components/form/FormLabel.vue';
import FormInput from '@/components/form/FormInput.vue';
import FormError from '@/components/form/FormError.vue';
import { defineEmits, Ref } from 'vue';
import { Question } from '@/interfaces/question.interface';
import FormSelect from '@/components/form/FormSelect.vue';
import { SelectOption } from '@/interfaces/form.interfaces';
import { enumToOptions } from '@/utils/form.utils';
import { FILTERS_LEVEL_OPTIONS, FILTERS_TYPE_OPTIONS } from '@/components/questions-filters/questions-filters.model';
import useVuelidate, { Validation, ValidationArgs } from '@vuelidate/core'
import { required, maxLength } from '@vuelidate/validators'


const props = defineProps<{
  form: Partial<Question>;
}>();


const emit = defineEmits<{
  (e: 'submit', form: Partial<Question>): void
}>()

const editMode: boolean = !!props.form?.id;
const levelOptions: SelectOption[] = enumToOptions(FILTERS_LEVEL_OPTIONS, true);
const typeOptions: SelectOption[] = enumToOptions(FILTERS_TYPE_OPTIONS, true);

const rules: ValidationArgs = {
  question: {maxLength: maxLength(255), required},
  type: {required},
  level: {required},
}

const $v: Ref<Validation> = useVuelidate(rules, props.form, {$autoDirty: true})

async function submit() {

  const valid = await $v.value.$validate();

  if(!valid) {
    return
  }

  emit('submit', props.form);
}

</script>

<template>
  <form class="QuestionForm"
        @submit.prevent="submit">
    <FormLabel label="Question"
               :required="true">
      <FormInput type="text"
                 v-model="form.question"
                 @blur="$v.question.$touch"/>
      <FormError :message="$v.question.$errors[0]?.$message"/>
    </FormLabel>
    <div class="QuestionForm-col2">
      <FormLabel label="Level"
                 :required="true">
        <FormSelect v-model="form.level"
                    :options="levelOptions"
                    @blur="$v.level.$touch"/>
        <FormError :message="$v.level.$errors[0]?.$message"/>
      </FormLabel>
      <FormLabel label="Level"
                 :required="true">
        <FormSelect v-model="form.type"
                    :options="typeOptions"
                    @blur="$v.type.$touch"/>
        <FormError :message="$v.type.$errors[0]?.$message"/>
      </FormLabel>
    </div>
    <button type="submit"
            :disabled="$v.$invalid || !$v.$anyDirty"
            @submit.prevent="submit">
      {{ editMode ? 'Update Question' : 'Add Question' }}
    </button>
  </form>
</template>


<style scoped lang="scss">
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
