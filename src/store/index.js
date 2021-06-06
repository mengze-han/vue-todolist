import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      { index: 0, msg: "做一顿油焖大虾", done: true },
      { index: 1, msg: "做一顿糖醋小排", done: false },
      { index: 2, msg: "去见对方的朋友", done: false },
      { index: 3, msg: "一起看一场电影", done: false },
    ],
  },
  mutations: {
    addTask(state, newTaskMsg) {
      let newTaskItem = {
        index: Date.now(),
        msg: newTaskMsg,
        done: false,
      };

      state.items.push(newTaskItem);
    },
    doneTask(state, index) {
      let task = state.items.filter((task) => task.index === index)[0];
      task.done = !task.done;
    },
    deleteTask(state, index) {
      state.items = state.items.filter((task) => task.index != index);
    },
  },
  actions: {},
  modules: {},
});
