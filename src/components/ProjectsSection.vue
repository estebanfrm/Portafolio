<script setup>
import { computed, ref, watch } from 'vue'
import { useI18n } from '../i18n'
import SectionHeading from './SectionHeading.vue'

const { locale, t } = useI18n()

// null means "all types"; the filter resets on language change so it never points at a missing label.
const activeType = ref(null)

watch(locale, () => {
  activeType.value = null
})

const projectTypes = computed(() => [
  ...new Set(t.value.projects.map((project) => project.status)),
])

const visibleProjects = computed(() => {
  if (activeType.value === null) return t.value.projects
  return t.value.projects.filter((project) => project.status === activeType.value)
})
</script>

<template>
  <section id="proyectos" class="section">
    <div class="container">
      <SectionHeading v-bind="t.sections.projects" />

      <div
        v-if="projectTypes.length > 1"
        v-reveal="{ delay: 100 }"
        class="filter-tabs"
        :aria-label="t.ui.filterProjects"
      >
        <button
          class="chip-button"
          :class="{ active: activeType === null }"
          type="button"
          :aria-pressed="activeType === null"
          @click="activeType = null"
        >
          {{ t.ui.allProjects }}
        </button>
        <button
          v-for="type in projectTypes"
          :key="type"
          class="chip-button"
          :class="{ active: activeType === type }"
          type="button"
          :aria-pressed="activeType === type"
          @click="activeType = type"
        >
          {{ type }}
        </button>
      </div>

      <div class="projects-grid">
        <article
          v-for="(project, index) in visibleProjects"
          :key="project.github"
          v-reveal="{ delay: 150 + index * 120 }"
          class="project-card"
          :class="{ featured: project.featured }"
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
            <a :href="project.github" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a
              v-if="project.demo"
              :href="project.demo"
              :target="project.demo.startsWith('#') ? undefined : '_blank'"
              :rel="project.demo.startsWith('#') ? undefined : 'noopener noreferrer'"
            >
              {{ project.demoLabel || t.ui.demo }}
            </a>
            <span v-else class="disabled-action">
              {{ project.demoLabel || t.ui.comingSoon }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
