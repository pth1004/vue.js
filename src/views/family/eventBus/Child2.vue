<template>
  <div>
    <h3>Greeting to you, I am Bob</h3>
    <p>Alice said to me: {{ aliceMessage }}</p>
    <p>
      Bob said: {{ bobMessage }}
      <b-button size="sm" variant="primary" @click="whatIdontknow">reply to Alice</b-button>(여기를 구현해 보도록 하자.)
    </p>
  </div>
</template>

<script>
import { EventBus } from './eventBus'

export default {
  data() {
    return {
      aliceMessage: '',
      bobMessage: ''
    }
  },
  created() {
    EventBus.$on('aliceSaid', message => {
      this.aliceMessage = message
    }),
      EventBus.$on('bobSaid', message => {
        this.bobMessage = message
      })
  }
}
</script>

<style lang="scss" scoped></style>
