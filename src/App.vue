<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import EducationSection from './components/EducationSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

const isMenuOpen = ref(false)
const isProfileModalOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}

const openProfileModal = () => {
  isProfileModalOpen.value = true
}

const closeProfileModal = () => {
  isProfileModalOpen.value = false
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') closeProfileModal()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <header class="site-header">
    <nav class="nav container" aria-label="Navegación principal">
      <a class="brand" href="#inicio" @click="closeMenu">
        <img
          class="brand-mark"
          src="/perfil.png"
          alt="Esteban Giraldo"
          @click.prevent.stop="openProfileModal"
        />
        <span>Esteban</span>
      </a>

      <button
        class="menu-button"
        type="button"
        :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
        :aria-expanded="isMenuOpen"
        aria-controls="main-menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div id="main-menu" class="nav-links" :class="{ 'is-open': isMenuOpen }">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
      </div>
    </nav>
  </header>

  <div
    v-if="isProfileModalOpen"
    class="profile-modal"
    role="dialog"
    aria-modal="true"
    aria-label="Foto de Esteban Giraldo"
    @click.self="closeProfileModal"
  >
    <button
      class="profile-modal-close"
      type="button"
      aria-label="Cerrar foto"
      @click="closeProfileModal"
    >
      ×
    </button>
    <img class="profile-modal-image" src="/perfil.png" alt="Esteban Giraldo" />
  </div>

  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <EducationSection />
    <ContactSection />
  </main>
</template>
