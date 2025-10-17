<template>
  <section class="segment" aria-labelledby="info-heading">
    <!-- Left: stacked info cards (no visible labels) -->
    <div class="segment-left" role="list">
      <article class="info-item" role="listitem" aria-label="First name">
        <div class="icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" class="svg"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.33 0-8 2.17-8 4v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-1.83-3.67-4-8-4Z"/></svg>
        </div>
        <div class="value">{{ firstName }}</div>
      </article>

      <article class="info-item" role="listitem" aria-label="Last name">
        <div class="icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" class="svg"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.33 0-8 2.17-8 4v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-1.83-3.67-4-8-4Z"/></svg>
        </div>
        <div class="value">{{ lastName }}</div>
      </article>

      <article class="info-item" role="listitem" aria-label="Email">
        <div class="icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" class="svg"><path d="M20 4H4a2 2 0 0 0-2 2v.35l10 5.71 10-5.71V6a2 2 0 0 0-2-2Zm0 4.62-8.7 4.96a1 1 0 0 1-1 0L2 8.62V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"/></svg>
        </div>
        <div class="value">
          <a :href="`mailto:${email}`" class="link">{{ email }}</a>
        </div>
      </article>

      <article class="info-item" role="listitem" aria-label="Mobile phone">
        <div class="icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" class="svg"><path d="M6.62 10.79a15.1 15.1 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 7a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.24 1.01l-2.2 2.21Z"/></svg>
        </div>
        <div class="value">
          <a :href="`tel:${mobile}`" class="link">{{ mobile }}</a>
        </div>
      </article>
    </div>

    <!-- Right: heading + mini description -->
    <div class="segment-right">
        <h2 id="info-heading">About</h2>
        <p class="lead">
        {{ about }}
        </p>
        <div ref="statsRef" class="stats" role="list" aria-label="Personal interests timeline">
        <!-- Knitting -->
        <div class="stat" role="listitem">
          <div class="stat-icon" aria-hidden="true">
            <!-- yarn ball -->
            <svg viewBox="0 0 24 24" class="svg">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"/>
              <path d="M5 9c3-3 8-3 11 0M4 13c4-4 10-4 14 0M7 16c3-3 7-3 10 0" fill="none" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </div>
          <div class="stat-body">
            <div class="stat-row">
              <div class="stat-num">{{ n1 }}</div>
              <div class="stat-unit">years</div>
            </div>
            <div class="stat-caption">of knitting</div>
          </div>
        </div>

        <!-- Clay -->
        <div class="stat" role="listitem">
          <div class="stat-icon" aria-hidden="true">
            <!-- clay pot -->
            <svg viewBox="0 0 24 24" class="svg">
              <path d="M8 3h8c0 2-2 3-2 4s1 2 1 4a7 7 0 0 1-14 0c0-2 1-3 1-4S8 5 8 3Z"/>
              <path d="M4 15h16" fill="none" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </div>
          <div class="stat-body">
            <div class="stat-row">
              <div class="stat-num">{{ n2 }}</div>
              <div class="stat-unit">years</div>
            </div>
            <div class="stat-caption">of clay</div>
          </div>
        </div>

        <!-- Motocross -->
        <div class="stat" role="listitem">
          <div class="stat-icon" aria-hidden="true">
            <!-- motorcycle -->
            <svg viewBox="0 0 24 24" class="svg">
              <path d="M5 17a3 3 0 1 1 2.83-4h3.34A3 3 0 1 1 15 17H9"/>
              <path d="M14 7h3l3 3h-4l-2-3Z" />
              <path d="M12 10l2-3M3 10h4" fill="none" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </div>
          <div class="stat-body">
            <div class="stat-row">
              <div class="stat-num">{{ n3 }}</div>
              <div class="stat-unit">year</div>
            </div>
            <div class="stat-caption">of motocross</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/* eslint-env vue/setup-compiler-macros */
import { toRefs, ref, onMounted } from 'vue'

const props = defineProps({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true },
  mobile:    { type: String, required: true },
  about:     { type: String, required: true }
})
const { firstName, lastName, email, mobile, about } = toRefs(props)

/* ----- count-up numbers ----- */
const n1 = ref(0) // target 8
const n2 = ref(0) // target 2
const n3 = ref(0) // target 1
const statsRef = ref(null)

function countUp(refNum, target, duration = 1200) {
  const start = performance.now()
  const step = (now) => {
    const p = Math.min(1, (now - start) / duration)
    refNum.value = Math.round(p * target * 10) / 10   // υποστηρίζει δεκαδικά
    if (p < 1) requestAnimationFrame(step)
    else refNum.value = target
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  // Ξεκίνα την animation όταν τα stats μπουν στο viewport
  const io = new IntersectionObserver((entries) => {
    if (entries.some(e => e.isIntersecting)) {
      countUp(n1, 8, 1200)
      countUp(n2, 2, 1000)
      countUp(n3, 1, 900)
      io.disconnect()
    }
  }, { threshold: 0.3 })
  if (statsRef.value) io.observe(statsRef.value)
})
</script>

<style scoped>
/* ===== Layout wrapper: ίσο ύψος columns ===== */
.segment {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 16px;
  border-radius: 16px;
  align-items: stretch;           /* <-- κάνει τα δύο columns ίσου ύψους */
  background: transparent;
}
@media (min-width: 960px) {
  .segment {
    grid-template-columns: 380px 1fr;
    gap: 32px;
    padding: 8px 16px;
  }
}
.segment-left,
.segment-right { align-self: stretch; }
.segment-right { display: flex; flex-direction: column; }

/* ===== Left column cards ===== */
.segment-left { display: grid; gap: 14px; }
.info-item {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 12px;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 14px;
  box-shadow: 0 4px 14px rgba(0,0,0,.06);
}

:root { --olive:#556B2F; }
.icon, .stat-icon {
  width: 52px; height: 52px;
  border-radius: 50%;
  display: grid; place-items: center;
  background: rgba(85,107,47,.10);
  border: 1px solid rgba(85,107,47,.35);
  box-shadow: 0 4px 10px rgba(85,107,47,.18);
}
.svg { width: 22px; height: 22px; fill: var(--olive); }

.value { font-weight: 600; color: #0f172a; word-break: break-word; }
.link { color: #0f172a; text-decoration: none; }

/* ===== Right column ===== */
.segment-right h2 {
  margin: 0 0 8px;
  font-size: clamp(1.4rem, 2.4vw, 2rem);
  color: #0f172a;
}
.lead {
  margin: 0 0 20px;
  color: #334155;
  max-width: 60ch;
}

/* ===== Stats row ===== */
.stats {
  margin-top: auto;                       /* “κολλάει” τα stats χαμηλά για ίσο ύψος */
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 16px;
}
@media (max-width: 720px) {
  .stats { grid-template-columns: 1fr; }
}
.stat {
  display: grid;
  grid-template-columns: 52px 1fr;
  align-items: center;
  gap: 12px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 14px;
  box-shadow: 0 4px 14px rgba(0,0,0,.06);
}
.stat-body { display: grid; gap: 2px; }
.stat-row { display: flex; align-items: baseline; gap: 6px; }
.stat-num { font-weight: 800; font-size: 1.25rem; color: #0f172a; line-height: 1.2; min-width: 2ch; text-align: right; }
.stat-unit { color: #334155; font-size: .9rem; }
.stat-caption { color: #6b7280; font-size: .95rem; }
</style>

