<template>
  <div>
    <v-subheader class="ma-1">答应你的事情</v-subheader>
    <v-text-field
      v-model="newTaskMsg"
      label="写下你想和我一起做的事情"
      hide-details
      append-icon="mdi-plus"
      prepend-inner-icon="mdi-robot-love-outline"
      class="pa-3"
      clearable
      outlined
      @click:append-outer="addTask"
      @keyup.enter="addTask"
    ></v-text-field>
    <v-list class="pt-0" two-line flat>
      <v-list-item-group
        v-model="settings"
        multiple
        v-if="$store.state.items.length"
      >
        <div v-for="item in $store.state.items" :key="item.index">
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
                <v-list-item-subtitle>{{ item.done }}</v-list-item-subtitle>
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
      </v-list-item-group>
      <div v-else class="no-tasks">
        <v-icon size="100"> mdi-check</v-icon>
        <div class="text-h5 indigo--text">NO TASKS</div>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTaskMsg: "",
      settings: [],
      // items: [
      //   { index: 0, msg: "做一顿油焖大虾", done: true },
      //   { index: 1, msg: "做一顿糖醋小排", done: false },
      //   { index: 2, msg: "去见对方的朋友", done: false },
      //   { index: 3, msg: "一起看一场电影", done: false },
      // ],
    };
  },
  methods: {
    addTask() {
      this.$store.commit("addTask", this.newTaskMsg);
      this.newTaskMsg = "";
    },
    // doneTask(state, index) {
    //   let task = state.items.filter((task) => task.index === index)[0];
    //   task.done = !task.done;
    // },
    // deleteTask(state, index) {
    //   state.items = state.items.filter((task) => task.index != index);
    // },
  },
};
</script>

<style lang="sass">
.no-tasks
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: 0.5
</style>
