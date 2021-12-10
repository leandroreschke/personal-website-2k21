<template>
  <button
  @click="click">
    <slot />
  </button>
</template>

<script setup>

defineProps ({
  click: Function
})

</script>

<style scoped>
/* ==================== BEGIN BUTTON ==================== */

/* PRIMARY BUTTON */

button.primary {
  background-color: hsla(var(--primary-bg-color), var(--opacityDefault));
  border-top: .1rem solid hsla(var(--primary-bg-color), var(--opacityHover));
  border-left: .1rem solid hsla(var(--primary-bg-color),var(--opacityHover));
  border-bottom: .1rem solid hsla(var(--primary-bg-color), var(--opacityDefault));
  border-right: .1rem solid hsla(var(--primary-bg-color),var(--opacityDefault));
  color: hsl(var(--primary-text-color));
}

button.primary:hover {
  background-color: hsla(var(--primary-bg-color), var(--opacityHover));
  border-top: .1rem solid hsla(var(--primary-bg-color), var(--opacityActive));
  border-left: .1rem solid hsla(var(--primary-bg-color),var(--opacityActive));
  border-bottom: .1rem solid hsla(var(--primary-bg-color), var(--opacityHover));
  border-right: .1rem solid hsla(var(--primary-bg-color),var(--opacityHover));
  color: hsl(var(--primary-text-color));
}

button.primary:active {
  background-color: hsla(var(--primary-bg-color), var(--opacityActive));
  border: .1rem solid transparent;
  color: hsl(var(--primary-text-color));
}

button.primary:focus-visible:not(:active) {
  box-shadow: 0 0 0 0.125em hsla(var(--primary-bg-color), 1);
}

/* PRIMARY BUTTON SOLID */

button.primary.solid {
  background-color: hsla(var(--primary-bg-color), .75);
  border-top: .1rem solid hsla(var(--primary-bg-color), var(--opacityHover));
  border-left: .1rem solid hsla(var(--primary-bg-color),var(--opacityHover));
  border-bottom: .1rem solid hsla(var(--primary-bg-color), var(--opacityDefault));
  border-right: .1rem solid hsla(var(--primary-bg-color),var(--opacityDefault));
  color: white;
}

button.primary.solid:hover {
  background-color: hsla(var(--primary-bg-color), .8);
  border-top: .1rem solid hsla(var(--primary-bg-color), var(--opacityActive));
  border-left: .1rem solid hsla(var(--primary-bg-color),var(--opacityActive));
  border-bottom: .1rem solid hsla(var(--primary-bg-color), var(--opacityHover));
  border-right: .1rem solid hsla(var(--primary-bg-color),var(--opacityHover));
  color: white;
}

button.primary.solid:active {
  background-color: hsla(var(--primary-bg-color), .875);
  border: .1rem solid transparent;
  color: white;
}

/* PRIMARY BUTTON OUTLINED */

button.primary.outline {
  border-color: hsla(var(--primary-bg-color), .2);
  color: hsl(var(--primary-text-color));
}

button.primary.outline:hover {
  background-color: hsla(var(--primary-bg-color), var(--opacityHover));
  color: hsl(var(--primary-text-color));
}

button.primary.outline:active {
  background-color: hsla(var(--primary-bg-color), var(--opacityActive));
  color: hsl(var(--primary-text-color));
}

/* PRIMARY BUTTON TEXTONLY */

button.primary.text {
  color: hsl(var(--primary-text-color));
}

button.primary.text:hover {
  background-color: hsla(var(--primary-bg-color), var(--opacityHover));
  color: hsl(var(--primary-text-color));
}

button.primary.text:active {
  background-color: hsla(var(--primary-bg-color), var(--opacityActive));
  color: hsl(var(--primary-text-color));
}

/* INFO BUTTON */

button.info {
  background-color: hsla(var(--info-bg-color), var(--opacityDefault));
  border-top: .1rem solid hsla(var(--info-bg-color), var(--opacityHover));
  border-left: .1rem solid hsla(var(--info-bg-color),var(--opacityHover));
  border-bottom: .1rem solid hsla(var(--info-bg-color), var(--opacityDefault));
  border-right: .1rem solid hsla(var(--info-bg-color),var(--opacityDefault));
  color: hsl(var(--info-text-color));
}

