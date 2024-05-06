import { mount } from '@vue/test-utils';
import ButtonField from '../../../components/share/ButtonField.vue';
import { describe, expect, it } from 'vitest';

describe('ButtonField', () => {
  it('renders a button with the correct type and class', () => {
    const type = 'submit';
    const wrapper = mount(ButtonField, {
      props: { type },
      slots: {
        default: 'Click me'
      }
    });

    const button = wrapper.find('button');

    expect(button.exists()).toBe(true);
    expect(button.attributes('type')).toBe(type);
    expect(button.text()).toBe('Click me');
  });
});
