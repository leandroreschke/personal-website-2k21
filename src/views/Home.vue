<template>
  <Column>
    <Row class="mb-1 gapx-1 wrap content-center">
      <Column>
        <Image class="maxw-2 mb-1 gap-1 self-center" :src="require('@/assets/images/home/SelfPortrait.png')" description="yes">
          <h3 class="text-center">Leandro Reschke</h3>
          <hr class="mx-1"/>
          <p class="text-center">programmer • artist</p>
        </Image>
        
        <span class="fs-3 text-center">Hi! I work as a Front-End Software Engineer & I'm doing Art / Games as a hobby</span>
      </Column>
    </Row>  
    <Row class="mb-1 gapx-1 wrap content-center">
      <router-link to="/portfolio" tooltip="Underconstruction" flow="up"><Button class="primary fs-3">Portfolio</Button></router-link>
      <router-link to="/about" tooltip="About me" flow="up"><Button class="primary outline fs-3">About</Button></router-link>
    </Row>
    <Row class="gap-1 wrap content-center">
      <Image :style="gifSize" :src="require('@/assets/images/home/Asteroid.gif')"/>
      <Image :style="gifSize" :src="require('@/assets/images/home/MCInformatica.gif')"/>
      <Image :style="gifSize" :src="require('@/assets/images/home/LaMafia.gif')"/>
      <Image :style="gifSize" :src="require('@/assets/images/home/TicTacToe3D.gif')"/>
    </Row>
    <Row class="m-1 content-evenly self-center third">
      <small class="text-center">•</small>
      <small class="text-center">•</small>
      <small class="text-center">•</small>
    </Row>
    <Row>
      <Card headerClasses="content-center bold fs-4">
        <template v-slot:header>Testimonials</template>
        <Row className="gap-1 wrap">
          <blockquote className="fs-3 text-left indent-4">
            <Row className="mb-2 grow">
              He is attentive and committed to the projects that are proposed to him. He acquires and passes on knowledge to the group in a simple way and always collaborating with others. A great colleague and professional.
            </Row>
            <Row className="fs-2 text-right">
              <Column>
                <Image className="rounded s-64" :src="require('@/assets/images/home/testimonial1.jpg')"/>
              </Column>
              <Column>
                <p>Klaiton Padilha</p>
                <p>QA and Support</p>
                <p><a className="link" href="https://orderby.com.br/">Order By</a></p>
              </Column>
            </Row>   

          </blockquote>   
          <blockquote className="fs-3 text-left indent-4">
            <Row className="mb-2 grow">
              His determination and willingness to help others is something to admire. He's always seeking to expand his knowledge on any subject of interest. Overall a great person to work with.  
            </Row>
            <Row className="fs-2 text-right">
              <Column>
                <Image className="rounded s-64" :src="require('@/assets/images/home/testimonial3.jpg')"/>
              </Column>
              <Column>
                <p>Cristiane Carmargo Beus</p>
                <p>Programmer</p>
                <p><a className="link" href="#society6">Freelancer</a></p>
              </Column>
            </Row>   
          </blockquote>   
        </Row>
      </Card>
    </Row>
  </Column>
</template>

<script setup>

import Card from '../components/shared/Card.vue'
import Button from '../components/shared/Button.vue';
import Row from '../components/shared/Row.vue';
import Column from '../components/shared/Column.vue';
import Image from '../components/shared/Image.vue';

const gifSize = {maxWidth: '32rem', maxHeight: '14.53rem'};

</script>
