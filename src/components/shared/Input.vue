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

<script setup lang="ts">

import { computed } from '@vue/reactivity';
import { RandomID } from '@/utility/Helpers';
import { PropType } from 'vue';

const id = RandomID()

const props = defineProps({
  name: String, 
  label: String, 
  type: String, 
  size: Number, 
  maxLength: String, 
  keypress: Function as PropType<(payload: KeyboardEvent) => void>, 
  focus: Function as PropType<(payload: FocusEvent) => void>, 
  required: Boolean, 
  readonly: Boolean, 
  modelValue: {
    default: '',
    type: String
  }, 
  autocomplete: String
});

const emit = defineEmits(['update:modelValue'])


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