<template>
  <Row class="gapx-1 wrap content-center">
    <SubMenu :menus="menus"/>
  </Row>
</template>


<script setup>

import SubMenu from '../shared/SubMenu.vue';
import Row from '../shared/Row.vue';

defineProps({  
  menus: Array, 
})

</script>