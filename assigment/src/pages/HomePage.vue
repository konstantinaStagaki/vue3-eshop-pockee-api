<template>
  <main class="home">
    <section class="hero">
      <div class="hero-inner">
        <ImageSlider />
      </div>
    </section>

    
    <section class="info-wrap">
      
      <PersonalInfoCard
        firstName="Konstantina"
        lastName="Stagaki"
        email="konstantinastagake@gmail.com"
        mobile="+30 6943156226"
        about="I love building clean, efficient code
                and finding smart solutions to
                complex problems. I stay curious
                and keep up with emerging
                technologies to deliver products
                that are both innovative and user-
                focused. My work reflects a hands-
                on approach and a genuine passion
                for creating great digital
                experiences."
      />
    </section>
  </main>
</template>

<script setup>
import ImageSlider from '@/components/ImageSlider.vue'
import PersonalInfoCard from '@/components/PersonalInfoCard.vue'
</script>

<style scoped>
.home {
  padding: 16px;
}


.hero {
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  padding: clamp(12px, 3vw, 28px) 0;  /* κάθετο spacing μόνο */
  background: transparent;
}


@media (min-width: 768px) {
  .hero { padding: 24px; border-radius: 34px; }
}

.hero-inner {
  width: min(1200px, 92vw);
  margin-inline: auto;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: none;              
}

.info-wrap {
  max-width: 1100px;
  margin: 24px auto 48px;
  padding: 0 16px;
  background: transparent;  
}


.home-header {
  margin: 0 0 12px;
}
.home-title {
  margin: 0 0 6px;
  font-size: 1.5rem;
}
.home-subtitle {
  margin: 0;
  color: #4b5563;
}
</style>
