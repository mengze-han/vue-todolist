<template>
  <div>
    <v-list-item
      @click="$store.commit('doneTask', item.index)"
      :class="{ blue: item.done }"
    >
      <template v-slot:default="{ active }">
        <v-list-item-action>
          <v-checkbox
            v-model="item.done"
            :input-value="active"
            color="primary"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': item.done }"
            >{{ item.msg }}</v-list-item-title
          >
          <v-list-item-subtitle>{{ item.index }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action
          @click.stop="$store.commit('deleteTask', item.index)"
        >
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style></style>
