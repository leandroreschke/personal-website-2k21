<template>
  <Column>
    <Row class="mb-1 gapx-1 wrap content-center">
      <Column>
        <Image :width="300" :height="300" class="mb-1 gap-1 self-center" :src="HeroImage" :placeholder="HeroImage_P" description>
          <h3 class="text-center">Leandro Reschke</h3>
          <hr class="mx-1"/>
          <p class="text-center">programmer • artist</p>
        </Image>
        <span class="fs-3 mt-4 text-center">Hi! I work as a Front-End Software Engineer & I'm doing Art / Games as a hobby</span>
      </Column>
    </Row>  
    <Row class="mb-1 gapx-1 wrap content-center">
      <router-link to="/portfolio" tooltip="Underconstruction" flow="up"><Button class="primary fs-3">Portfolio</Button></router-link>
      <router-link to="/about" tooltip="About me" flow="up"><Button class="primary outline fs-3">About</Button></router-link>
    </Row>
    <Row class="gap-1 wrap content-center">
      <template v-for="showcaseImage in showcaseImages">
        <Image :width="320" :height="145" :style="gifSize" :src="showcaseImage.image" :placeholder="showcaseImage.placeholder"/>
      </template>
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
          <template v-for="testimonial in testimonials">
            <blockquote className="fs-3 text-left indent-4">
              <Row className="mb-2 grow">
                {{ testimonial.description }}
              </Row>
              <Row className="fs-2 text-right">
                <Column>
                  <Image className="rounded s-64" :src="testimonial.image"/>
                </Column>
                <Column>
                  <p>{{ testimonial.name }}</p>
                  <p>{{ testimonial.jobRole }}</p>
                  <p><a className="link" :href="testimonial.jobWebUrl">{{ testimonial.jobWebName }}</a></p>
                </Column>
              </Row>   
            </blockquote>   
          </template> 
        </Row>
      </Card>
    </Row>
  </Column>
</template>

<script setup lang="ts">

import HeroImage from '@/assets/images/home/HeroImage.png'
import HeroImage_P from '@/assets/images/home/HeroImage_P.png'
import Asteroid from '@/assets/images/home/Asteroid.gif' 
import Asteroid_P from '@/assets/images/home/Asteroid_P.gif'
import MCInformatica from '@/assets/images/home/MCInformatica.gif' 
import MCInformatica_P from '@/assets/images/home/MCInformatica_P.gif'
import LaMafia from '@/assets/images/home/LaMafia.gif'
import LaMafia_P from '@/assets/images/home/LaMafia_P.gif'
import TicTacToe3D from '@/assets/images/home/TicTacToe3D.gif'
import TicTacToe3D_P from '@/assets/images/home/TicTacToe3D_P.gif'

import Testimonial1 from '@/assets/images/home/testimonial1.jpg'
import Testimonial3 from '@/assets/images/home/testimonial3.jpg'

import Card from '@/components/shared/Card.vue'
import Button from '@/components/shared/Button.vue';
import Row from '@/components/shared/Row.vue';
import Column from '@/components/shared/Column.vue';
import Image from '@/components/shared/Image.vue';
import Select from '@/components/shared/Select.vue'

const gifSize = {maxWidth: '32rem', maxHeight: '14.53rem'};

const showcaseImages = [
  {image: Asteroid, placeholder: Asteroid_P},
  {image: MCInformatica, placeholder: MCInformatica_P},
  {image: LaMafia, placeholder: LaMafia_P},
  {image: TicTacToe3D, placeholder: TicTacToe3D_P}
]

const testimonials = [
  {
    description: 'He is attentive and committed to the projects that are proposed to him.' + 
      ' He acquires and passes on knowledge to the group in a simple way and always collaborating with others.' +
      ' A great colleague and professional.',
    name: 'Klaiton Padilha',
    image: Testimonial1,
    jobRole: 'QA and Support',
    jobWebName: 'Order By',
    jobWebUrl: 'https://orderby.com.br/',
  },
  {
    description: 'His determination and willingness to help others is something to admire.' +
    ' He\'s always seeking to expand his knowledge on any subject of interest.' +
    ' Overall a great person to work with.',
    name: 'Cristiane Carmargo Beus',
    image: Testimonial3,
    jobRole: 'Programmer',
    jobWebName: 'Freelancer',
    jobWebUrl: '#society6',
  },
]

</script>
