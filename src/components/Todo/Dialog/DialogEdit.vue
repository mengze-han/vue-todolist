<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Edit this task? </v-card-title>
      <v-card-text>
        Edit title of this task
        <v-text-field v-model="taskTitle" @keyup.enter="updateItem" />
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="red"
          text
          @click="updateItem"
          :disabled="taskTitleInvalid"
        >
          Yes
        </v-btn>
        <v-btn text @click="$emit('close')"> No </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      taskTitle: null,
    };
  },
  mounted() {
    this.taskTitle = this.item.msg;
  },
  computed: {
    taskTitleInvalid() {
      return !this.taskTitle || this.taskTitle == this.item.msg;
    },
  },
  methods: {
    updateItem() {
      let payload = {
        index: this.item.index,
        msg: this.taskTitle,
      };
      this.$store.dispatch("updateItem", payload);
      this.$emit("close");
    },
  },
};
</script>

<style></style>
