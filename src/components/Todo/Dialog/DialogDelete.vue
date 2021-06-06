<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Delete this task? </v-card-title>
      <v-card-text>Are you sure delete it?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" text @click="$store.dispatch('deleteTask', item)">
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
};
</script>

<style></style>