button.info:hover {
  background-color: hsla(var(--info-bg-color), var(--opacityHover));
  border-top: .1rem solid hsla(var(--info-bg-color), var(--opacityActive));
  border-left: .1rem solid hsla(var(--info-bg-color),var(--opacityActive));
  border-bottom: .1rem solid hsla(var(--info-bg-color), var(--opacityHover));
  border-right: .1rem solid hsla(var(--info-bg-color),var(--opacityHover));
  color: hsl(var(--info-text-color));
}

button.info:active {
  background-color: hsla(var(--info-bg-color), var(--opacityActive));
  border: .1rem solid transparent;
  color: hsl(var(--info-text-color));
}

button.info:focus-visible:not(:active) {
  box-shadow: 0 0 0 0.125em hsla(var(--info-text-color), 0.4);
}

/* INFO BUTTON SOLID */

button.info.solid {
  background-color: hsla(var(--info-bg-color), .75);
  border-top: .1rem solid hsla(var(--info-bg-color), var(--opacityHover));
  border-left: .1rem solid hsla(var(--info-bg-color),var(--opacityHover));
  border-bottom: .1rem solid hsla(var(--info-bg-color), var(--opacityDefault));
  border-right: .1rem solid hsla(var(--info-bg-color),var(--opacityDefault));
  color: white;
}

button.info.solid:hover {
  background-color: hsla(var(--info-bg-color), .8);
  border-top: .1rem solid hsla(var(--info-bg-color), var(--opacityActive));
  border-left: .1rem solid hsla(var(--info-bg-color),var(--opacityActive));
  border-bottom: .1rem solid hsla(var(--info-bg-color), var(--opacityHover));
  border-right: .1rem solid hsla(var(--info-bg-color),var(--opacityHover));
  color: white;
}

button.info.solid:active {
  background-color: hsla(var(--info-bg-color), .875);
  border: .1rem solid transparent;
  color: white;
}

/* INFO BUTTON OUTLINED */

button.info.outline {
  border-color: hsla(var(--info-bg-color), .2);
  color: hsl(var(--info-text-color));
}

button.info.outline:hover {
  background-color: hsla(var(--info-bg-color), var(--opacityHover));
  color: hsl(var(--info-text-color));
}

button.info.outline:active {
  background-color: hsla(var(--info-bg-color), var(--opacityActive));
  color: hsl(var(--info-text-color));
}

/* INFO BUTTON TEXTONLY */

button.info.text {
  color: hsl(var(--info-text-color));
}

button.info.text:hover {
  background-color: hsla(var(--info-bg-color), var(--opacityHover));
  color: hsl(var(--info-text-color));
}

button.info.text:active {
  background-color: hsla(var(--info-bg-color), var(--opacityActive));
  color: hsl(var(--info-text-color));
}

/* SUCCESS BUTTON */

button.success {
  background-color: hsla(var(--success-bg-color), var(--opacityDefault));
  border-top: .1rem solid hsla(var(--success-bg-color), var(--opacityHover));
  border-left: .1rem solid hsla(var(--success-bg-color),var(--opacityHover));
  border-bottom: .1rem solid hsla(var(--success-bg-color), var(--opacityDefault));
  border-right: .1rem solid hsla(var(--success-bg-color),var(--opacityDefault));
  color: hsl(var(--success-text-color));
}

button.success:hover {
  background-color: hsla(var(--success-bg-color), var(--opacityHover));
  border-top: .1rem solid hsla(var(--success-bg-color), var(--opacityActive));
  border-left: .1rem solid hsla(var(--success-bg-color),var(--opacityActive));
  border-bottom: .1rem solid hsla(var(--success-bg-color), var(--opacityHover));
  border-right: .1rem solid hsla(var(--success-bg-color),var(--opacityHover));
  color: hsl(var(--success-text-color));
}

