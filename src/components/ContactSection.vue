<script setup>
import { computed } from 'vue'
import { profile } from '../data/portfolio'
import { useI18n } from '../i18n'
import SectionHeading from './SectionHeading.vue'

const { t } = useI18n()

const contactLinks = computed(() => [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: t.value.ui.contactLinks.linkedin,
    href: profile.linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: t.value.ui.contactLinks.github,
    href: profile.github,
    external: true,
  },
  {
    label: 'WhatsApp',
    value: t.value.ui.contactLinks.whatsapp,
    href: profile.whatsapp,
    external: true,
  },
])
</script>

<template>
  <section id="contacto" class="section contact-section">
    <div class="container contact-grid">
      <SectionHeading v-bind="t.sections.contact" />

      <div v-reveal="{ delay: 140 }" class="contact-card">
        <a
          v-for="link in contactLinks"
          :key="link.label"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
          class="contact-link"
        >
          <span>{{ link.label }}</span>
          <strong>{{ link.value }}</strong>
        </a>
      </div>
    </div>
  </section>
</template>
