

<template>
      <button :class="inputClass" 
              :type="type"
              >
              <slot></slot>

       </button>
  </template>
  
  <script>
  export default {
    props: {
      type: {
        type: String,
        required: true
      },
      inputClass: {
        type: String,
        required: true
      }
    }
  }
  </script>
