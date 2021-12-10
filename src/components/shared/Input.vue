<template>
  <div class="input">
    <input
      :id="id"
      :name="name"
      :type="type"
      :size="size"
      placeholder=" "
      :maxLength="maxLength"
      @keypress="keypress"
      @focus="focus"
      v-model="computedValue"
      :required="required"
      :readonly="readonly"
      :autocomplete="computedAutocomplete"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script setup>

import { computed } from '@vue/reactivity';
import { RandomID } from '../../utility/Helpers';

const id = RandomID()

const props = defineProps({
  name: String, 
  label: String, 
  type: String, 
  size: String, 
  maxLength: String, 
  keypress: Function, 
  focus: Function, 
  required: Boolean, 
  readonly: Boolean, 
  modelValue: {
    default: '',
    type: String
  },
  reference, 
  autocomplete
})

defineEmits(['update:modelValue'])

const computedValue = computed({
  get(){
    return props.modelValue
  },
  set(value){
    emit('update:modelValue', value)
  }
})

const computedAutocomplete = computed(() => props.autocomplete ? 'on' : 'off')

</script>