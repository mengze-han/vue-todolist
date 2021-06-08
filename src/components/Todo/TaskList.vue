<template>
  <v-list class="pt-0" two-line flat>
    <draggable v-model="items" handle=".handle">
      <task-detail v-for="item in items" :key="item.index" :item="item" />
    </draggable>
  </v-list>
</template>

<script>
import TaskDetail from "./TaskDetail";
import draggable from "vuedraggable";

export default {
  components: {
    TaskDetail,
    draggable,
  },
  computed: {
    items: {
      get() {
        console.log(1);
        return this.$store.getters.taskFiltered;
      },
      set(value) {
        console.log(2);
        this.$store.commit("setTasks", value);
      },
    },
  },
};
</script>

<style></style>
