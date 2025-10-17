<template>
  <section aria-labelledby="home-slider-title" class="slider-section">
    <h2 id="home-slider-title" class="visually-hidden">Image slider</h2>

    <Carousel
      :items-to-show="1"
      :wrap-around="true"
      :autoplay="4500"
      :pause-autoplay-on-hover="true"
      :mouse-drag="true"
      :touch-drag="true"
    >
      <Slide v-for="(img, idx) in images" :key="idx">
        <img :src="img.src" :alt="img.alt" class="slide-image" />
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<script setup>
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'


import s1 from '@/assets/images/slider1.jpg'
import s2 from '@/assets/images/slider2.jpg'
import s3 from '@/assets/images/slider3.jpg'
import s4 from '@/assets/images/slider4.jpg'
import s5 from '@/assets/images/slider5.jpg'

const images = [
  { src: s1, alt: 'Hero banner 1' },
  { src: s2, alt: 'Hero banner 2' },
  { src: s3, alt: 'Hero banner 3' },
  { src: s4, alt: 'Hero banner 4' },
  { src: s5, alt: 'Hero banner 5' }
]
</script>

<style scoped>

.slider-section { position: relative; }


.slide-image {
  width: 100%;
  aspect-ratio: 16 / 7;   
  object-fit: cover;
  display: block;
}

:deep(.carousel__prev), :deep(.carousel__next) {
  z-index: 3;
  background: rgba(255,255,255,0.9);
  border-radius: 9999px;
  box-shadow: 0 2px 8px rgba(0,0,0,.12);
}


:deep(.carousel__prev) { left: 12px; }
:deep(.carousel__next) { right: 12px; }

/* bullets */
:deep(.carousel__pagination-button::after) {
  opacity: .8;
}
:deep(.carousel__pagination-button--active::after) {
  opacity: 1;
}

/* SR helper */
.visually-hidden {
  position: absolute !important;
  width:1px;height:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:nowrap;
}
</style>
