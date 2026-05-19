<script setup>
import { profile } from '../data/portfolio'
import SectionHeading from './SectionHeading.vue'

const contactLinks = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'Perfil profesional',
    href: profile.linkedin,
    external: true,
  },
  { label: 'GitHub', value: 'Repositorios', href: profile.github, external: true },
  { label: 'WhatsApp', value: 'Mensaje directo', href: profile.whatsapp, external: true },
]
</script>

<template>
  <section id="contacto" class="section contact-section">
    <div class="container contact-grid">
      <SectionHeading
        eyebrow="Contacto"
        title="Disponible para proyectos"
        text="Abierto a colaborar en desarrollo web, IA, prácticas profesionales y proyectos tecnológicos donde pueda aportar soluciones claras, compromiso y aprendizaje continuo."
      />

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
