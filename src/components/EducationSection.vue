<script setup>
import { useI18n } from '../i18n'
import SectionHeading from './SectionHeading.vue'

const { t } = useI18n()
</script>

<template>
  <section class="section">
    <div class="container">
      <SectionHeading v-bind="t.sections.education" />

      <div class="education-grid">
        <article
          v-for="(item, index) in t.education"
          :key="item.linkUrl"
          v-reveal="{ delay: 120 + index * 120 }"
          class="info-card education-card"
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
              rel="noopener noreferrer"
            >
              {{ item.linkLabel }}
            </a>
            <span v-else class="disabled-action">
              {{ item.linkLabel || t.ui.comingSoon }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
