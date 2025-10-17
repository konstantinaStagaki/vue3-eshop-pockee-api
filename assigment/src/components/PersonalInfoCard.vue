<template>
  <section aria-labelledby="personal-info-title" class="info-card">
    <h2 id="personal-info-title" class="info-title">Personal Information</h2>
    <dl class="info-grid">
      <div>
        <dt>First name</dt>
        <dd>{{ firstName }}</dd>
      </div>
      <div>
        <dt>Last name</dt>
        <dd>{{ lastName }}</dd>
      </div>
      <div>
        <dt>Email</dt>
        <dd>
          <a :href="`mailto:${email}`" class="link">{{ email }}</a>
        </dd>
      </div>
      <div>
        <dt>Mobile phone</dt>
        <dd>
          <a :href="`tel:${mobile}`" class="link">{{ mobile }}</a>
        </dd>
      </div>
    </dl>
  </section>
</template>

<script setup>
/* eslint-env vue/setup-compiler-macros */
import { toRefs } from 'vue'

const props = defineProps({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true },
  mobile:    { type: String, required: true }
})

const { firstName, lastName, email, mobile } = toRefs(props)
</script>

<style scoped>
.info-card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  background: #fff;
}

.info-title {
  margin: 0 0 12px;
  font-size: 1.125rem;
  line-height: 1.4;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

@media (min-width: 640px) {
  .info-grid {
    grid-template-columns: 1fr 1fr;
  }
}

dt {
  font-weight: 600;
  color: #111827;
  margin-bottom: 2px;
}
dd {
  margin: 0;
  color: #374151;
}

.link {
  color: #1f2937;
  text-decoration: underline;
}
.link:focus,
.link:hover {
  outline: none;
  text-decoration: none;
  border-bottom: 2px solid #1f2937;
}
</style>