button.success:active {
  background-color: hsla(var(--success-bg-color), var(--opacityActive));
  border: .1rem solid transparent;
  color: hsl(var(--success-text-color));
}

button.success:focus-visible:not(:active) {
  box-shadow: 0 0 0 0.125em hsla(var(--success-text-color), 0.4);
}

/* SUCCESS BUTTON SOLID */

button.success.solid {
  background-color: hsla(var(--success-bg-color), .75);
  border-top: .1rem solid hsla(var(--success-bg-color), var(--opacityHover));
  border-left: .1rem solid hsla(var(--success-bg-color),var(--opacityHover));
  border-bottom: .1rem solid hsla(var(--success-bg-color), var(--opacityDefault));
  border-right: .1rem solid hsla(var(--success-bg-color),var(--opacityDefault));
  color: white;
}

button.success.solid:hover {
  background-color: hsla(var(--success-bg-color), .8);
  border-top: .1rem solid hsla(var(--success-bg-color), var(--opacityActive));
  border-left: .1rem solid hsla(var(--success-bg-color),var(--opacityActive));
  border-bottom: .1rem solid hsla(var(--success-bg-color), var(--opacityHover));
  border-right: .1rem solid hsla(var(--success-bg-color),var(--opacityHover));
  color: white;
}

button.success.solid:active {
  background-color: hsla(var(--success-bg-color), .875);
  border: .1rem solid transparent;
  color: white;
}

/* SUCCESS BUTTON OUTLINED */

button.success.outline {
  border-color: hsla(var(--success-bg-color), .2);
  color: hsl(var(--success-text-color));
}

button.success.outline:hover {
  background-color: hsla(var(--success-bg-color), var(--opacityHover));
  color: hsl(var(--success-text-color));
}

button.success.outline:active {
  background-color: hsla(var(--success-bg-color), var(--opacityActive));
  color: hsl(var(--success-text-color));
}

/* SUCCESS BUTTON TEXTONLY */

button.success.text {
  color: hsl(var(--success-text-color));
}

button.success.text:hover {
  background-color: hsla(var(--success-bg-color), var(--opacityHover));
  color: hsl(var(--success-text-color));
}

button.success.text:active {
  background-color: hsla(var(--success-bg-color), var(--opacityActive));
  color: hsl(var(--success-text-color));
}

/* ERROR BUTTON */

button.error {
  background-color: hsla(var(--error-bg-color), var(--opacityDefault));
  border-top: .1rem solid hsla(var(--error-bg-color), var(--opacityHover));
  border-left: .1rem solid hsla(var(--error-bg-color),var(--opacityHover));
  border-bottom: .1rem solid hsla(var(--error-bg-color), var(--opacityDefault));
  border-right: .1rem solid hsla(var(--error-bg-color),var(--opacityDefault));
  color: hsl(var(--error-text-color));
}

button.error:hover {
  background-color: hsla(var(--error-bg-color), var(--opacityHover));
  border-top: .1rem solid hsla(var(--error-bg-color), var(--opacityActive));
  border-left: .1rem solid hsla(var(--error-bg-color),var(--opacityActive));
  border-bottom: .1rem solid hsla(var(--error-bg-color), var(--opacityHover));
  border-right: .1rem solid hsla(var(--error-bg-color),var(--opacityHover));
  color: hsl(var(--error-text-color));
}

button.error:active {
  background-color: hsla(var(--error-bg-color), var(--opacityActive));
  border: .1rem solid transparent;
  color: hsl(var(--error-text-color));
}

button.error:focus-visible:not(:active) {
  box-shadow: 0 0 0 0.125em hsla(var(--error-text-color), 0.4);
}

/* ERROR BUTTON SOLID */

button.error.solid {
  background-color: hsla(var(--error-bg-color), .75);
  border-top: .1rem solid hsla(var(--error-bg-color), var(--opacityHover));
  border-left: .1rem solid hsla(var(--error-bg-color),var(--opacityHover));
  border-bottom: .1rem solid hsla(var(--error-bg-color), var(--opacityDefault));
  border-right: .1rem solid hsla(var(--error-bg-color),var(--opacityDefault));
  color: white;
}

