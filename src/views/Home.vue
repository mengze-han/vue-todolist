<template>
  <div>
    <v-subheader class="ma-1">???????</v-subheader>
    <feild-add />
    <task-list v-if="$store.state.items.length" />
    <no-task v-else />
    <button-done-sorting v-if="$store.state.sorting" />
  </div>
</template>

<script>
import FeildAdd from "@/components/Todo/FeildAdd";
import NoTask from "@/components/Todo/NoTask";
import TaskList from "@/components/Todo/TaskList";
import ButtonDoneSorting from "@/components/Todo/ButtonDoneSorting";

export default {
  components: {
    FeildAdd,
    NoTask,
    TaskList,
    ButtonDoneSorting,
  },
};
</script>
