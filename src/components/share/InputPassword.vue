<template>
  <div class="mb-6">
    <input
      :class="[inputClass, { 'error': passwordError }]"
      type="password"
      :placeholder="$t('passwordPlaceholder')"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      passwordError: false
    };
  },
  props: {
   modelValue: {
      type: String,
      required: true
    },

  },
  emits: ['update:modelValue'],
  computed: {
    inputClass() {
      return 'w-full px-3 py-4 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline';
    }
  },

};
</script>