button.error.solid:hover {
  background-color: hsla(var(--error-bg-color), .8);
  border-top: .1rem solid hsla(var(--error-bg-color), var(--opacityActive));
  border-left: .1rem solid hsla(var(--error-bg-color),var(--opacityActive));
  border-bottom: .1rem solid hsla(var(--error-bg-color), var(--opacityHover));
  border-right: .1rem solid hsla(var(--error-bg-color),var(--opacityHover));
  color: white;
}

button.error.solid:active {
  background-color: hsla(var(--error-bg-color), .875);
  border: .1rem solid transparent;
  color: white;
}

/* ERROR BUTTON OUTLINED */

button.error.outline {
  border-color: hsla(var(--error-bg-color), .2);
  color: hsl(var(--error-text-color));
}

button.error.outline:hover {
  background-color: hsla(var(--error-bg-color), var(--opacityHover));
  color: hsl(var(--error-text-color));
}

button.error.outline:active {
  background-color: hsla(var(--error-bg-color), var(--opacityActive));
  color: hsl(var(--error-text-color));
}

/* ERROR BUTTON TEXTONLY */

button.error.text {
  color: hsl(var(--error-text-color));
}

button.error.text:hover {
  background-color: hsla(var(--error-bg-color), var(--opacityHover));
  color: hsl(var(--error-text-color));
}

button.error.text:active {
  background-color: hsla(var(--error-bg-color), var(--opacityActive));
  color: hsl(var(--error-text-color));
}

/* ALERT BUTTON */

button.alert {
  background-color: hsla(var(--alert-bg-color), var(--opacityDefault));
  border-top: .1rem solid hsla(var(--alert-bg-color), var(--opacityHover));
  border-left: .1rem solid hsla(var(--alert-bg-color),var(--opacityHover));
  border-bottom: .1rem solid hsla(var(--alert-bg-color), var(--opacityDefault));
  border-right: .1rem solid hsla(var(--alert-bg-color),var(--opacityDefault));
  color: hsl(var(--alert-text-color));
}

button.alert:hover {
  background-color: hsla(var(--alert-bg-color), var(--opacityHover));
  border-top: .1rem solid hsla(var(--alert-bg-color), var(--opacityActive));
  border-left: .1rem solid hsla(var(--alert-bg-color),var(--opacityActive));
  border-bottom: .1rem solid hsla(var(--alert-bg-color), var(--opacityHover));
  border-right: .1rem solid hsla(var(--alert-bg-color),var(--opacityHover));
  color: hsl(var(--alert-text-color));
}

button.alert:active {
  background-color: hsla(var(--alert-bg-color), var(--opacityActive));
  border: .1rem solid transparent;
  color: hsl(var(--alert-text-color));
}

button.alert:focus-visible:not(:active) {
  box-shadow: 0 0 0 0.125em hsla(var(--alert-text-color), 0.4);
}

/* ALERT BUTTON SOLID */

button.alert.solid {
  background-color: hsla(var(--alert-bg-color), .75);
  border-top: .1rem solid hsla(var(--alert-bg-color), var(--opacityHover));
  border-left: .1rem solid hsla(var(--alert-bg-color),var(--opacityHover));
  border-bottom: .1rem solid hsla(var(--alert-bg-color), var(--opacityDefault));
  border-right: .1rem solid hsla(var(--alert-bg-color),var(--opacityDefault));
  color: white;
}

button.alert.solid:hover {
  background-color: hsla(var(--alert-bg-color), .8);
  border-top: .1rem solid hsla(var(--alert-bg-color), var(--opacityActive));
  border-left: .1rem solid hsla(var(--alert-bg-color),var(--opacityActive));
  border-bottom: .1rem solid hsla(var(--alert-bg-color), var(--opacityHover));
  border-right: .1rem solid hsla(var(--alert-bg-color),var(--opacityHover));
  color: white;
}

button.alert.solid:active {
  background-color: hsla(var(--alert-bg-color), .875);
  border: .1rem solid transparent;
  color: white;
}

