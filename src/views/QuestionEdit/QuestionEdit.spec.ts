import { mount } from '@vue/test-utils'
import QuestionEdit from './QuestionEdit.vue'
import { createTestingPinia } from '@pinia/testing';
import { fetch, update } from '@/services/ApiService';
import { QUESTIONS_ENDPOINTS } from '@/components/questions-list/questionsList.constants';
import { Question } from '@/interfaces/question.interface';
import router from '@/router';
import { useToastStore } from '@/stores/toasts';

jest.mock('@/services/ApiService', () => ({
  fetch: jest.fn().mockReturnValue(Promise.resolve({
    data: {
      id: '1',
      question: 'Some question',
      type: 'frontend',
      level: 'junior'
    }
  })),
  update: jest.fn().mockReturnValue(Promise.resolve({
    data: {
      id: '1',
      question: 'Some question',
      type: 'frontend',
      level: 'senior'
    }
  })),
}));

jest.mock('vue-router', () => ({
  createRouter:jest.fn(),
  createWebHistory: jest.fn(),
  useRoute: jest.fn().mockReturnValue({
    params: {
      id: '1',
    }
  })
}));

jest.mock('@/router', () => ({
  push: jest.fn()
}));

describe('QuestionEdit', () => {

  const msg = 'Edit Question'
  const wrapper = mount(QuestionEdit, {
    global: {
      plugins: [createTestingPinia()],
    },
  })

  const toastStore = useToastStore();

  it('should display header text', () => {
    expect(wrapper.find('h1').text()).toEqual(msg)
  })

  it('should fetch question', () => {
    expect(fetch).toBeCalledWith(QUESTIONS_ENDPOINTS.GET_QUESTION('1'));
  })

  it('should updateQuestion', async ()=>{
    const expectedData: Question = {
      id: '1',
      question: 'Some question',
      type: 'frontend',
      level: 'senior'
    }

    wrapper.vm.updateQuestion(expectedData).then(()=>{
      expect(router.push).toBeCalled();
      expect(toastStore.showToast).toBeCalled();
    })

    expect(update).toBeCalledWith(QUESTIONS_ENDPOINTS.EDIT('1'), expectedData);

  })

})
