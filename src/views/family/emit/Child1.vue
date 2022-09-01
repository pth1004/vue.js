<template>
  <div>
    <h3>Hi, I am Alice</h3>
    <p>I want my parent to give me money</p>
    <b-button variant="primary" @click="updateTodoA">Money</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    updateTodoA: function () {
      this.$emit('updateTodo', 'give to Alice money')
    }
  }
}
</script>

<style lang="scss" scoped></style>
