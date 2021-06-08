<template>
  <v-list-item
    @click="$store.dispatch('doneTask', item)"
    :class="{ blue: item.done }"
    class="white"
    :ripple="false"
  >
    <template v-slot:default>
      <v-list-item-action>
        <v-checkbox :input-value="item.done" color="primary"></v-checkbox>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title
          :class="{ 'text-decoration-line-through': item.done }"
          >{{ item.msg }}</v-list-item-title
        >
        <v-list-item-subtitle>{{ item.index }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action v-if="item.dueDate">
        <v-list-item-action-text>
          <v-icon small>mdi-calendar</v-icon>{{ item.dueDate | formatDate }}
        </v-list-item-action-text>
      </v-list-item-action>
      <v-list-item-action>
        <task-menu :item="item" />
      </v-list-item-action>
      <v-list-item-action v-if="$store.state.sorting">
        <v-btn color="primary" class="handle" icon>
          <v-icon>mdi-drag-horizontal-variant</v-icon>
        </v-btn>
      </v-list-item-action>
    </template>
  </v-list-item>
</template>

<script>
import { format } from "date-fns";

export default {
  props: ["item"],
  filters: {
    formatDate(value) {
      return format(new Date(value), "yyyy/MM/dd");
    },
  },
  components: {
    "task-menu": require("@/components/Todo/TaskMenu").default,
  },
};
</script>

<style lang="sass">
.sortable-ghost
  opacity: 0
.sortable-drag
  box-shadow: 0 0 10px rgba(0,0,0,3)
</style>
