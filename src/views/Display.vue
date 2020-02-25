<template>
  <div class="display">
    <p>{{ list }}</p>
    <button @click="next">Next</button>
    <button @click="pop">Pop</button>
    <button @click="shift">Shift</button>
    <input v-model="newNode" type="text" />
    <button @click="push">Push</button>
    <button @click="unshift">Unshift</button>
  </div>
</template>
<script>
export default {
  name: "Display",
  data() {
    return {
      newNode: ""
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
    }
  }
};
</script>
<style></style>
