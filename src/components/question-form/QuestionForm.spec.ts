import { flushPromises, shallowMount } from '@vue/test-utils';
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

  it('should emit form', async () => {
    wrapper.vm.submit();
    await flushPromises();

    expect(wrapper.emitted()).toHaveProperty('submit');
  });

  it('should not emit form', async () => {
    wrapper.vm.submit();
    wrapper.vm.form.question = '';
    await flushPromises();

    expect(wrapper.emitted()).not.toHaveProperty('submit');

  });
})



