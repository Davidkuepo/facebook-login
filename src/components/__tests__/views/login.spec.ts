import { mount } from '@vue/test-utils'
import LoginPage from '../../../views/login.vue'
import InputPassword from '../../../components/share/InputPassword.vue'
import InputEmail from '../../../components/share/InputEmail.vue'
import {  describe, expect, it } from 'vitest'
import { createI18n } from 'vue-i18n'

describe('LoginPage', () => {
  const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'en',
    messages: {
      fr: {
        'titre-connexion': 'facebook',
        'description-connexion': 'Connectez-vous avec vos amis et le monde qui vous entoure Facebook',
        "emailPlaceholder": "Adresse e-mail ou numéro de tél",
        "passwordPlaceholder": "Mot de passe",
        "button-connexion": "connexion",
        "password-oublie": "mot de passe oublié ?",
        "create-account": "créer un compte",
        "crate-page-label": "Crér une page",
        "create-description-label": "pour les célébrités, marques et business"
      },
      en: {
        'titre-connexion': 'facebook',
        'description-connexion': 'Connect with friends and the world around you facebook',
        "emailPlaceholder": "Email address or phone number",
        "passwordPlaceholder": "Password",
        "button-connexion": "login",
        "password-oublie": "forgot password ?",
        "create-account": "create account",
        "create-page-label": "Create a page",
        "create-description-label": "or a celebrity, brand or business"
      }
    }
  });
  
  const wrapper = mount(LoginPage,{
    global: {
      plugins: [i18n]
    }
  })

  it('should exist component', async () => {
    expect(wrapper.exists())
  })

  it('should have email component and awaited props', () => {
    const emailInput = wrapper.findComponent({ name: 'InputEmail' });


    expect(emailInput.props('placeholder')).toBe(i18n.global.t('emailPlaceholder'));
    expect(emailInput.props('inputClass')).toBe('w-full px-3 py-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline');

  });
  

  it('should have password component', () => {
    wrapper.setData({ password: 'testPassword' })

    const passwordInput = wrapper.findComponent({ name: 'InputPassword' })

    expect(passwordInput.exists()).toBe(true)
  })

  it('triggers login method on form submission', async () => {
    const emailInput = wrapper.findComponent(InputEmail);
    const passwordInput = wrapper.findComponent(InputPassword);
    const form = wrapper.find('form');
  
    await emailInput.vm.$emit('update:modelValue', 'test@example.com');
    await passwordInput.vm.$emit('update:modelValue', 'password');
  
    await form.trigger('submit');
  
    expect(wrapper.vm.email).toBe('test@example.com');
    expect(wrapper.vm.password).toBe('password');
  });
  
})
