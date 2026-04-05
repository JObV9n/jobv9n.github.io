<script setup>
import { portfolioData } from '../data/portfolio.js'

const currentYear = new Date().getFullYear()
const fullName = portfolioData.name + ' ' + portfolioData.lastName
</script>

<template>
  <footer class="footer">
    <p class="footer-motto">"In Code We Trust, In Tests We Believe"</p>
    <p class="footer-copy">
      &copy; {{ currentYear }} <span>{{ fullName }}</span>. All rights reserved under Imperial Law.
    </p>
  </footer>
</template>
