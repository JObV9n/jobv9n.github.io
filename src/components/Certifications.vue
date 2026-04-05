<script setup>
import { Icon } from '@iconify/vue'
import { portfolioData } from '../data/portfolio.js'
</script>

<template>
  <section class="section certifications" id="certifications">
    <div class="section-inner">
      <div class="section-header">
        <div class="section-divider">
          <Icon icon="game-icons:wax-seal" />
          <Icon icon="game-icons:wax-seal" />
          <Icon icon="game-icons:wax-seal" />
        </div>
        <h2>Purity Seals & Honors</h2>
      </div>
      <div class="certs-grid">
        <div class="cert-card" v-for="cert in portfolioData.certifications" :key="cert.name">
          <Icon :icon="cert.icon" class="cert-icon" />
          <h3 class="cert-name">{{ cert.name }}</h3>
          <div class="cert-issuer">{{ cert.issuer }}</div>
          <div class="cert-year">Earned {{ cert.year }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
