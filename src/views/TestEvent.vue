<template>
  <div>
    <center>
      <h3>1. 클릭/더블클릭 이벤트</h3>
      <p>나의 나이는: {{ age }}</p>
      <b-button @click="addAge(1)">1살 추가</b-button>
      <b-button @click="deleteAge(1)">1살 감소</b-button>
      <b-button @dblclick="addAge(10)">10살 추가</b-button>
      <b-button @click.once="addAge(1)">1살 추가(한번만)</b-button>
      <b-button @click="returndAge()">다시 내 나이로</b-button>
      <hr />
      <h3>2. 콘솔 메세지 출력 이벤트</h3>
      <input v-model="message" />
      <b-button @click="printMessage">콘솔 프린트</b-button>
      <p>{{ message }}</p>
      <hr />
      <h3>3. 마우스 이벤트</h3>
      <div style="margin-top: 20px; height: 200px; width: 300px; border: 1px solid red" @mousemove="mouseTrack">
        마우스 X: {{ mouseX }}, 마우스 Y: {{ mouseY }}
      </div>
      <hr />
      <h3>4. 키보드 이벤트</h3>
      <div>이름: <input v-model="inputName" @keyup.enter="setMyName" />Enter 이벤트</div>
      <div>아이디: <input v-model="inputId" @keyup.Ctrl.enter="setMyId" />Ctrl + Enter 이벤트</div>
      <p>나의 이름: {{ myName }}</p>
      <p>나의 아이디: {{ myId }}</p>
    </center>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 27,
      message: null,
      mouseX: 0,
      mouseY: 0,
      inputName: null,
      inputId: null,
      myName: null,
      myId: null
    }
  },
  methods: {
    addAge(year) {
      this.age += year
    },
    deleteAge(year) {
      this.age -= year
    },
    returnAge() {
      this.age = 27
    },
    printMessage() {
      console.log('print console', this.message)
    },
    mouseTrack(event) {
      // console.log(event)
      this.mouseX = event.offsetX
      this.mouseY = event.offsetY
    },
    setMyName() {
      this.myName = this.inputName
    },
    setMyId() {
      this.myId = this.inputId
    }
  }
}
</script>

<style lang="scss" scoped></style>
