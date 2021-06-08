<template>
  <v-list class="pt-0" two-line flat>
    <task-detail
      v-for="item in $store.getters.taskFiltered"
      :key="item.index"
      :item="item"
    />
  </v-list>
</template>

<script>
import TaskDetail from "./TaskDetail";
export default {
  components: {
    TaskDetail,
  },
};
</script>

<style></style>
