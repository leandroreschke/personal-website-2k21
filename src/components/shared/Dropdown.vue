<template>
  <div class="dropdown left">
    <a
      href="#"
      class="dropdown-trigger button textonly fw-regular"
      aria-haspopup="true"
    >
      Menu
    </a>
    <div class="dropdown-menu" role="menu">
      <div v-if="menuItems" class="dropdown-container">
        <template v-for="(item, i) in menuItems" :key="i">
          <hr v-if="item.divider" class="dropdown-divider" />
          <button class="button textonly fw-regular" @click="item.method">{{item.name}}</button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    menuItems: Array as () => {divider: String, method: (payload: MouseEvent) => void, name: String}[]
  });
</script>



