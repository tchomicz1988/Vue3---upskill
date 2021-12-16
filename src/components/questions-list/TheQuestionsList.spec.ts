import { shallowMount } from '@vue/test-utils';
import TheQuestionsList from './TheQuestionsList.vue';
import router from '@/router';

jest.mock('@/router', () => ({
  push: jest.fn()
}));

describe('TheQuestionsList', () => {
  const wrapper = shallowMount(TheQuestionsList)

  it('should go to call router', () => {
    wrapper.vm.editQuestion('id')
    expect(router.push).lastCalledWith({name: 'edit', params: {id: 'id'}})
  })
})
