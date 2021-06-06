<template>
  <div>
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
        <v-list-item-action @click.stop="dialogs.delete = true">
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <dialog-delete
      v-if="dialogs.delete"
      :item="item"
      @close="dialogs.delete = false"
    />
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      dialogs: {
        delete: false,
      },
    };
  },
  components: {
    "dialog-delete": require("@/components/Dialog/DialogDelete").default,
  },
};
</script>

<style lang="sass"></style>
