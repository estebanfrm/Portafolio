<script setup>
import { experience } from '../data/portfolio'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section class="section alt-section">
    <div class="container split-layout">
      <SectionHeading
        eyebrow="Experiencia"
        title="Base profesional administrativa"
        text="Experiencia útil para equipos de desarrollo: comunicación, orden, cumplimiento y manejo responsable de información."
      />

      <div v-reveal="{ delay: 140 }" class="timeline">
        <article v-for="item in experience" :key="item.role" class="timeline-item">
          <span class="timeline-dot"></span>
          <p class="timeline-period">{{ item.period }}</p>
          <h3>{{ item.role }}</h3>
          <p class="muted">{{ item.company }}</p>
          <p>{{ item.description }}</p>
          <ul class="check-list compact">
            <li v-for="achievement in item.achievements" :key="achievement">
              {{ achievement }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
