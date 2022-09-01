<template>
  <div>
    <app-header />
    <h1>Component Test</h1>
    <app-testbootsrap />
    <app-footer />
  </div>
</template>

<script>
import Header from '@/views/comp/Header.vue'
import Footer from '@/views/comp/Footer.vue'
import TestBootstrapVue from '../TestBootstrap.vue'

export default {
  components: {
    'app-header': Header,
    'app-testbootsrap': TestBootstrapVue,
    'app-footer': Footer
  }
}
</script>

<style lang="scss" scoped></style>
