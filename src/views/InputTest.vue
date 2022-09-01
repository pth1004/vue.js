<template>
  <div>
    <h1>binding test</h1>
    <div>
      <input v-model="message" />
    </div>
    <div style="background-color: yellow">{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
