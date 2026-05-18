<script setup>
import { about } from '../data/portfolio'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="sobre-mi" class="section">
    <div class="container split-layout">
      <SectionHeading
        eyebrow="Sobre mí"
        title="Perfil profesional en crecimiento"
        text="Busco mi primera oportunidad como desarrollador junior, aportando disciplina, curiosidad técnica y una base académica sólida."
      />

      <div class="about-panel reveal">
        <p>{{ about.intro }}</p>
        <p>{{ about.details }}</p>

        <ul class="check-list">
          <li v-for="highlight in about.highlights" :key="highlight">
            {{ highlight }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
