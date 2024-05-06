<template>
  <div class="mb-4">
    <input
      :class="[inputClass, { error: emailError }]"
      type="email"
      :placeholder="placeholder"
       :value="modelValue"
       @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      emailError: false,
      emailErrorMessage: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      required: true
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    inputClass: {
      type: String,
      required: true
    },
   modelValue: {
      type: String,
      required: true
    },

  },
  emits: ['update:modelValue'],
}

</script>


