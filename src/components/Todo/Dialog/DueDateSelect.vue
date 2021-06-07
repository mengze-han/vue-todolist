<template>
  <v-dialog
    ref="dialog"
    :value="true"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="$emit('close')"> Cancel </v-btn>
      <v-btn text color="primary" @click="saveDueDate"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      date: null,
    };
  },
  mounted() {
    this.date = this.item.dueDate ? this.item.dueDate : "2020-01-3";
    console.log(this.date);
  },
  methods: {
    saveDueDate() {
      let payload = {
        index: this.item.index,
        dueDate: this.date,
      };
      console.log(payload);
      this.$store.dispatch("saveDueDate", payload);
      this.$emit("close");
    },
  },
};
</script>

<style></style>
