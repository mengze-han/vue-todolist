<template>
  <div>
    <v-subheader class="ma-1">答应你的事情</v-subheader>
    <feild-add />
    <task-list v-if="$store.state.items.length" />
    <no-task v-else />
  </div>
</template>

<script>
import FeildAdd from "@/components/Todo/FeildAdd";
import NoTask from "@/components/Todo/NoTask";
import TaskList from "@/components/Todo/TaskList";

export default {
  components: {
    FeildAdd,
    NoTask,
    TaskList,
  },
};
</script>
