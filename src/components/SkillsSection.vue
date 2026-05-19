<script setup>
import { computed, ref } from 'vue'
import { skills } from '../data/portfolio'
import SectionHeading from './SectionHeading.vue'

const activeCategory = ref('Todas')

const categories = computed(() => ['Todas', ...skills.map((skill) => skill.category)])

const visibleSkills = computed(() => {
  if (activeCategory.value === 'Todas') return skills
  return skills.filter((skill) => skill.category === activeCategory.value)
})
</script>

<template>
  <section id="skills" class="section alt-section">
    <div class="container">
      <SectionHeading
        eyebrow="Skills"
        title="Tecnologías y herramientas"
        text="Stack académico y práctico enfocado en desarrollo web, APIs, datos, herramientas de trabajo e inteligencia artificial."
      />

      <div v-reveal="{ delay: 100 }" class="filter-tabs" aria-label="Filtrar habilidades">
        <button
          v-for="category in categories"
          :key="category"
          class="chip-button"
          :class="{ active: activeCategory === category }"
          type="button"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="skills-grid">
        <article
          v-for="(group, index) in visibleSkills"
          :key="group.category"
          v-reveal="{ delay: 140 + index * 90 }"
          class="skill-card"
        >
          <h3>{{ group.category }}</h3>
          <div class="tag-list">
            <span v-for="item in group.items" :key="item">{{ item }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
