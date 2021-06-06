<template>
  <v-list-item
    @click="$store.dispatch('doneTask', item)"
    :class="{ blue: item.done }"
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
      <v-list-item-action>
        <!-- <v-btn icon>
            <v-icon color="grey lighten-1">mdi-delete</v-icon>
          </v-btn> -->
        <!-- <task-menu @close="dialogs.delete = true" /> -->
        <task-menu :item="item" />
      </v-list-item-action>
    </template>
  </v-list-item>
</template>

<script>
export default {
  props: ["item"],
  components: {
    "task-menu": require("@/components/Todo/TaskMenu").default,
  },
};
</script>

<style lang="sass"></style>
