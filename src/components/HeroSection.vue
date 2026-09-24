<script setup>
import { profile } from '../data/portfolio'
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>

<template>
  <section id="inicio" class="hero section">
    <div class="container hero-grid">
      <div v-reveal class="hero-content">
        <p class="eyebrow">{{ t.profile.roleFocus }}</p>
        <h1>{{ profile.name }}</h1>
        <p class="hero-title">{{ t.profile.title }}</p>
        <p class="hero-copy">{{ t.profile.tagline }}</p>

        <div class="hero-actions" :aria-label="t.ui.heroActions">
          <a class="button primary" href="#proyectos">{{ t.ui.viewProjects }}</a>
          <a class="button secondary" :href="profile.cv" download>{{
            t.ui.downloadCv
          }}</a>
          <a class="button ghost" href="#contacto">{{ t.ui.contact }}</a>
        </div>
      </div>

      <div v-reveal="{ delay: 160 }" class="hero-visual" :aria-label="t.ui.heroSummary">
        <div class="terminal-card">
          <div class="terminal-top">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="terminal-body">
            <p><span>const</span> perfil = {</p>
            <p>&nbsp;&nbsp;rol: 'AI Developer',</p>
            <p>&nbsp;&nbsp;focus: 'AI + Web',</p>
            <p>&nbsp;&nbsp;stack: ['Vue', 'Python', 'Node'],</p>
            <p>&nbsp;&nbsp;ai: ['Claude Code', 'Codex', 'Local LLMs'],</p>
            <p>&nbsp;&nbsp;status: 'learning by building'</p>
            <p>}</p>
          </div>
        </div>

        <div class="stats-grid">
          <article
            v-for="(stat, index) in t.stats"
            :key="index"
            v-reveal="{ delay: 260 + index * 80 }"
            class="stat-card"
          >
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
