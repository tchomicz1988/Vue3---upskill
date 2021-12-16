import { shallowMount } from '@vue/test-utils';
import QuestionForm from './QuestionForm.vue';

describe('QuestionForm', () => {
  const wrapper = shallowMount(QuestionForm, {
    props: {
      form: {
        question: 'question',
        type: 'type',
        level: 'level'
      }
    }
  });
})



