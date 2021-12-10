<template>
  <Column>
    <Row class="mb-1 gap-1 wrap content-center"><Badge class="alert fs-4 bold">💫 Underconstruction 🚀</Badge></Row>
    <Row class="mb-1 gap-1 wrap content-center">
      <h3>React</h3>
    </Row>  
    <Row class="gap-1 wrap content-center">
      <a target="_blank" href="https://github.com/leandroreschke/react-contacts">
        <Image class="center s-160 semiround" :src="require('@/assets/images/portfolio/React_Contacts.png')" description>
          <span>Contacts</span>
        </Image>
      </a>
    </Row>
    <Row class="my-1 gap-1 wrap content-center">
      <h3>VueJS</h3>
    </Row>
    <Row class="gap-1 wrap content-center">
      <a target="_blank" href="https://github.com/leandroreschke/vue-tic-tac-toe">
        <Image class="center s-160 semiround" :src="require('@/assets/images/portfolio/Vue_TicTacToe.png')" description>
          <span>TicTacToe</span>
        </Image>
      </a>
    </Row>
    <Row class="my-1 gap-1 wrap content-center">
      <h3>CSS</h3>
    </Row>
    <Row class="gap-1 wrap content-center">
      <a target="_blank" href="https://github.com/leandroreschke/Asteroid">
        <Image class="center s-160 semiround" :src="require('@/assets/images/portfolio/CSS_Asteroid.png')" description>
          <span>Asteroid</span>
        </Image>
      </a>
    </Row>
  </Column>
  
</template>


<script setup>
import Column from '../components/shared/Column.vue';
import Row from '../components/shared/Row.vue';
import Image from '../components/shared/Image.vue';
import Badge from '../components/shared/Badge.vue';

</script>