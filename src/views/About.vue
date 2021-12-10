<template>
  <Column>
    <Row class="wrap">
      <Column>
        <Image class="maxw-2 mb-1 gap-1 self-center" :src="require('@/assets/images/about/LeandroReschke.png')">
        </Image>
      </Column>
      <Column class="half">

        
        <Card class="mb-1">
          <h1 class="mb-1">About Me</h1>

          <h4 class="mb-2">Hi everyone, I'm Leandro Reschke, a Front-End developer and Artist.</h4>

          <p class="mb-1"><b>Five years of experience</b> in developing commercial and open source software.</p>

          <p class="mb-1">
            I'm Talented in <b>problem solving and design</b>, with proven competence in working in a <b>team effort</b>. 
          </p>
          
          <p class="mb-1"><b>Hard worker, quick learner, and ability to assume responsibility</b>. Portuguese as my mother tongue, mostly <b>fluent in English</b> (spoken and written).</p>

          <h6>For any further information and to checkout my professional career, please take a look at my <a target="_blank" href="https://www.linkedin.com/in/leandroreschke/" class="link">Linkedin Profile</a>.</h6>
        </Card>


        <Card>
          <h3 class="mb-1">About the Website</h3>

          <h5 class="mb-2">It was developed and designed by myself using VueJS 3.2 and my own CSS Framework called <a target="_blank" href="https://github.com/leandroreschke/Asteroid" class="link">Asteroid</a>.</h5>
        </Card>
      </Column>
    </Row>
  </Column>
  
</template>


<script setup>
import Column from '../components/shared/Column.vue';
import Row from '../components/shared/Row.vue';
import Image from '../components/shared/Image.vue';
import Card from '../components/shared/Card.vue';

</script>