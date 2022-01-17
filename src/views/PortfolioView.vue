<template>
  <Column>
    <Row class="mb-1 gap-1 wrap content-center"><Badge class="alert fs-4 bold">💫 Underconstruction 🚀</Badge></Row>
    <Row class="mb-1 gap-1 wrap content-center">
      <h3>React</h3>
    </Row>  
    <Row class="gap-1 wrap content-center">
      <a target="_blank" href="https://github.com/leandroreschke/react-contacts">
        <Image :width="160" :height="160" class="center semiround" :src="ReactContacts" :placeholder="ReactContacts_P" description>
          <span>Contacts</span>
        </Image>
      </a>
    </Row>
    <Row class="my-1 gap-1 wrap content-center">
      <h3>VueJS</h3>
    </Row>
    <Row class="gap-1 wrap content-center">
      <a target="_blank" href="https://github.com/leandroreschke/vue-tic-tac-toe">
        <Image :width="160" :height="160" class="center semiround" :src="VueTicTacToe" :placeholder="VueTicTacToe_P" description>
          <span>TicTacToe</span>
        </Image>
      </a>
    </Row>
    <Row class="my-1 gap-1 wrap content-center">
      <h3>CSS</h3>
    </Row>
    <Row class="gap-1 wrap content-center">
      <a target="_blank" href="https://github.com/leandroreschke/Asteroid">
        <Image :width="160" :height="160" class="center semiround" :src="CSSAsteroid" :placeholder="CSSAsteroid_P" description>
          <span>Asteroid</span>
        </Image>
      </a>
    </Row>
  </Column>
  
</template>

<script setup lang="ts">

import Column from '../components/shared/Column.vue';
import Row from '../components/shared/Row.vue';
import Image from '../components/shared/Image.vue';
import Badge from '../components/shared/Badge.vue';

import ReactContacts from '@/assets/images/portfolio/React_Contacts.png'
import ReactContacts_P from '@/assets/images/portfolio/React_Contacts_P.png'

import VueTicTacToe from '@/assets/images/portfolio/Vue_TicTacToe.png'
import VueTicTacToe_P from '@/assets/images/portfolio/Vue_TicTacToe_P.png'

import CSSAsteroid from '@/assets/images/portfolio/CSS_Asteroid.png'
import CSSAsteroid_P from '@/assets/images/portfolio/CSS_Asteroid_P.png'

</script>