<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="flex flex-col md:flex-row w-full max-w-screen-xl">
      <div class="w-full md:w-2/4 p-8">
        <h1 class="text-4xl md:text-6xl text-blue-600 font-bold mb-4">
          {{ $t('titre-connexion') }}
        </h1>
        <p class="text-xl md:text-2xl text-black">
          {{ $t('description-connexion') }}
        </p>
      </div>
      <div class="w-1/3 p-8 bg-white rounded">
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <InputEmail
              :placeholder="$t('emailPlaceholder')"
              :inputClass="'w-full px-3 py-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'"
              v-model="email"
            />
            <span class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
              <span class="error-msg flex"><IconWarning />&nbsp;{{ error.$message }}</span>
            </span>
          </div>
          <div class="mb-6">
            <InputPassword v-model="password" />
            <span class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
              <span class="error-msg flex"><IconWarning />&nbsp;{{ error.$message }}</span>
            </span>
          </div>
          <div class="mb-4">
            <ButtonField
              :type="'submit'"
              :inputClass="'w-full px-3 py-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'"
            >
              {{ $t('button-connexion') }}
            </ButtonField>
          </div>
        </form>
        <p class="text-center">
          <a class="font-bold text-blue-500 hover:text-blue-800" href="#">
            {{ $t('password-oublie') }}
          </a>
        </p>
        <div class="py-4 flex justify-center">
          <ButtonField
            :type="'submit'"
            :inputClass="'w-64 px-3 py-3 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline'"
          >
            {{ $t('create-account') }}
          </ButtonField>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputEmail from '../components/share/InputEmail.vue'
import InputPassword from '../components/share/InputPassword.vue'
import ButtonField from '../components/share/ButtonField.vue'
import { required, email, minLength, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import IconWarning from '../components/icons/IconWarning.vue'

export default {
  components: {
    InputEmail,
    InputPassword,
    ButtonField,
    IconWarning
  },
  setup() {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      email: '',
      password: ''
    }
  },

  validations() {
    return {
      email: {
        required: helpers.withMessage(this.$t('emailRequired'), required),
        email
      },
      password: {
        required: helpers.withMessage(this.$t('passwordRequired'), required),
        minLength: helpers.withMessage(this.$t('passwordMinLength', { minLength: 8 }), minLength(8))
      }
    }
  },

  methods: {
    async submitForm() {
      const isValidForm = await this.v$.$validate()
      if (isValidForm)
       console.log('Formulaire soumis avec succès')
    }
  }
}
</script>

<style>
.error-msg {
  color: red;
  font-size: 12px;
}
</style>
