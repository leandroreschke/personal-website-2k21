<template>
  <div>
    <slot />
  </div> 
</template>

<script setup>

</script>

<style scoped>

  div {
    display: inline-flex;
    flex-direction: column;
    flex: 1 1 auto;
  }

  div.fullwidth {
    display: flex;
    width: 100%;
  }

</style>