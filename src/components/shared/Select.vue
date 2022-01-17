<template>
  <div class="select">
    <select :id="id" :name="name === undefined ? id : name" :size="size" v-model="computedValue" >
      <option value disabled></option>
      <option disabled selected>{{ placeholder }}</option>
      <option v-for="(option, index) in options" :value="option.value" :key="index">{{ option.name }}</option>
      <option disabled></option>
    </select>
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { RandomID } from '../../utility/Helpers';

const id = RandomID()

const props = defineProps({
  name: String,
  label: String,
  size: Number,
  value: String,
  options:{
    type: Array,
    default: () => []
  },
  placeholder: {
    type: String,
    default: 'Escolha um item'
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})

defineEmits(['update:modelValue'])

const computedValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

</script>