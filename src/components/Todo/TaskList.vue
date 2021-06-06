<template>
  <v-list class="pt-0" two-line flat>
    <task-detail
      multiple
      v-for="item in $store.state.items"
      :key="item.index"
      :item="item"
    >
      <v-divider />
    </task-detail>
  </v-list>
</template>

<script>
import TaskDetail from "./TaskDetail";
export default {
  components: {
    TaskDetail,
  },
  data() {
    return {
      //   settings: [],
    };
  },
};
</script>

<style></style>
