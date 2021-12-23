<template>
  <div :href="link" class="image">
    <img :src="src" rel="preload">
    <div v-if="description !== undefined" class="description p-1">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Image",
  props: {
    src: String,
    description: String,
    link: String
  }
};
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



