<script setup>
import { computed, ref } from 'vue'
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading.vue'

const activeType = ref('Todos')

const projectTypes = computed(() => [
  'Todos',
  ...new Set(projects.map((project) => project.status)),
])

const visibleProjects = computed(() => {
  if (activeType.value === 'Todos') return projects
  return projects.filter((project) => project.status === activeType.value)
})
</script>

<template>
  <section id="proyectos" class="section">
    <div class="container">
      <SectionHeading
        eyebrow="Proyectos"
        title="Proyectos destacados"
        text="Tarjetas iniciales fáciles de reemplazar por proyectos reales de GitHub, demos académicas o prototipos de IA."
      />

      <div class="filter-tabs reveal" aria-label="Filtrar proyectos">
        <button
          v-for="type in projectTypes"
          :key="type"
          class="chip-button"
          :class="{ active: activeType === type }"
          type="button"
          @click="activeType = type"
        >
          {{ type }}
        </button>
      </div>

      <div class="projects-grid">
        <article
          v-for="project in visibleProjects"
          :key="project.name"
          class="project-card reveal"
        >
          <div class="project-header">
            <span>{{ project.status }}</span>
            <h3>{{ project.name }}</h3>
          </div>

          <p>{{ project.description }}</p>

          <div class="tag-list">
            <span v-for="technology in project.technologies" :key="technology">
              {{ technology }}
            </span>
          </div>

          <div class="card-actions">
            <a :href="project.github" target="_blank" rel="noreferrer">GitHub</a>
            <a :href="project.demo" target="_blank" rel="noreferrer">Demo</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
