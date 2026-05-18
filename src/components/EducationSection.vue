<script setup>
import { education } from '../data/portfolio'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section class="section">
    <div class="container">
      <SectionHeading
        eyebrow="Educación"
        title="Formación académica"
        text="Preparación técnica en curso y mejora constante del inglés para un perfil más competitivo."
      />

      <div class="education-grid">
        <article v-for="item in education" :key="item.title" class="info-card reveal">
          <p class="timeline-period">{{ item.period }}</p>
          <h3>{{ item.title }}</h3>
          <p class="muted">{{ item.institution }}</p>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
