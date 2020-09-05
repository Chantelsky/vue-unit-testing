<template>
  <div class="number">
    <span>{{ randomNumber }}</span>
    <button @click="getRandomNumber">Generate Random Number</button>
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      randomNumber: 0
    }
  },
  methods: {
    getRandomNumber() {
      this.randomNumber =
        Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
    }
  }
}
</script>

<style>
.number {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  width: 10%;
}
</style>