<script setup>
import { profile, stats } from '../data/portfolio'
</script>

<template>
  <section id="inicio" class="hero section">
    <div class="container hero-grid">
      <div class="hero-content reveal">
        <p class="eyebrow">{{ profile.roleFocus }}</p>
        <h1>{{ profile.name }}</h1>
        <p class="hero-title">{{ profile.title }}</p>
        <p class="hero-copy">{{ profile.tagline }}</p>

        <div class="hero-actions" aria-label="Acciones principales">
          <a class="button primary" href="#proyectos">Ver proyectos</a>
          <a class="button secondary" :href="profile.cv" download>Descargar CV</a>
          <a class="button ghost" href="#contacto">Contacto</a>
        </div>
      </div>

      <div class="hero-visual reveal" aria-label="Resumen profesional">
        <div class="terminal-card">
          <div class="terminal-top">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="terminal-body">
            <p><span>const</span> perfil = {</p>
            <p>&nbsp;&nbsp;rol: 'Junior Developer',</p>
            <p>&nbsp;&nbsp;focus: 'AI + Web',</p>
            <p>&nbsp;&nbsp;stack: ['Vue', 'Python', 'Node'],</p>
            <p>&nbsp;&nbsp;status: 'learning by building'</p>
            <p>}</p>
          </div>
        </div>

        <div class="stats-grid">
          <article v-for="stat in stats" :key="stat.label" class="stat-card">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
