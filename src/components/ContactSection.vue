<script setup>
import { profile } from '../data/portfolio'
import SectionHeading from './SectionHeading.vue'

const contactLinks = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'LinkedIn', value: 'Perfil profesional', href: profile.linkedin },
  { label: 'GitHub', value: 'Repositorios', href: profile.github },
  { label: 'WhatsApp', value: 'Mensaje directo', href: profile.whatsapp },
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
          target="_blank"
          rel="noreferrer"
          class="contact-link"
        >
          <span>{{ link.label }}</span>
          <strong>{{ link.value }}</strong>
        </a>
      </div>
    </div>
  </section>
</template>
