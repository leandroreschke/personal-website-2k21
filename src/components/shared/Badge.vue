<template>
  <span class="badge"> <slot/> </span>
</template>

<script setup>
</script>

<style scoped>

.badge.primary{
  background-color: hsla(var(--primary-bg-color), 1);
  border-color: transparent;
  color: hsl(var(--primary-text-color));
}

.badge.info{
  background-color: hsla(var(--info-bg-color), 1);
  color: hsl(var(--info-text-color));
}

.badge.success{
  background-color: hsla(var(--success-bg-color), var(--opacityActive));
  color: hsl(var(--success-text-color));
}

.badge.error{
  background-color: hsla(var(--error-bg-color), var(--opacityActive));
  border-color: transparent;
  color: hsl(var(--error-text-color));
}

.badge.alert{
  background-color: hsla(var(--alert-bg-color), var(--opacityActive));
  color: hsl(var(--alert-text-color));
}

.badge {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: nowrap;

  border-radius: 290486rem;
  box-shadow: none;

  background: hsla(var(--text-color), var(--opacityActive));

  border: 0;

  color: hsl(var(--text-color));
  
  padding: 0 1rem;
}

</style>