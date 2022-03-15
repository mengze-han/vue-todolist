<template>
  <v-text-field
    v-model="newTaskMsg"
    label="写下你想做的事情"
    hide-details
    append-icon="mdi-plus"
    prepend-inner-icon="mdi-robot-love-outline"
    class="pa-3"
    clearable
    outlined
    @keyup.enter="addTask"
  >
    <template v-slot:append>
      <v-icon @click="addTask" color="primary" :disabled="newTaskInvaild">
        mdi-plus</v-icon
      >
    </template>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskMsg: "",
    };
  },
  computed: {
    newTaskInvaild() {
      return !this.newTaskMsg;
    },
  },
  methods: {
    addTask() {
      if (!this.newTaskInvaild) {
        this.newTaskMsg;
        this.$store.dispatch("addTask", this.newTaskMsg);
        this.newTaskMsg = "";
      }
    },
  },
};
</script>

<style></style>
