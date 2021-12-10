<template>
  <transition name="fadeT" appear>
    <Header v-if="currentRoute !== 'Home'" :menus="menus"></Header>
  </transition>
  <main class="flex grow p-1">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script setup>

import Header from './components/layout/Header.vue';
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';

const menus =  [
  {url:'/', text: '<', tooltip: 'Go Home'},
  {url:'/portfolio', text: 'Portfolio', tooltip:'Underconstruction'},
  {url:'/about', text: 'About'}
]

const currentRoute = computed(() => {
  return useRoute().name
})

</script>

<style>

</style>
