<template>
  <div :href="link" class="image">
    <img :width="width" :height="height" @load="imageLoaded" :src="src" rel="preload" v-show="isLoaded">
    <img :width="width" :height="height" :src="placeholder" v-if="!isLoaded">
    <div v-if="description" class="description p-1">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

defineProps({
  src: String,
  placeholder: String,
  description: Boolean,
  link: String,
  width: Number,
  height: Number,
})

let isLoaded = ref(false);

const imageLoaded = () => {
  isLoaded.value = true;
}

</script>

<style scoped>

  .image {
    position: relative;
    display: inline-block;
  }

  .rounded img{
    border-radius: 290486rem;
  }
  
  .semiround img{
    border-radius: 3rem;
  }

  img {
    height: 100%;
    height: 100%;
  }

  .description {
    position: absolute;
    color: hsl(var(--text-color-headline));
    display: flex;
    flex-direction: column;
    align-items: center;
    background: radial-gradient(ellipse closest-side, hsla(var(--card-bg-color), .75) 60%, transparent);
    width: 100%;
    height: 40%;
    bottom: -10%;
  }
  
  .center .description {
    justify-content: center;
    background: radial-gradient(ellipse closest-side, hsla(var(--card-bg-color), .75) 60%, transparent);
    top: 30%;
  }

  .description * {
    z-index: 20;
  }

  [description=''] .description {
    display: none !important;
  }
</style>



