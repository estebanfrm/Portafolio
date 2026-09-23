<script setup>
import { useI18n } from '../i18n'
import SectionHeading from './SectionHeading.vue'

const { t } = useI18n()
</script>

<template>
  <section class="section alt-section">
    <div class="container split-layout">
      <SectionHeading v-bind="t.sections.experience" />

      <div v-reveal="{ delay: 140 }" class="timeline">
        <article v-for="(item, index) in t.experience" :key="index" class="timeline-item">
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
