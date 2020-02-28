<template>
  <div class="display container-fluid">
    <div class="row justify-content-center">
      <div class="col-3">
        <p>{{ list }}</p>
        <div class="buttons-div">
          <button class="btn btn-primary div-button" @click="next">Next</button>
          <button class="btn btn-primary div-button" @click="pop">Pop</button>
          <button class="btn btn-primary div-button" @click="shift">
            Shift
          </button>
        </div>
      </div>
    </div>
    <div class="row justify-content-center mt-4">
      <div class=" col-6 d-flex justify-content-center">
        <input v-model="newNode" type="text" />
        <button class="btn btn-primary" @click="push">Push</button>
        <button class="btn btn-primary" @click="unshift">Unshift</button>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12 d-flex justify-content-center">
        <input
          type="number"
          step="0.01"
          max="100.00"
          required
          v-for="(num, index) in numbers"
          :key="num"
          v-model="numbers[index]"
        />
        <button @click="sort" class="btn btn-info">Sort</button>
      </div>
      <div class="col-12 d-inline-flex justify-content-between">
        <div v-for="num in numbers" :key="num">{{ num }}</div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <input
          type="number"
          min="1"
          max="100"
          step="1"
          v-model="numDigits"
        /><button @click="fib(numDigits)">
          Get Fibonacci
        </button>
        <div class="" v-for="num in fibonacci" :key="num">{{ num }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Display",
  data() {
    return {
      newNode: "",
      numbers: Array(5),
      numDigits: 0,
      fibonacci: []
    };
  },
  mounted() {
    this.$store.dispatch("setup");
  },
  computed: {
    currentNode() {
      return this.$store.state.LinkedList.head;
    },
    list() {
      return this.$store.state.LinkedList;
    }
  },
  methods: {
    next() {
      this.$store.dispatch("next");
    },
    pop() {
      this.$store.dispatch("pop");
    },
    push() {
      if (!this.newNode) {
        return;
      }
      let node = this.newNode;
      this.$store.dispatch("push", node);
      this.newNode = "";
    },
    unshift() {
      if (!this.newNode) {
        return;
      }
      let node = this.newNode;
      this.$store.dispatch("unshift", node);
      this.newNode = "";
    },
    shift() {
      this.$store.dispatch("shift");
    },
    sort() {
      this.numbers.sort((a, b) => {
        return a - b;
      });
    },
    fib(num) {
      if (num == 1) {
        return [0, 1];
      }
      this.fibonacci = this.fib(num - 1);
      this.fibonacci.push(
        this.fibonacci[this.fibonacci.length - 1] +
          this.fibonacci[this.fibonacci.length - 2]
      );
      return this.fibonacci;
    }
  }
};
</script>
<style>
.div-button {
  width: 100%;
  border-radius: 3em;
}
.buttons-div {
  display: flex;
  justify-content: space-between;
}
</style>