/* ALERT BUTTON OUTLINED */

button.alert.outline {
  border-color: hsla(var(--alert-bg-color), .2);
  color: hsl(var(--alert-text-color));
}

button.alert.outline:hover {
  background-color: hsla(var(--alert-bg-color), var(--opacityHover));
  color: hsl(var(--alert-text-color));
}

button.alert.outline:active {
  background-color: hsla(var(--alert-bg-color), var(--opacityActive));
  color: hsl(var(--alert-text-color));
}

/* ALERT BUTTON TEXTONLY */

button.alert.text {
  color: hsl(var(--alert-text-color));
}

button.alert.text:hover {
  background-color: hsla(var(--alert-bg-color), var(--opacityHover));
  color: hsl(var(--alert-text-color));
}

button.alert.text:active {
  background-color: hsla(var(--alert-bg-color), var(--opacityActive));
  color: hsl(var(--alert-text-color));
}

/* VANILLA BUTTON TEXTONLY*/

button {
  align-items: center;
  border-radius: .375em;
  box-shadow: none;
  display: inline-flex;
  font-weight: normal;
  justify-content: flex-start;
  position: relative;
  background: hsla(var(--base-color), var(--opacityDefault));
  border: .1rem solid transparent;
  color: hsl(var(--base-color));
  cursor: pointer;
  justify-content: center;
  padding: .75em .75em;
  text-align: center;
  white-space: nowrap;
  transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

button:hover {
  background-color: hsla(var(--base-color), var(--opacityHover));
  border-color: transparent;
  color: hsl(var(--base-color));
}

button:active {
  background-color: hsla(var(--base-color), var(--opacityActive));
  border-color: transparent;
  color: hsl(var(--base-color));
}

button:focus-visible:not(:active) {
  box-shadow: 0 0 0 0.125em hsla(229, 53%, 53%, 0.25);
} 

/* ALERT BUTTON SOLID */

button.solid {
  background-color: hsla(var(--alert-bg-color), .75);
  border-top: .1rem solid hsla(var(--alert-bg-color), var(--opacityHover));
  border-left: .1rem solid hsla(var(--alert-bg-color),var(--opacityHover));
  border-bottom: .1rem solid hsla(var(--alert-bg-color), var(--opacityDefault));
  border-right: .1rem solid hsla(var(--alert-bg-color),var(--opacityDefault));
  color: white;
}

button.solid:hover {
  background-color: hsla(var(--alert-bg-color), .8);
  border-top: .1rem solid hsla(var(--alert-bg-color), var(--opacityActive));
  border-left: .1rem solid hsla(var(--alert-bg-color),var(--opacityActive));
  border-bottom: .1rem solid hsla(var(--alert-bg-color), var(--opacityHover));
  border-right: .1rem solid hsla(var(--alert-bg-color),var(--opacityHover));
  color: white;
}

button.solid:active {
  background-color: hsla(var(--alert-bg-color), .875);
  border: .1rem solid transparent;
  color: white;
}

/* VANILLA BUTTON OUTLINE*/

button.outline{
  background: transparent;
  border: .1rem solid hsl(var(--base-color), .6);
}

button.outline:hover {
  background-color: hsla(var(--base-color), var(--opacityHover));
  border-color: transparent;
  color: hsla(var(--base-color));
}

button.outline:active {
  background-color: hsla(var(--base-color), var(--opacityActive));
  border-color: transparent;
  color: hsla(var(--base-color));
}

/* VANILLA BUTTON TEXTONLY*/

button.text {
  background-color: transparent;
  border-color: transparent;
  color: hsl(var(--base-color));
}

button.text:hover {
  background-color: hsla(var(--base-color), var(--opacityHover));
  border-color: transparent;
  color: hsl(var(--base-color));
}

button.text:active {
  background-color: hsla(var(--base-color), var(--opacityActive));
  border-color: transparent;
  color: hsl(var(--base-color));
}

button:disabled {
  opacity: .25;
}

/* ==================== END BUTTON ==================== */
</style>