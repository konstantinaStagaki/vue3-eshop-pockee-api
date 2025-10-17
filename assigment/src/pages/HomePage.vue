<template>
  <main class="home">
    <section class="hero">
      <div class="hero-inner">
        <ImageSlider />
      </div>
    </section>

    
    <section class="info-wrap">
      <header class="home-header" aria-labelledby="home-title">
        <h1 id="home-title" class="home-title">Welcome</h1>
        <p class="home-subtitle">
          This demo shows a simple homepage with personal information and an image slider.
        </p>
      </header>

      <PersonalInfoCard
        firstName="Konstantina"
        lastName="Stagaki"
        email="konstantinastagake@gmail.com"
        mobile="+30 6943156226"
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

/* --- HERO WRAPPER (background + rounded corners) --- */
.hero {
  /* διαλέγουμε ένα φρέσκο lime/green gradient όπως το δείγμα */
  --c1: #d9f99d; /* light lime */
  --c2: #a3e635; /* lime-500 */
  --c3: #052e16; /* deep green accents */

  background: radial-gradient(120% 120% at 100% 0%, var(--c1) 0%, var(--c2) 60%, var(--c3) 130%);
  border-radius: 28px;           /* μεγάλες γωνίες όπως στο mock */
  padding: 18px;                 /* “κάσα” γύρω από το carousel */
  box-shadow: 0 8px 24px rgba(0,0,0,.08);
  overflow: hidden;              /* κρύβει τυχόν προεξοχές των βελών */
}

/* για μεγάλα πλάτη να φαίνεται πιο “ηρωικό” */
@media (min-width: 768px) {
  .hero { padding: 24px; border-radius: 34px; }
}

.hero-inner {
  border-radius: 20px;           /* ίδιες γωνίες με την εικόνα μέσα */
  overflow: hidden;              /* ώστε οι εικόνες να “κόβονται” στις γωνίες */
}

/* Τίτλος & κείμενο πληροφοριών */
.info-wrap {
  max-width: 960px;
  margin: 24px auto 0;
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
