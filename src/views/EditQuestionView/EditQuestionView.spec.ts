import { mount } from '@vue/test-utils'
import EditQuestionView from './EditQuestionView.vue'
import { createTestingPinia } from '@pinia/testing';
import { fetch } from '@/services/ApiService';
import { QUESTIONS_ENDPOINTS } from '@/components/questions-list/questionsList.constants';;

jest.mock('@/services/ApiService', () => ({
  fetch: jest.fn().mockReturnValue(Promise.resolve({
    data: {
      id: '1',
      question: 'Some question',
      type: 'frontend',
      level: 'junior'
    }
  }))
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

describe('EditQuestionView', () => {

  const msg = 'Edit Question'
  const wrapper = mount(EditQuestionView, {
    global: {
      plugins: [createTestingPinia()],
    },
  })

  it('should display header text', () => {
    expect(wrapper.find('h1').text()).toEqual(msg)
  })

  it('should fetch question', () => {
    expect(fetch).toBeCalledWith(QUESTIONS_ENDPOINTS.GET_QUESTION('1'));
  })

})
