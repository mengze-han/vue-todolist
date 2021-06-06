<template>
  <v-text-field
    v-model="newTaskMsg"
    label="写下你想和我一起做的事情"
    hide-details
    append-icon="mdi-plus"
    prepend-inner-icon="mdi-robot-love-outline"
    class="pa-3"
    clearable
    outlined
    @click:append-outer="addTask"
    @keyup.enter="addTask"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskMsg: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTaskMsg) {
        this.$store.dispatch("addTask", this.newTaskMsg);
        this.newTaskMsg = "";
      }
    },
  },
};
</script>

<style></style>
