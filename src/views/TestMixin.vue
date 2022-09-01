<template>
  <div>
    <hi>Mixin Test</hi>
    <p>{{ mixin.test }}</p>
  </div>
</template>

<script>
import commonMx from '@/components/mixin/commonMixin'

export default {
  mixins: [commonMx],
  data() {
    return {}
  },
  created() {
    this.mixinTest()
  }
}
</script>

<style lang="scss" scoped></style>
