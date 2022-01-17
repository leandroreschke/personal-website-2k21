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
import { computed } from 'vue';
import { RandomID } from '@/utility/Helpers';

const id = RandomID()

const props = defineProps({
  name: String,
  label: String,
  size: Number,
  value: String,
  options:{
    type: Array as () => Array<{value: string, name: string}>,
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

const emit = defineEmits(['update:modelValue'])

const computedValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

</script>

<style scoped>
  .select {
  display: inline-flex;
  flex-direction: column;
  position: relative;
}

.select::after {
  content: "";
  position: absolute;
  z-index: 10;
  right: .6em;
  bottom: calc(50% - 1.5em);
  height: 0;
  width: 0;
  border-top: .4em solid #37474F;
  border-left: .4em solid transparent;
  border-right: .4em solid transparent;
  pointer-events: none;
}

.select > select {
  outline: none;
  appearance: none;
  background: transparent;
  border: .1rem solid hsla(var(--border));
  font-size: 1.6rem;
  margin-top: 2.5em;
  padding: .75em 2em .75em .75em;
  color: hsl(var(--text-color));
  border-radius: .4em;
  transition: border 0.3s ease, background 0.3s ease;

  width: 100%;
  height: inherit;

  max-width: inherit;
  max-height: inherit;

  min-width: 0;
  min-height: inherit;
  
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-overflow: ellipsis;
}

.select > select:focus {
  outline: none;
  border-color: hsl(var(--primary-bg-color));
  background: hsla(var(--primary-bg-color), .15);
  color: hsla(var(--primary-text-color));
}

.select > select > option {
  zoom: 1.1;
  background: hsla(var(--bg-color));
  text-overflow: ellipsis;
}

.select > select:focus + label {
  color: hsla(var(--primary-text-color));
}

.select > label {
  font-weight: bold;
  position: absolute;
  transform: translate(.2em, .6em);
  color: hsl(var(--base-color));
  transition: all 0.2s ease-out;
  pointer-events: none;
  font-size: 1.6rem;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* CAUTION: Internet Explorer hackery ahead */


.select > select::-ms-expand {
    display: none; /* Remove default arrow in Internet Explorer 10 and 11 */
}

/* Target Internet Explorer 9 to undo the custom arrow */
@media screen and (min-width:0\0) {
  .select > select {
        background: none\9;
        padding: 5px\9;
    }
}

</style>