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
        text="Formación técnica en curso y aprendizaje continuo del inglés para fortalecer mi perfil como desarrollador junior."
      />

      <div class="education-grid">
        <article
          v-for="item in education"
          :key="item.title"
          class="info-card education-card reveal"
        >
          <div>
            <p class="timeline-period">{{ item.period }}</p>
            <h3>{{ item.title }}</h3>
            <p class="muted">{{ item.institution }}</p>
            <p>{{ item.description }}</p>
          </div>

          <div class="card-actions education-actions">
            <a
              v-if="item.linkUrl"
              :href="item.linkUrl"
              target="_blank"
              rel="noreferrer"
            >
              {{ item.linkLabel }}
            </a>
            <span v-else class="disabled-action">
              {{ item.linkLabel || 'Próximamente' }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
