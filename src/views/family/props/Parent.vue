<template>
  <div>
    <h1>Props Test</h1>
    <h2>I am Parent</h2>
    <p>I will make my children do something.</p>
    <div style="border: 1px solid red">
      <alice job="party" :user="myAlice" />
    </div>
    <div style="border: 1px solid blue">
      <bob job="game" />
    </div>
  </div>
</template>

<script>
import Alice from './Child1.vue'
import Bob from './Child2.vue'

export default {
  components: {
    Alice,
    Bob
  },
  data() {
    return {
      myAlice: {
        name: 'Alice',
        who: 'My daughter'
      }
    }
  }
}
</script>
