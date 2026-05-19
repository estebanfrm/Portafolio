<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
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
const profileTrigger = ref(null)
const profileCloseButton = ref(null)
let lastFocusedElement = null
let previousBodyOverflow = ''

const closeMenu = () => {
  isMenuOpen.value = false
}

const openProfileModal = () => {
  lastFocusedElement = document.activeElement
  previousBodyOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  isProfileModalOpen.value = true

  nextTick(() => {
    profileCloseButton.value?.focus()
  })
}

const closeProfileModal = () => {
  if (!isProfileModalOpen.value) return

  isProfileModalOpen.value = false
  document.body.style.overflow = previousBodyOverflow

  nextTick(() => {
    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus()
    } else {
      profileTrigger.value?.focus()
    }
  })
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    if (isProfileModalOpen.value) {
      closeProfileModal()
      return
    }

    closeMenu()
  }

  if (event.key === 'Tab' && isProfileModalOpen.value) {
    event.preventDefault()
    profileCloseButton.value?.focus()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = previousBodyOverflow
})
</script>

<template>
  <header class="site-header">
    <nav class="nav container" aria-label="Navegación principal">
      <div class="brand" aria-label="Esteban Giraldo">
        <button
          ref="profileTrigger"
          class="brand-photo-button"
          type="button"
          aria-label="Ampliar foto de Esteban Giraldo"
          @click="openProfileModal"
        >
          <img class="brand-mark" src="/perfil.png" alt="" />
        </button>
        <a class="brand-name" href="#inicio" @click="closeMenu">Esteban</a>
      </div>

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
        <a v-for="item in navItems" :key="item.href" :href="item.href" @click="closeMenu">
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
      ref="profileCloseButton"
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
