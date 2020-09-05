import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emits an event with a user data payload', () => {
    const wrapper = mount(LoginForm)
    // find text input
    const input = wrapper.find('input[type="text"]')
    // set value for text input
    input.setValue('Chantel Sky')
    // simulate form submission
    wrapper.trigger('submit')
    // assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)
    // assert payload is correct
    const expectedPayload = { name: 'Chantel Sky' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
      expectedPayload
    )
  })
})
