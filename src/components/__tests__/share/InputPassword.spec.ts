import { mount } from '@vue/test-utils'
import InputPassword from '../../../components/share/InputPassword.vue'
import { describe, expect, it } from 'vitest'
import { createI18n } from 'vue-i18n'

describe('InputPassword', () => {
  const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'en',
    messages: {
      fr: {
        passwordPlaceholder: 'mot de passe requis'
      },
      en: {
        passwordPlaceholder: 'mot de passe requis'
      }
    }
  })

  it('renders an input field with the correct props', async () => {
    const modelValue = 'testPassword';
  
    const wrapper = mount(InputPassword, {
      props: { modelValue },
      global: {
        plugins: [i18n]
      }
    });
  
    const input = wrapper.find('input');
  
    expect(input.exists()).toBe(true);
    expect(input.attributes('type')).toBe('password');
    expect(input.attributes('placeholder')).toBe(i18n.global.t('passwordPlaceholder'));
  
    // Update the value of the input field
    input.element.value = modelValue;
    input.trigger('input');
  
    // Wait for Vue to update the value
    await wrapper.vm.$nextTick();
  
    expect(input.element.value).toBe(modelValue);
  });
  

  it('emits an update event on input', async () => {
    const wrapper = mount(InputPassword, {
      props: {
        placeholder: 'Enter your password',
        inputClass: 'w-full',
        isRequired: true,
        modelValue: ''
      },
      global: {
        plugins: [i18n]
      }
    })

    const input = wrapper.find('input')
    await input.setValue('newPassword')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['newPassword'])
  })
})
