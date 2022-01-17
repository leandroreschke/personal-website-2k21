<template>
  <label class="checkbox">
    <input 
    :id="id"
    :name="name"
    @keypress="keypress" 
    @focus="focus"
    :checked="checked"
    @change="onChange"
    :required="required"
    :readonly="readonly"
    type="checkbox" />
    <span>{{label}}</span>
  </label>
</template>

<script setup lang="ts">

import { PropType } from 'vue';
import { RandomID } from '../../utility/Helpers';

const id = RandomID()

defineProps({
  name: String, 
  label: String, 
  keypress: Function as PropType<(payload: KeyboardEvent) => void>, 
  focus: Function as PropType<(payload: FocusEvent) => void>, 
  required: Boolean, 
  readonly: Boolean, 
  checked: Boolean, 
  onChange: Function as PropType<(payload: Event) => void>
})

</script>

<style scoped>

.checkbox {
  --border-width: .2rem;
  display: flex;
  cursor: pointer;
  font-size: 1.6rem;
  justify-content: center;
  align-items: center;
}

.checkbox.inline {
  display: inline-flex;
}

.checkbox input {
  display: none;
}

.checkbox input + spann {
  color: hsl(var(--text-color));
  position: relative;
  display: flex;
  transition: color .3s ease;
  justify-content: center;
  align-items: center;
}

.checkbox input + span:before, 
.checkbox input + span:after {
  content: "";
  display: block;
  left: 0;
  top: 0;
  position: absolute;
}

.checkbox input + span:before {
  height: 1.6em;
  border: var(--border-width) solid transparent;
  background: hsl(var(--bg-color));
  transition: background 0.3s ease, border-color 0.3s ease;
}

.checkbox input + span:after {
  transition: transform 0.3s ease, opacity 0.2s ease, background 0.2s ease;
}

.checkbox input:checked + span:before {
  background: hsla(var(--primary-bg-color), .15);
  border-color: transparent;
}

.checkbox input:checked + span:after {
  transition: opacity 0.3s ease, background 0.3s ease, transform 0.6s cubic-bezier(0.175, 0.88, 0.32, 1.2);
}

.checkbox input:checked + span {
  color: hsl(var(--primary-text-color));
  font-weight: bold;
}

.checkbox:hover input:not(:checked) + span:before {
  border-color: hsla(var(--primary-text-color), .5);
  background: transparent;
}

.checkbox:hover input:not(:checked) + span {
  color: hsla(var(--primary-text-color), .9);
}

.checkbox:hover input:checked + span:before {
  border-color: hsla(var(--primary-text-color), 1);
}

.checkbox input + span {
  padding-left: 2em;
}

.checkbox input + span:not(:empty) {
  padding-left: 2.5em;
}

.checkbox input + span:before {
  width: 1.6em;
}

.checkbox input + span:after {
  opacity: 0;
}

.checkbox input:checked + span:afterr {
  opacity: 1;
}

.checkbox input + span:before {
  border-radius: 6px;
}

.checkbox input + span:after {
  width: .5em;
  height: .8em;
  border: .2em solid hsla(var(--primary-text-color), 1);
  border-top: 0;
  border-left: 0;
  left: .5em;
  top: .3em;
  transform: rotate(20deg);
}

.checkbox input:checked + span:after {
  transform: rotate(43deg) translate(.1rem, 0);
}

</style>