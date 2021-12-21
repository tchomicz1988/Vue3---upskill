import { shallowMount } from '@vue/test-utils'
import QuestionNew from './QuestionsNew.vue'
import { createTestingPinia } from '@pinia/testing';
import { Question } from '@/types/question.interface';
import { add } from '@/services/ApiService';
import { QUESTIONS_ENDPOINTS } from '@/constants/questionsList.constants';
import router from '@/router';
import { useToastStore } from '@/stores/toasts';
import exp from 'constants';

jest.mock('@/services/ApiService', () => ({
  add: jest.fn().mockReturnValue(Promise.resolve({
    data: {
      id: '1',
      question: 'Some question',
      type: 'frontend',
      level: 'senior'
    }
  })),
}));

jest.mock('@/router', () => ({
  push: jest.fn()
}));

describe('QuestionNew', () => {
  const msg = 'Add new Question'
  const wrapper = shallowMount(QuestionNew, {
    global: {
      plugins: [createTestingPinia()],
    },
  })

  const toastStore = useToastStore();

  it('should display header text',  () => {
    expect(wrapper.find('h1').text()).toEqual(msg)
  })

  it('should addQuestion', async ()=>{
    const expectedData: Partial<Question> = {
      question: 'Some question',
      type: 'frontend',
      level: 'senior'
    }

    wrapper.vm.addQuestion(expectedData).then(()=>{
      expect(router.push).toBeCalled();
      expect(toastStore.showToast).toBeCalled();
    })

    expect(add).toBeCalledWith(QUESTIONS_ENDPOINTS.ADD(), expectedData);
  })
})
