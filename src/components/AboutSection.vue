<script setup>
import { useI18n } from '../i18n'
import SectionHeading from './SectionHeading.vue'

const { t } = useI18n()
</script>

<template>
  <section id="sobre-mi" class="section">
    <div class="container split-layout">
      <SectionHeading v-bind="t.sections.about" />

      <div v-reveal="{ delay: 140 }" class="about-panel">
        <p>{{ t.about.intro }}</p>
        <p>{{ t.about.details }}</p>

        <ul class="check-list">
          <li v-for="highlight in t.about.highlights" :key="highlight">
            {{ highlight }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
