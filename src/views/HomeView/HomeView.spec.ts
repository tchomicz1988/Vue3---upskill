import { mount } from '@vue/test-utils'
import HomeView from './HomeView.vue'
import { ref } from 'vue';
import { createTestingPinia } from '@pinia/testing';
import { fetch } from '@/services/ApiService';
import { QUESTIONS_ENDPOINTS } from '@/components/questions-list/questionsList.constants';

jest.mock('@/services/ApiService', ()=>({ fetch: jest.fn().mockReturnValue(Promise.resolve({data: []})) }));

describe('HomeView', () => {
  const useQuestions = jest.fn().mockReturnValue({questions: ref([])});
  const questions = useQuestions().questions;

  const msg = 'Questions List'
  const wrapper = mount(HomeView, {
    global: {
      plugins: [createTestingPinia()],
    },
  })

  it('should display header text', () => {
    expect(wrapper.find('h1').text()).toEqual(msg)
  })

  describe('updateList', () => {
    it('should update list after init', () => {
      expect(fetch).toBeCalled();
    })

    it('should update with params', () => {
      const params = {
        question: 'some question',
        type: 'type',
        level: 'level',
      }

      const expectParams = {
        question_like: params.question,
        type: params.type,
        level: params.level,
      }

      wrapper.vm.updateList(params);

      expect(fetch).lastCalledWith(QUESTIONS_ENDPOINTS.ALL(), {params: expectParams});
    })
  })
})
