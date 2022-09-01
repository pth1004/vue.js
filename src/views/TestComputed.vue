<template>
  <div>
    <h1>Computed Test</h1>
    <button @click="a++">Add To A</button>
    <button @click="b++">Add To B</button>
    <p>A - {{ a }}</p>
    <p>B - {{ b }}</p>
    <p>Age + A = {{ addToA }}</p>
    <p>Age + B = {{ addToB }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 0,
      b: 0,
      age: 27
    }
  },
  computed: {
    addToA: function () {
      console.log('addToA', this.a, this.age)
      return this.a + this.age
    },
    addToB() {
      console.log('addToB', this.b, this.age)
      return this.b + this.age
    }
  }
}
</script>

<style lang="scss" scoped></style>
