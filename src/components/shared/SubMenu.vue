<template>
  <router-link v-for="({url, icon, text, tooltip}, index) in menus" :tooltip="tooltip" flow="down" :key="index" :style="styles ? styles : undefined" :class="'content-center items-center' + (classes ? ' ' + classes : '')" :to="url">
    <Card contentClasses="p-1" 
      :class="'clickable items-center content-center text-center' + (currentRoute(url || '') ? ' active' : '')"
      headerClasses="items-center content-center"
      :style="{borderRadius: '0 0 1.2rem 1.2rem'}"
      >
      <span :class="icon"></span>
      <span><b>{{text}}</b></span>
    </Card>
  </router-link>
</template>

<script setup lang="ts">

import Card from "./Card.vue"
import { useRoute } from 'vue-router';

const currentRoute = (url: String) => {
  if(useRoute().path == url){
    return true
  } else{
    return false
  }
}

interface IMenu {
  url?: String;
  icon?: String;
  text?: String;
  tooltip?: String;
}

defineProps({
  menus: Array as () => Array<IMenu>,
  classes: String,
  styles: String
})
  
</script>