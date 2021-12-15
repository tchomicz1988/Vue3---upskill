import { shallowMount } from '@vue/test-utils'
import NewQuestionView from './NewQuestionView.vue'

describe('NewQuestionView', () => {
  const msg = 'Add new Question'
  const wrapper = shallowMount(NewQuestionView)

  it('should display header text', () => {
    expect(wrapper.find('h1').text()).toEqual(msg)
  })
})
