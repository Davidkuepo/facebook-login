import { mount } from '@vue/test-utils';
import InputEmail from '../../../components/share/InputEmail.vue';
import {  describe, expect, it } from 'vitest';


describe('InputEmail', () => {
  it('renders an input field with the correct props', () => {
    const placeholder = 'Enter your email';
    const modelValue = 'test@example.com';

    const wrapper = mount(InputEmail, {
      props: { placeholder, isRequired: true, modelValue }
    });

    const input = wrapper.find('input');

    expect(input.exists()).toBe(true);
    expect(input.attributes('type')).toBe('email');
    expect(input.attributes('placeholder')).toBe(placeholder);
    expect(input.element.value).toBe(modelValue);
  });

  it('emits an update event on input', async () => {
    const wrapper = mount(InputEmail, {
      props: { placeholder: 'Enter your email', inputClass: 'w-full', isRequired: true, modelValue: '' }
    });

    const input = wrapper.find('input');
    await input.setValue('test@example.com');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')).toEqual([['test@example.com']]);
  });
});