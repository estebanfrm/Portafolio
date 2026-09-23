<script setup>
import { computed, ref, watch } from 'vue'
import { useI18n } from '../i18n'
import SectionHeading from './SectionHeading.vue'

const { locale, t } = useI18n()

// null means "all categories"; category names are translated, so the filter resets on language change.
const activeCategory = ref(null)

watch(locale, () => {
  activeCategory.value = null
})

const visibleSkills = computed(() => {
  if (activeCategory.value === null) return t.value.skills
  return t.value.skills.filter((skill) => skill.category === activeCategory.value)
})
</script>

<template>
  <section id="skills" class="section alt-section">
    <div class="container">
      <SectionHeading v-bind="t.sections.skills" />

      <div v-reveal="{ delay: 100 }" class="filter-tabs" :aria-label="t.ui.filterSkills">
        <button
          class="chip-button"
          :class="{ active: activeCategory === null }"
          type="button"
          :aria-pressed="activeCategory === null"
          @click="activeCategory = null"
        >
          {{ t.ui.allSkills }}
        </button>
        <button
          v-for="skill in t.skills"
          :key="skill.category"
          class="chip-button"
          :class="{ active: activeCategory === skill.category }"
          type="button"
          :aria-pressed="activeCategory === skill.category"
          @click="activeCategory = skill.category"
        >
          {{ skill.category }}
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
