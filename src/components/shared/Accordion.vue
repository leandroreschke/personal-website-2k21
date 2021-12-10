<template>
  <Card contentClasses="p-1">
    <div class="row pointer" @click="() => setShowFilters()">
      <div v-if="title" class="col fs-4 bold"> {title} </div>
      <div class="col items-end fs-4 bold">{{computedSign}}</div>
    </div>
    <div :class="computedClass"> <slot/> </div>
  </Card>
</template>

<script setup>

import { computed, ref } from '@vue/reactivity';
import Card from './Card'

const props = defineProps({
  title: String,
  startOpen: Boolean
})

let showFilters = ref(props.startOpen)

const setShowFilters = () => {
  showFilters.value = !showFilters.value
  console.log(showFilters.value)
}

const computedSign = computed(() => showFilters.value ? '-' : '+')

const computedClass = computed(() => showFilters.value ? undefined : 'hidden')

</script>