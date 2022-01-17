<template>
  <Row class="gapx-1 wrap content-center">
    <SubMenu :menus="menus"/>
  </Row>
</template>


<script setup lang="ts">

import SubMenu from '../shared/SubMenu.vue';
import Row from '../shared/Row.vue';

interface IMenu {
  url?: String;
  icon?: String;
  text?: String;
  tooltip?: String;
}

defineProps({  
  menus: Array as () => Array<IMenu>, 
})

</script>